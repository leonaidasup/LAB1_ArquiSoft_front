import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getCustomers = () => axios.get(`${API_BASE}/customers`);

export const getCustomerById = (id) => axios.get(`${API_BASE}/customers/${id}`);

export const createCustomer = (customer) =>
  axios.post(`${API_BASE}/customers`, customer);

export const getTransactions = (accountNumber) =>
  axios.get(`${API_BASE}/transactions/${accountNumber}`);

export const transferMoney = (data) =>
  axios.post(`${API_BASE}/transactions/transfer`, data);
