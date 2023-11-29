import React, { useState } from 'react';

const Advertisement = ({ title, description, image, contact }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="card mb-4">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p
          className="card-text masked-contact"
          onMouseEnter={() => setShowContact(true)}
          onMouseLeave={() => setShowContact(false)}
        >
          Contact: {showContact ? contact : '***'}
        </p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-info btn-block" onClick={() => alert(`Contact: ${contact}`)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default Advertisement;


