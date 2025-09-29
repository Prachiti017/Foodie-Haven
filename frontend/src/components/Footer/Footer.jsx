import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <h1>Quick Food</h1> 
            {/*img src={assets.logo} alt="" />*/}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, vel doloremque. Error quidem dolores architecto libero, eveniet nesciunt eius! Nulla officiis atque porro autem quod officia quasi. Delectus, possimus saepe.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
             <li>+1-233-223-5667</li>
             <li>contact@quickfood.com</li>
           </ul>
        </div>  
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 @QuickFood.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
