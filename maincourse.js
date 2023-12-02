import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { counteractions } from './redux';
import back from './images/back.png';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import './breakfast.css';
function Maincourse(){
  const nav=useNavigate();
    const dispatch=useDispatch();
    const counter = useSelector((state) => state.counter.value);
const main=[
    {
        title:"Sweet Potato Curry",
        id:Math.random(),
price:235,
    },
    {
        title:"Chicken Drunken Noodles ",
        id:Math.random(),
        price:735,
    },
    {
        title:"Chicken Broccoli Pasta ",
        id:Math.random(),
        price:250,
    },
   {
        title:"Brown Stew Chicken",
        id:Math.random(),
        price:863,
    },
    {
        title:"shahi paneer",
        id:Math.random(),
        price:287,
    },
    {
        title:"Cajun Jambalaya Pasta",
        id:Math.random(),
price:345,
    },
    {
        title:"Teriyaki Tilapia ",
        id:Math.random(),
        price:299,
    },

]

function backing(){
  nav('/');
}
const handle= async (data) => {
dispatch(counteractions.increment());
    try {
      const response = await fetch(
        'https://restaurant-8b69b-default-rtdb.firebaseio.com/res.json', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to post data to Firebase');
      }

      // Data posted successfully
      console.log('Data posted successfully');
    } catch (error) {
      console.error('Error posting data to Firebase:', error.message);
    }
  };

  return (
    <div><h1 style={{fontSize:"5vh"}}>Maincourse</h1>
  {main.map((item)=>{
    return(
    <ul><li>{item.title} ${item.price} <button className='libtn' onClick={()=>handle(item)}>Add</button></li></ul>
    )
  })}
  <img className="back" onClick={backing} src={back}></img>
    </div>
  )
}
export default Maincourse