import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyDisplay from './MyDisplay';
import MyCounter from './MyCounter';
import Employee from './Employee';
import { User } from './User';
import Registraion from './Registraion';
import Login from './Login';
import ManageEmployee from './ManageEmployee';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ManageEmployee />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
