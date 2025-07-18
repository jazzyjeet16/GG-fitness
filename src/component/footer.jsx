import React from 'react';
import '../css/Footer.css';
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
      const navigate = useNavigate();
  return (
    <footer className="footer-wrapper">
      <div className="footer-overlay">
        <div className="footer-top">
          <div className="footer-content">
            {/* Logo & Text */}
            <div className="footer-left">
              <img src="/gg-logo.png" alt="Logo" className="footer-logo" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry’s standard dummy text ever.
              </p>
            </div>

            {/* Info */}
            <div className="footer-section">
              <h4>Information</h4>
              <ul>
                <li onClick={() => navigate("home")}>Home</li>
                <li onClick={() => navigate("training")}>Training</li>
                <li onClick={() => navigate("writing")}>Writing</li>
                <li onClick={() => navigate("terms")}>Terms & Condition</li>
                <li onClick={() => navigate("privacy")}>Privacy Policy</li>
                <li onClick={() => navigate("refund")}>Refund Policy</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>Contact</h4>
              <p><FaPhone /> 123 456 789</p>
              <p><FaWhatsapp /> Whatsapp</p>
              <p><FaEnvelope /> hola@Liftmedia.com</p>
            </div>

            {/* Bodybuilder Image */}
            <div className="footer-image-right">
              <img src="/footer-body.png" alt="Bodybuilder" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-email">ggperform@gmail.com</div>
          <div className="footer-credit">Designed by Web Prism Dynamics LLP @ 2025. All rights reserved.</div>
          <div className="footer-socials">
            Follow us 
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
