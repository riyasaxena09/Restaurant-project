import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { counteractions } from './redux';
import Menu from './Menu';
import Navigation from './navigation';
import Image from './images/thix.webp';
import app from './images/app.jpg'
import fast from './images/fast.jpg'
import bk from './images/main.jpg'
import Footer from './footer';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import rest from './images/res.webp';
import './one.css'

function One(){
  const dispatch=useDispatch();
const data=useSelector(state=>state.counter.data)
  const nav=useNavigate();
  
  

    const backgroundImageStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover', // Adjust as needed
    minWidth:"115vh",
    backgroundPosition: 'center', // Adjust as needed
  // Adjust as needed
  };
 
  return (
   <>
   <div style={backgroundImageStyle}>
   <div className="navbar sticky" id="navbar">
     <Navigation></Navigation>  
</div>
 <div style={{color:'red',fontStyle:'italic',display:'flex',justifyContent:'center',fontSize:'6vh',fontFamily:"cursive"}}>GrillIn Restaurant</div>
<div><p className='text'>Foodies welcome here...Savor the Extraordinary: A Culinary Journey Awaits at GrillIn. Elevate Your Dining Experience with Our Chef's Masterful Creations.From Our Kitchen to Your Table: Unforgettable Dining Awaits You.</p><p className='texten'>Satisfy Your Cravings for Extraordinary Flavor and Impeccable Service</p></div> 
<Menu></Menu>

</div>
<div>
  <div className='food'>Food offered by us</div>
  <div className='teen'>
    <span className='select'><img src={fast} className='imenu'></img><div className='fast' >BreakFast</div></span>
    <span className='select'><p className='restp'>Highlights of American cuisine include milkshakes, barbecue, and a wide range of fried foods.</p></span>
    <span className='select'><img src={bk} className='imenu'></img><div className='fast' >Main Course</div></span>
  </div>
  <div className='new'><span className='select'><img src={app} className='imenu'></img><div className='fast'>Appetizers</div></span></div>
</div>

  <h1 className='food'>About our restaurant</h1>
<div className='rest'>
  <div className="restp">

    Remember to adjust the paths in the import statements based on your project structure. This is a basic example, and you can enhance it by adding images, additional details, or interactive features based on your specific requirements.
    

    <div className='book'>
    <button style={{fontSize:"3vh"}}>
  Book through call
</button>
<div style={{fontSize:"3vh"}}>+ 345 466 456</div>
</div>
</div>
    <div>
<img className="resti" src={rest}></img>

    </div>
    
  </div>
<div>
<Footer></Footer>
</div>
   </>
  )
}


export default One;