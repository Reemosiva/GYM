const TestimonialCard = ({ text, name, title, image }) => {
  return (
    <div className="card testimonial-card">
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <img src={image} alt={name} className="testimonial-author-img" />
        <div>
          <h4 className="testimonial-author-name">{name}</h4>
          <p className="testimonial-author-title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;