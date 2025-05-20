// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-subtitle">Welcome to 2nd Love Fitness</div>
          <h1 className="hero-title">
            <span>Strength your body</span> <br />
            <span>Transform Your Life</span>
          </h1>
          <p className="hero-text">
            Join our state-of-the-art fitness center and achieve your fitness goals with our expert trainers, premium equipment, and personalized workout programs.
          </p>
          <div className="hero-buttons">
            <Link to="/classes" className="btn btn-primary btn-lg">
              View Our Classes
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
