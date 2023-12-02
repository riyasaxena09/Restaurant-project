import React from 'react'
import './Menu.css';
import { useNavigate } from 'react-router';
function Menu() {

  const nav=useNavigate();
  function change(){
nav('/Savemenu')
  } 
  return (
    <div className='open'>
        <button onClick={change} className='menu'>Premium Selections</button>
    </div>
  )
}

export default Menu