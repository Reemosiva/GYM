import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const TrainerCard = ({ image, name, position, bio }) => {
  return (
    <div className="card trainer-card">
      <img src={image} alt={name} className="trainer-img" />
      <div className="card-content">
        <h3 className="trainer-name">{name}</h3>
        <p className="trainer-position">{position}</p>
        <p className="card-text">{bio}</p>
        <div className="social-links">
          <a href="#" className="social-link" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;