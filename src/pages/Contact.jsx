import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <section className="section py-xl">
        <div className="container">
          <h1 className="section-title ">Contact Us</h1>
          
          <div className="grid grid-cols-2 contact-grid md-grid-cols-1 gap-lg">
            <div>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-content">
                    <h4>Our Location</h4>
                    <p>123 Fitness Street, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-content">
                    <h4>Phone Number</h4>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-content">
                    <h4>Email Address</h4>
                    <p>info@fitnessfusion.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-content">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p>Saturday: 7:00 AM - 8:00 PM</p>
                    <p>Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343036!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1620444151026!5m2!1sen!2sus" 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Gym Location"
                ></iframe>
              </div>
            </div>
            
            <div>
              <h3 className="mb-md">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;