const Classes = () => {
  return (
    <section className="section classes-page">
      <div className="container">
        <h1 className="section-title">Our Classes</h1>
        
        <div className="grid grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-lg">
          {[
            {
              title: "HIIT Training",
              image: "https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg?auto=compress&cs=tinysrgb&w=1600",
              trainer: "John Davis",
              time: "Mon, Wed, Fri - 8:00 AM",
              description: "High-intensity interval training to boost metabolism and burn fat."
            },
            {
              title: "Yoga Flow",
              image: "https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg?auto=compress&cs=tinysrgb&w=1600",
              trainer: "Sarah Wilson",
              time: "Tue, Thu - 9:00 AM",
              description: "Dynamic yoga sequences to improve flexibility and strength."
            },
            {
              title: "Strength Training",
              image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1600",
              trainer: "Mike Johnson",
              time: "Mon, Wed, Fri - 6:00 PM",
              description: "Build muscle and increase strength with expert guidance."
            },
            {
              title: "Spin Class",
              image: "https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&w=1600",
              trainer: "Emma Thompson",
              time: "Tue, Thu - 7:00 PM",
              description: "High-energy cycling workouts for cardio fitness."
            },
            {
              title: "Boxing",
              image: "https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&w=1600",
              trainer: "Alex Martinez",
              time: "Mon, Wed, Fri - 7:00 PM",
              description: "Learn boxing techniques while getting a full-body workout."
            },
            {
              title: "Pilates",
              image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1600",
              trainer: "Lisa Chen",
              time: "Tue, Thu - 10:00 AM",
              description: "Core-strengthening exercises for better posture and flexibility."
            }
          ].map((classItem, index) => (
            <div key={index} className="class-card card">
              <img src={classItem.image} alt={classItem.title} className="card-img" />
              <div className="card-content">
                <span className="class-time">{classItem.time}</span>
                <h3 className="card-title">{classItem.title}</h3>
                <p className="text-primary">with {classItem.trainer}</p>
                <p className="card-text">{classItem.description}</p>
                <button className="btn btn-primary">Join Class</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;