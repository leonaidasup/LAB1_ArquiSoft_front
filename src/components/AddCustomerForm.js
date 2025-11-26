import React, { useState } from 'react';
import { createCustomer } from '../api/api';
import './AddCustomerForm.css';

const AddCustomerForm = () => {
  const [form, setForm] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    accountNumber: '',
    balance: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCustomer({ ...form, balance: parseFloat(form.balance) }).then(res => {
      alert("Cliente creado con ID: " + res.data.id);
      setForm({
        id: 0,
        firstName: '',
        lastName: '',
        accountNumber: '',
        balance: ''
      });
    });
  };

  return (
    <div className="add-customer-container">
      <form className="add-customer-form" onSubmit={handleSubmit}>
        <h3>Crear cliente</h3>
        <input
          className="customer-input"
          name="firstName"
          placeholder="Nombre"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          className="customer-input"
          name="lastName"
          placeholder="Apellido"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          className="customer-input"
          name="accountNumber"
          placeholder="Cuenta"
          value={form.accountNumber}
          onChange={handleChange}
        />
        <input
          className="customer-input"
          name="balance"
          placeholder="Saldo"
          type="number"
          value={form.balance}
          onChange={handleChange}
        />
        <button className="submit-btn" type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
