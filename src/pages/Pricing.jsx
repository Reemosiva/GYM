const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "500",
      period: "month",
      features: [
        "Access to gym floor",
        "Basic equipment usage",
        "Locker room access",
        "2 guest passes/month",
        "Fitness assessment"
      ],
      isPopular: false
    },
    {
      name: "Premium",
      price: "1000",
      period: "month",
      features: [
        "Full gym access",
        "All classes included",
        "Personal trainer consultation",
        "Nutrition planning",
        "5 guest passes/month",
        "Monthly fitness assessment"
      ],
      isPopular: true
    },
    {
      name: "Elite",
      price: "1999",
      period: "month",
      features: [
        "24/7 gym access",
        "All classes included",
        "4 PT sessions/month",
        "Custom nutrition plan",
        "10 guest passes/month",
        "Weekly fitness assessment",
        "Access to all locations"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="section pricing-page">
      <div className="container">
        <h1 className="section-title">Membership Plans</h1>
        
        <div className="grid grid-cols-3 md-grid-cols-1 gap-lg">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <span className="popular-badge">Most Popular</span>}
              <div className="card-content">
                <h3 className="pricing-title">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="pricing-feature">
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary btn-block">Choose Plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
