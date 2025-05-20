const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card text-center">
      <div className="card-content">
        <div className="service-icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;