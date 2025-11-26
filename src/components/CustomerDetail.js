import React, { useEffect, useState } from 'react';
import { getCustomerById } from '../api/api';
import './AddCustomerForm.css'; 

const CustomerDetail = ({ id }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (id) {
      getCustomerById(id).then(res => setCustomer(res.data));
    }
  }, [id]);

  if (!customer) return null;

  return (
    <div className="add-customer-container">
      <form className="add-customer-form">
        <h4>Nombre del cliente</h4>
        <input
          className="customer-input"
          value={`${customer.firstName} ${customer.lastName}`}
          readOnly
        />
        <h4>Número de cuenta</h4>
        <input
          className="customer-input"
          value={customer.accountNumber}
          readOnly
        />
        <h4>Saldo</h4>
        <input
          className="customer-input"
          value={`$${customer.balance}`}
          readOnly
        />
      </form>
    </div>
  );
};

export default CustomerDetail;
