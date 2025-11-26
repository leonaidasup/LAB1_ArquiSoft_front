import React, { useState } from 'react';
import CustomerList from './CustomerList';
import CustomerDetail from './CustomerDetail';

const CustomerManager = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setSelectedCustomerId(null); 
  };

  return (
    
    <div className="customer-manager">
    <h3>Clientes</h3>
      <button className="customer-toggle-btn" onClick={toggleVisibility}>
        
        {isVisible ? 'Ocultar Clientes' : 'Ver Clientes'}
      </button>

      {isVisible && (
        <div className="customer-section">
          <CustomerList onSelect={setSelectedCustomerId} />
          {selectedCustomerId && <CustomerDetail id={selectedCustomerId} />}
        </div>
      )}
    </div>
  );
};

export default CustomerManager;
