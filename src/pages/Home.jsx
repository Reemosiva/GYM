import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ClassCard from '../components/ClassCard';
import TrainerCard from '../components/TrainerCard';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaUtensils, FaRunning } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const servicesContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const serviceItem = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <>
      <Hero />

      {/* Services Section with Framer Motion */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <motion.div
            className="grid grid-cols-4 services-grid md-grid-cols-2 sm-grid-cols-1 gap-md"
            variants={servicesContainer}
            initial="hidden"
            animate="show"
          >
            {[
              { icon: <FaDumbbell />, title: 'Strength Training', desc: 'Build muscle…' },
              { icon: <FaHeartbeat />, title: 'Cardio Classes', desc: 'Boost your heart…' },
              { icon: <FaUtensils />, title: 'Nutrition Planning', desc: 'Get personalized…' },
              { icon: <FaRunning />, title: 'Personal Training', desc: 'Work one-on-one…' },
            ].map((svc, i) => (
              <motion.div key={i} variants={serviceItem} whileHover={{ scale: 1.05 }}>
                <ServiceCard
                  icon={svc.icon}
                  title={svc.title}
                  description={svc.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      
      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="grid grid-cols-2 md-grid-cols-1 gap-lg items-center">
            <div className="about-img">
              <img src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="About Fitness Fusion" />
            </div>
            <div className="about-content">
              <h2 className="section-title" style={{ textAlign: 'left' }}>About Fitness Fusion</h2>
              <p>
                Fitness Fusion was founded in 2010 with a mission to provide a welcoming environment where people of all fitness levels can achieve their health and wellness goals.
              </p>
              <p>
                Our state-of-the-art facility features the latest equipment, spacious workout areas, and a team of certified trainers who are passionate about helping you succeed.
              </p>
              <p>
                Whether you're just starting your fitness journey or looking to take your workouts to the next level, we have everything you need to transform your body and mind.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Classes Section */}
      <section className="section classes-section">
        <div className="container">
          <h2 className="section-title">Featured Classes</h2>
          <div className="grid grid-cols-3 classes-grid md-grid-cols-2 sm-grid-cols-1 gap-md">
            <ClassCard 
              image="https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=1600"
              title="HIIT Workout"
              trainer="Alex Morgan"
              time="Mon, Wed, Fri - 7:00 AM"
              description="High-intensity interval training to maximize calorie burn and improve cardiovascular health."
            />
            <ClassCard 
              image="https://images.pexels.com/photos/4662344/pexels-photo-4662344.jpeg?auto=compress&cs=tinysrgb&w=1600"
              title="Power Yoga"
              trainer="Sarah Johnson"
              time="Tue, Thu - 6:00 PM"
              description="A dynamic, fitness-based approach to traditional yoga that builds strength and flexibility."
            />
            <ClassCard 
              image="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1600"
              title="Spin Class"
              trainer="Michael Brown"
              time="Mon, Wed, Fri - 6:30 PM"
              description="High-energy indoor cycling workouts to improve endurance and cardiovascular health."
            />
          </div>
          <div className="text-center my-lg">
            <Link to="/classes" className="btn btn-secondary">View All Classes</Link>
          </div>
        </div>
      </section>
      
      {/* Trainers Section */}
      <section className="section trainer-section">
        <div className="container">
          <h2 className="section-title">Our Expert Trainers</h2>
          <div className="grid grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-md">
            <TrainerCard 
              image="https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg?auto=compress&cs=tinysrgb&w=1600"
              name="John Davis"
              position="Head Trainer"
              bio="Certified personal trainer with 10+ years of experience specializing in strength and conditioning."
            />
            <TrainerCard 
              image="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1600"
              name="Emma Wilson"
              position="Yoga Instructor"
              bio="Registered yoga teacher (RYT-500) with expertise in Vinyasa, Power, and Restorative yoga practices."
            />
            <TrainerCard 
              image="https://images.pexels.com/photos/6456211/pexels-photo-6456211.jpeg?auto=compress&cs=tinysrgb&w=1600"
              name="Marcus Chen"
              position="Nutrition Specialist"
              bio="Certified nutrition coach who helps clients develop sustainable eating habits that complement their fitness goals."
            />
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Membership Plans</h2>
          <div className="grid grid-cols-3 md-grid-cols-1 gap-md">
            <PricingCard 
              planName="Basic"
              price="500"
              period="month"
              features={[
                "Access to gym floor",
                "Standard equipment usage",
                "Locker room access",
                "2 guest passes per month"
              ]}
              isPopular={false}
            />
            <PricingCard 
              planName="Premium"
              price="1000"
              period="month"
              features={[
                "Full gym access",
                "Access to all classes",
                "Personalized fitness plan",
                "Nutritional consultation",
                "5 guest passes per month"
              ]}
              isPopular={true}
            />
            <PricingCard 
              planName="Platinum"
              price="1999"
              period="month"
              features={[
                "24/7 gym access",
                "Unlimited classes",
                "4 personal training sessions",
                "Monthly fitness assessment",
                "Nutritional guidance",
                "10 guest passes per month"
              ]}
              isPopular={false}
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="grid grid-cols-4 md-grid-cols-2 sm-grid-cols-1">
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Expert Trainers</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-label">Weekly Classes</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">2000+</div>
              <div className="stat-label">Happy Members</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section testimonial-section">
        <div className="container">
          <h2 className="section-title">What Our Members Say</h2>
          <div className="grid grid-cols-3 md-grid-cols-1 gap-md">
            <TestimonialCard 
              text="Joining Fitness Fusion was one of the best decisions I've made. The trainers are knowledgeable, the equipment is top-notch, and the community is supportive. I've lost 30 pounds and feel better than ever!"
              name="Emily K."
              title="Member since 2021"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <TestimonialCard 
              text="The personal training program has transformed my fitness journey. My trainer understands my goals and pushes me to achieve them. The nutrition guidance has also been invaluable in helping me fuel my workouts properly."
              name="Robert M."
              title="Member since 2020"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <TestimonialCard 
              text="As a busy professional, I appreciate the flexible class schedule and 24/7 access. The facilities are always clean, and the staff is friendly and helpful. It's the perfect gym for anyone serious about fitness."
              name="Sophia L."
              title="Member since 2022"
              image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Fitness Journey?</h2>
          <p className="my-md">Join Fitness Fusion today and take the first step toward a healthier, stronger you.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started Today</Link>
        </div>
      </section>
    </>
  );
};

export default Home;