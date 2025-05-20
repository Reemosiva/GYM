import React, { useState } from 'react';



const OWNER_UPI_ID = 'siva@okaxis'; // Replace with actual UPI ID

const Fees = () => {
  const [amount, setAmount] = useState('');
  const [showApps, setShowApps] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const isAmountValid = amount && Number(amount) > 0;

  const buildUPILink = (app) => {
    const upiUrl = `upi://pay?pa=${OWNER_UPI_ID}&pn=2ndLoveFitness&am=${amount}&cu=INR`;
    if (app === 'gpay') return `https://pay.google.com/gp/p/ui/pay?url=${encodeURIComponent(upiUrl)}`;
    if (app === 'phonepe') return `phonepe://pay?url=${encodeURIComponent(upiUrl)}`;
    if (app === 'paytm') return `paytmmp://pay?url=${encodeURIComponent(upiUrl)}`;
    return upiUrl;
  };

  const handlePayClick = () => {
    if (isAmountValid) {
      setShowApps(true);
      setSelectedApp(null);
    }
  };

  const handleAppClick = (app, e) => {
    e.preventDefault();
    setSelectedApp(app);
    const link = buildUPILink(app);
    window.location.href = link;
  };

  const appStyle = (app) => ({
    width: '60px',
    cursor: 'pointer',
    borderRadius: '12px',
    border: selectedApp === app ? '3px solid #4caf50' : '3px solid transparent',
    padding: '4px',
    transition: 'border-color 0.3s ease',
  });

  return (
    <div className="container" style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Fees Payment</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '100%', marginBottom: '1rem' }}
        min="1"
      />
      <button
        onClick={handlePayClick}
        disabled={!isAmountValid}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isAmountValid ? 'skyblue' : '#ccc',
          cursor: isAmountValid ? 'pointer' : 'not-allowed',
          marginBottom: '1rem',
          width: '100%',
          backgroundColor: '#007b83', 
          color: '#fff',
        }}
      >
        Pay
      </button>

      {showApps && (
        <>
          <p>Select a UPI app:</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href={buildUPILink('gpay')} onClick={(e) => handleAppClick('gpay', e)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png"
                alt="Google Pay"
                style={appStyle('gpay')}
              />
            </a>
            <a href={buildUPILink('phonepe')} onClick={(e) => handleAppClick('phonepe', e)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/PhonePe_Logo.svg"
                alt="PhonePe"
                style={appStyle('phonepe')}
              />
            </a>
            <a href={buildUPILink('paytm')} onClick={(e) => handleAppClick('paytm', e)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Paytm_logo.svg"
                alt="Paytm"
                style={appStyle('paytm')}
              />
            </a>
          </div>

          <div style={{ marginTop: '2rem', backgroundColor: '#f1f1f1', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
            <strong>You're paying ₹{amount} to</strong><br />
            <span style={{ color: '#007b83', fontWeight: 'bold' }}>{OWNER_UPI_ID}</span>
            <p style={{ fontSize: '14px', color: '#555' }}>After payment, contact support with your transaction ID.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Fees;
