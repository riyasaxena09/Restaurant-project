import React from 'react'
import './order.css'
import { useEffect } from 'react';
import { useCallback } from 'react';
import Navigation from './navigation';
import { useState } from 'react';
import { counteractions } from './redux';
import { useDispatch, useSelector } from 'react-redux';
function Order(){
  const dispatch=useDispatch();
  const [ful,setful]=useState([]);
  const [sum,setsum]=useState(0);
  const data=useSelector(state=>state.counter.data)
  let m=[];
  function Remove(key,price){
   
    fetch(`https://recepi-app-a844b-default-rtdb.firebaseio.com/res/${key}.json`,{
      method:'DELETE',
      headers:{
          'Content-type':'application/json',
      },
  }).then((res)=>{
      if(res.ok){
        console.log("ok")

        setful((prevItems) => prevItems.filter(item => item.key !== key))
        setsum((prevTotal) => prevTotal - price);
  return res.json();
  }else{
          return res.json().then((data)=>{
              let errormsg="not a valid email";
             throw new Error(errormsg);
          });
      }
  }).then((data)=>{
      
  })
  }
    const fetchData = useCallback(async () => {
      try {
        const url = 'https://recepi-app-a844b-default-rtdb.firebaseio.com/res.json';
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result)
     let s=0;
        for(const key in result){ 
          s+=result[key].price;
          m.push({
      
 name:result[key].name,
             url:result[key].url,
             price:result[key].price, 
         key:key,
        })  
} 
setsum(s);
setful(m);
        dispatch(counteractions.added(m));
      } catch (error) {
        console.log(error.message);
      }
    },[])

useEffect(() => {
    fetchData();
  },[]); 
  
  console.log(ful)
  return (
    <div className='or'>
      <div className="navbar sticky" id="navbar">
      <Navigation></Navigation>
      </div>
  <div className='or'>
     {ful.map((item)=>{
 
    return<div className='n'><span className='na'>{item.name}</span>
    <span className='ru'>${item.price}</span>
    <span><img className='i'  src={item.url}></img></span>
    <span><button className="o" onClick={()=>Remove(item.key,item.price)} >remove item</button></span>
    </div>
   
    })} 
      </div>
      <div className='total'>Total Amount-${sum}</div>
      <div className='tota'>Pay Now</div>

  </div>
  )
}

export default Order;