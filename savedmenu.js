import React from 'react'
import biryani from './images/biryani.jpg'
import chicken from './images/chicken.jpg'
import chow from './images/chowmee.jpg'
import back from './images/back.png'
import dal from './images/dal tadka.jpg'
import dosa from './images/dosa.jpg'
import momo from './images/momos.jpg'
import pasta from './images/pasta.jpg'
import paneer from './images/paneer tikka.jpg'
import { useNavigate } from 'react-router'
import { counteractions } from './redux';
import {useSelector,useDispatch} from 'react-redux'
import './saved.css'
function Savemenu(){
    const dispatch=useDispatch();
    const data=useSelector(state=>state.counter.data);
    const nav=useNavigate();
    function change(){
        nav('/');
    }
    function move(){
        nav('/Searchmenu');
    }
    function add(image,name,price){
  
    const obj={
      name:name,
      url:image,
      price:price,
      id:Math.random()
    }
    fetch("https://recepi-app-a844b-default-rtdb.firebaseio.com/res.json", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(obj),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        
          return response.json();
        })
        .then(data => {
         
          console.log('Response:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });


   }
   
  return (
    <div className='cover'>
        <img className="back" src={back} onClick={change}></img><h1 className='head'>Our Popular dishes</h1>
    <div className='dishes'>
        <div className='nam'><img src={pasta} alt="pasta"></img><span className='name'>White cheese Pasta</span>
       <div className='rup'> <span className='order' onClick={()=>add(pasta,"White cheese Pasta",100)}>Order Now</span><span className='rupee'>$100</span></div></div>

       <div className='nam'><img src={paneer}></img><span className='name'>Paneer Tikka</span>  <div className='rup'>  <span className='order' onClick={()=>add(paneer,"Paneer Tikka",230)}>Order Now</span><span className='rupee'>$230</span></div></div>

     <div className='nam'><img src={biryani}></img><span className='name'>Biryani Special</span>  <div className='rup'>  <span className='order' onClick={()=>add(biryani,"Biryani Special",150)}>Order Now</span><span className='rupee'>$150</span></div></div>

       <div className='nam'><img src={chicken}></img><span className='name'>Chicken Tandoori</span> <div className='rup'>   <span className='order' onClick={()=>add(chicken,"Chicken Tandoori",100)}>Order Now</span><span className='rupee'>$100</span></div></div>

    </div>
    <div className='dishes'>
        <div  className='nam'><img src={chow} alt="pasta"></img><span className='name'>Chowmeen</span>  <div className='rup'>  <span className='order'  onClick={()=>add(chow,"Chowmeen",400)}>Order Now</span><span className='rupee'>$400</span></div></div>
        <div  className='nam'><img src={dal}></img><span className='name'>Dal Tadka</span> <div className='rup'>   <span className='order'  onClick={()=>add(dal,"Dal Tadka",180)}>Order Now</span><span className='rupee'>$180</span></div></div>
        <div  className='nam'><img src={dosa}></img><span className='name'>Masala Dosa</span><div className='rup'>    <span className='order'  onClick={()=>add(dosa,"Masala Dosa",800)}>Order Now</span><span className='rupee'>$800</span></div></div>
        <div  className='nam'><img src={momo}></img><span className='name'>Paneer Momos</span> <div className='rup'>   <span className='order'  onClick={()=>add(momo,"Momos",200)}>Order Now</span><span className='rupee'>$200</span></div></div>
    </div>
    <div className='m'>
        <div  className='more'>Find Dish As Per your Choice ➡️</div><button onClick={move} className='go'>Go</button></div>
    </div>
  )
}

export default Savemenu;