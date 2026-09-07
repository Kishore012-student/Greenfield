import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../assets/leaf-logo.png";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="main-footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column footer-company">

          <Link to="/" className="footer-logo">

            <img
              src={logo}
              alt="GreenField"
            />

            <span>GreenField</span>

          </Link>

          <p>
            Helping you find the perfect plot for a
            better and secure future.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/about">About Us</Link>

          <Link to="/contact">Contact Us</Link>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="#">Residential Plots</a>

          <a href="#">Commercial Plots</a>

          <a href="#">Villa Plots</a>

          <a href="#">Property Consultation</a>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <div className="contact-item">

            <FaMapMarkerAlt />

            <span>
              Madurai, Tamil Nadu, India
            </span>

          </div>


          <div className="contact-item">

            <FaPhoneAlt />

            <span>
              +91 98765 43210
            </span>

          </div>


          <div className="contact-item">

            <FaEnvelope />

            <span>
              info@greenfield.com
            </span>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} GreenField.
          All Rights Reserved.
        </p>

        <div className="footer-bottom-links">

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms & Conditions
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;