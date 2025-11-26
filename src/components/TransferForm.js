import React, { useState } from 'react';
import { transferMoney } from '../api/api';
import './TransferForm.css';

const TransferForm = () => {
  const [form, setForm] = useState({
    senderAccountNumber: '',
    receiverAccountNumber: '',
    amount: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.senderAccountNumber || !form.receiverAccountNumber || !form.amount) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const data = {
      ...form,
      amount: parseFloat(form.amount),
    };

    transferMoney(data)
      .then(res => {
        alert("Transferencia realizada con ID: " + res.data.id);
        setForm({ senderAccountNumber: '', receiverAccountNumber: '', amount: '' });
      })
      .catch(err => {
        console.error("ERROR:", err.response?.data || err.message);
        alert("Error al realizar la transferencia: " + (err.response?.data?.message || err.message));
      });
  };

  return (
    <form className="transfer-form" onSubmit={handleSubmit}>
      <h3>Transferencia</h3>
      <input
        className="transfer-input"
        name="senderAccountNumber"
        placeholder="Cuenta origen"
        value={form.senderAccountNumber}
        onChange={handleChange}
      />
      <input
        className="transfer-input"
        name="receiverAccountNumber"
        placeholder="Cuenta destino"
        value={form.receiverAccountNumber}
        onChange={handleChange}
      />
      <input
        className="transfer-input"
        name="amount"
        placeholder="Monto"
        type="number"
        value={form.amount}
        onChange={handleChange}
      />
      <button className="transfer-btn" type="submit">Transferir</button>
    </form>
  );
};

export default TransferForm;
