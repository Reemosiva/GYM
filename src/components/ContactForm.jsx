import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className="form-control" 
          placeholder="John Doe" 
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="form-label">Your Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="form-control" 
          placeholder="john@example.com" 
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          className="form-control" 
          placeholder="Membership Inquiry" 
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea 
          id="message" 
          name="message" 
          className="form-control" 
          placeholder="Your message here..." 
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  );
};

export default ContactForm;