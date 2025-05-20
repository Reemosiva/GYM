import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-4 footer-grid md-grid-cols-2 sm-grid-cols-1 gap-lg">
          <div>
            <div className="footer-logo">
              Fitness<span>Fusion</span>
            </div>
            <p className="footer-text">
              Transform your body and mind with our comprehensive fitness programs and state-of-the-art facilities.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/classes" className="footer-link">Classes</Link></li>
              <li><Link to="/trainers" className="footer-link">Trainers</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Working Hours</h4>
            <div className="footer-hours">
              <div className="footer-day">
                <span>Monday - Friday:</span>
                <span>5:00AM - 9:00AM To 4.30PM - 9.30PM</span>
              </div>
              
              
              <div className="footer-day">
                <span>Sunday:</span>
                <span>Leave</span>
              </div>
            </div>
            <div className="footer-newsletter">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="footer-text">Subscribe to get updates on new classes and promotions.</p>
              <form className="footer-form">
                <input type="email" placeholder="Your email" className="footer-input" />
                <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
              </form>
            </div>
          </div>
          
          <div>
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-links">
              <li className="footer-link">123 Fitness Street</li>
              <li className="footer-link">New York, NY 10001</li>
              <li className="footer-link">Phone: (123) 456-7890</li>
              <li className="footer-link">Email: info@fitnessfusion.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} FitnessFusion. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;