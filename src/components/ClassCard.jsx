import { Link } from 'react-router-dom';

const ClassCard = ({ image, title, trainer, time, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <span className="class-time">{time}</span>
        <h3 className="card-title">{title}</h3>
        <p className="text-primary">with {trainer}</p>
        <p className="card-text">{description}</p>
        <Link to="/classes" className="btn btn-primary">Join Class</Link>
      </div>
    </div>
  );
};

export default ClassCard;