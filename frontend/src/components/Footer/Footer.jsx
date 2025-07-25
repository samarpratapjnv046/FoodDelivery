// import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import {  useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate("/")             // 👈 Navigate to Home
    window.scrollTo({         // 👈 Scroll to Top Smoothly
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook" />
                    <img src={assets.twitter_icon} alt="twitter" />
                    <img src={assets.linkedin_icon} alt="linkedin" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li onClick={handleHomeClick} style={{cursor: "pointer"}}>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH </h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 @ Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer
