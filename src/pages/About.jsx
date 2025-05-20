const About = () => {
  return (
    <section className="section about-page">
      <div className="container">
        <h1 className="section-title">About Us</h1>
        
        <div className="grid grid-cols-2 md-grid-cols-1 gap-lg items-center">
          <div className="about-img">
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="About Fitness Fusion" />
          </div>
          
          <div className="about-content">
            <h2>Our Story</h2>
            <p>Founded in 2010, Fitness Fusion has grown from a small local gym to a premier fitness destination. Our mission is to help every member achieve their fitness goals in a supportive and motivating environment.</p>
            
            <h2>Our Philosophy</h2>
            <p>We believe that fitness is not just about physical strength, but also about mental wellness and community support. Our integrated approach combines state-of-the-art equipment, expert guidance, and a welcoming atmosphere.</p>
            
            <div className="stats-grid grid grid-cols-2 gap-md">
              <div className="stat-item">
                <div className="stat-value">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5000+</div>
                <div className="stat-label">Happy Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Expert Trainers</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100+</div>
                <div className="stat-label">Weekly Classes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;