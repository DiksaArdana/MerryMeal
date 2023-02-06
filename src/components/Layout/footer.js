<<<<<<< HEAD
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from "react-icons/bs"
import { NavLink } from "react-router-dom";
import "../../pages/_myStyle.css"
const Footer = ()=>{
    return(
<div>
=======
import React from 'react'
import { NavLink } from "react-router-dom";

const footer = () => {
  return (
    <div>
>>>>>>> 3010a308dd710677723fcd62a76de42b5ddcb249
        <footer className="Footerbody">
    <div className="contentfooter">
      <div className="top">
        <div className="logo-details">
          <span className="logo_name">Merry Meals</span>
        </div>
        <div className="media-icons">
<<<<<<< HEAD
        <NavLink to="#"><BsFacebook></BsFacebook></NavLink>
        <NavLink to="#"><BsTwitter/></NavLink>
        <NavLink to="#"><BsInstagram/></NavLink>
        <NavLink to="#"><BsLinkedin/></NavLink>
        <NavLink to="#"><BsYoutube/></NavLink>
=======
        <NavLink to="#"><i class="fab fa-facebook-f"></i></NavLink>
        <NavLink to="#"><i class="fab fa-twitter"></i></NavLink>
        <NavLink to="#"><i class="fab fa-instagram"></i></NavLink>
        <NavLink to="#"><i class="fab fa-linkedin-in"></i></NavLink>
        <NavLink to="#"><i class="fab fa-youtube"></i></NavLink>
>>>>>>> 3010a308dd710677723fcd62a76de42b5ddcb249

        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Partner</li>
          <li><a href="https://www.nlfoodpartnership.com">Netherland Food Partnership</a></li>
          <li><a href="http://lovaniogourmet.com/">Lovanio Gourmet</a></li>
          <li><a href="https://www.weforum.org/blue-food-partnership">Blue food Partnership</a></li>
         
        </ul>
        <ul className="box">
          <li className="link_name">Page</li>
          <li><NavLink to="/">Homepage</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/terms"> Terms and Conditions</NavLink></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><NavLink to="/login"> Login</NavLink></li>
          <li><NavLink to="/signup"> Sign Up</NavLink></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 <a href="#">MerryMeals.com</a>All rights reserved</span>
        
      </div>
    </div>
  </footer>
<<<<<<< HEAD

    </div>
=======
>>>>>>> 3010a308dd710677723fcd62a76de42b5ddcb249

    </div>
  )
}

export default footer;