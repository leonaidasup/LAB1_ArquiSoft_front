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
    <div className="app-root">
      <div className="top-banner">
        <h1>Banco de la UdeA</h1>
      </div>

      <div className="container">
        <div className="grid">
          <div className="column">
            <div className="box">
              <h2 className="box-title">Clientes</h2>
              <AddCustomerForm />
            </div>

            <div className="box">
              <CustomerManager />
            </div>    
          </div>

          <div className="column">
            <div className="box">
              <h2 className="box-title">Transferencias</h2>
              <TransferForm />
            </div>
            <div className="box">
              <TransactionList /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;