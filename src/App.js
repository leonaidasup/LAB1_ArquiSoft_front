import React, { useState } from 'react';
import CustomerDetail from './components/CustomerDetail';
import AddCustomerForm from './components/AddCustomerForm';
import TransferForm from './components/TransferForm';
import TransactionList from './components/TransactionList';
import CustomerManager from './components/CustomerManager';
import './App.css';

function App() {
  const [selectedCustomerId] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <div className="top-banner">
        <h1>Banco UdeA</h1>
      </div>
      <AddCustomerForm />
      <TransferForm />
      <TransactionList />
      <CustomerDetail id={selectedCustomerId} />
      <CustomerManager />
    </div>
  );
}

export default App;
