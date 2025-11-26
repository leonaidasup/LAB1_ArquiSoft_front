import React, { useState } from 'react';
import { getTransactions } from '../api/api';
import './TransactionList.css'; 

const TransactionList = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const fetchTransactions = () => {
    if (!accountNumber) {
      alert("Por favor ingresa un número de cuenta.");
      return;
    }

    getTransactions(accountNumber)
      .then(res => {
        setTransactions(res.data);
        setShowTable(true);
      })
      .catch(err => {
        console.error(err);
        alert("Error al obtener transacciones.");
      });
  };

  const toggleTable = () => {
    setShowTable(!showTable);
    if (!showTable) {
      setTransactions([]);
    }
  };

  return (
    <div className="transaction-container">
      <h3>Transacciones</h3>
      <input
        className="transaction-input"
        placeholder="Número de cuenta"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <button
        className="transaction-search-btn"
        onClick={fetchTransactions}
        disabled={!accountNumber}
      >
        Buscar
      </button>

      {transactions.length > 0 && (
        <button className="transaction-toggle-btn" onClick={toggleTable}>
          {showTable ? 'Ocultar Transacciones' : 'Mostrar Transacciones'}
        </button>
      )}

      {showTable && transactions.length > 0 && (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Origen</th>
              <th>Destino</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.senderAccountNumber}</td>
                <td>{t.receiverAccountNumber}</td>
                <td>${t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionList;
