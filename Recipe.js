import React from 'react'
import './recipe.css'
import { counteractions } from './redux';
import {useSelector,useDispatch} from 'react-redux'
function Recipe({recipe}){
  const dispatch=useDispatch();
  const data=useSelector(state=>state.counter.data);
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
     
        <div className="recipeTile">
          <img
            className="recipeTile__image"
            src={recipe["recipe"]["image"]}
            alt="tile-image"
            onClick={() => window.open(recipe["recipe"]["url"])}
          />
          <span className="recipeTile__name">{recipe["recipe"]["label"]}</span>
          <div className='rup'><span className='order' onClick={()=>add(recipe["recipe"]["image"],recipe["recipe"]["label"],350)}>Order Now</span><span className='rupee'>$350</span></div>
        </div>
  )
  
}

export default Recipe