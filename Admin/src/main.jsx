import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {Toaster} from "react-hot-toast";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import { AuthProvider } from './context/ContextApi.jsx';
axios.defaults.baseURL="http://localhost:8080/api/v1";
axios.defaults.withCredentials=true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Toaster position='top-right'/>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
