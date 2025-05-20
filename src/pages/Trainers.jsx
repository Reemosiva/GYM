const Trainers = () => {
  return (
    <section className="section trainers-page">
      <div className="container">
        <h1 className="section-title">Our Expert Trainers</h1>
        
        <div className="grid grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-lg">
          {[
            {
              name: "John Davis",
              position: "Head Trainer",
              image: "https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg?auto=compress&cs=tinysrgb&w=1600",
              bio: "Certified personal trainer with 10+ years of experience in strength and conditioning."
            },
            {
              name: "Sarah Wilson",
              position: "Yoga Instructor",
              image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1600",
              bio: "RYT-500 certified yoga instructor specializing in Vinyasa and Power Yoga."
            },
            {
              name: "Mike Johnson",
              position: "CrossFit Coach",
              image: "https://images.pexels.com/photos/6456211/pexels-photo-6456211.jpeg?auto=compress&cs=tinysrgb&w=1600",
              bio: "Level 2 CrossFit trainer with expertise in Olympic weightlifting."
            },
            {
              name: "Emma Thompson",
              position: "Cardio Specialist",
              image: "https://images.pexels.com/photos/7991816/pexels-photo-7991816.jpeg?auto=compress&cs=tinysrgb&w=1600",
              bio: "Specialized in HIIT and endurance training with nutrition certification."
            },
            {
              name: "Alex Martinez",
              position: "Boxing Coach",
              image: "https://images.pexels.com/photos/6456297/pexels-photo-6456297.jpeg?auto=compress&cs=tinysrgb&w=1600",
              bio: "Former professional boxer with 8 years of coaching experience."
            },
            {
              name: "Lisa Chen",
              position: "Pilates Instructor",
              image: "https://images.pexels.com/photos/7991531/pexels-photo-7991531.jpeg?auto=compress&cs=tinysrgb&w=1600",
              bio: "Certified Pilates instructor focusing on core strength and rehabilitation."
            }
          ].map((trainer, index) => (
            <div key={index} className="trainer-card card">
              <img src={trainer.image} alt={trainer.name} className="trainer-img" />
              <div className="card-content">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-position">{trainer.position}</p>
                <p className="card-text">{trainer.bio}</p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;