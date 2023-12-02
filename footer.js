import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import fb from './images/fb.jpg';
import twit from './images/twit.jpg'
import insta from './images/insta.jpg'
function Footer(){
  return (
    <>
     <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>GrillIn restaurant</span>
          </div>
          <div className="footer-links">
            <ul>
              <li><Link to="/sign">Home</Link></li>
              <li><Link to="/Savemenu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            {/* Include social media icons or links */}
            <a href="https://facebook.com"><img className="im" src={fb} alt="Facebook" /></a>
            <a href="https://twitter.com"><img className="im" src={twit} alt="Twitter" /></a>
            <a href="https://instagram.com"><img className="im" src={insta} alt="Instagram" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 GrillIn. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer