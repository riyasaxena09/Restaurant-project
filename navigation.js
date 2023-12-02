import React from 'react'
import loca from './images/loc.jpg'
import './nav.css'
import MyImages from './images/new.png'
import { Link } from 'react-router-dom';
function Navigation(){
  return (
    <div>
        
         <Link to="/sign">Home</Link>
        <Link to="/Searchmenu">Discover</Link>
        <Link to="/orders">My Orders</Link>
        <Link to="/sign">Contact</Link>
        <Link to='/'>Logout</Link>
    
 <span > <img className="riya" src={loca}></img>Rajendra nagar</span>
 <span > <img className="image" src={MyImages}></img>6398888414</span>
    </div>
  )
}

export default Navigation