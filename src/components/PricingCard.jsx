import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingCard = ({ planName, price, period, features, isPopular }) => {
  return (
    <div className={`card ${isPopular ? 'popular' : ''}`}>
      <div className="card-content">
        {isPopular && (
          <div
            className="badge"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'var(--color-primary)',
              padding: '4px 8px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px'
            }}
          >
            Most Popular
          </div>
        )}
        <h3 className="card-title">{planName}</h3>
        <div className="card-price">
          ₹{price}
          <span className="card-price-period">/{period}</span>
        </div>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index} className="card-feature">
              <FaCheck /> {feature}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary btn-block">
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
