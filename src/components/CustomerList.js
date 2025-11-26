import React, { useEffect, useState } from 'react';
import { getCustomers } from '../api/api';
import './CustomerList.css';

const CustomerList = ({ onSelect }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(res => setCustomers(res.data));
  }, []);

  return (
    
    <div className="customer-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cuenta</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.accountNumber}</td>
              <td>
                <button
                  className="customer-action-btn"
                  onClick={() => onSelect(c.id)}
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
