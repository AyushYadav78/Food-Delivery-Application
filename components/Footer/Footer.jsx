



import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
         <a href="/"> <img src={assets.tasty} alt="logo" className="footer-logo" />
          </a>

          <p>
            Users can explore different restaurants, browse menus, add their
            favorite dishes to the cart, and place orders in just a few taps.
            With real-time tracking, secure payments, and fast doorstep
            delivery, it creates a smooth and enjoyable food ordering
            experience anytime, anywhere.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.facebook_icon} alt="facebook" />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.twitter_icon} alt="twitter" />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <a href="/"><li onClick={() => navigate("/")}>Home</li></a>
            <a href="/"><li>About Us</li></a>
            <a href="/"><li>Delivery</li></a>
            <a href="/"><li>Privacy Policy</li></a>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-123-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copy">
        Copyright 2026 © Tomato.com | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;