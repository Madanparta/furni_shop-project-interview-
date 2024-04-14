import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from "react-router-dom"
import { IconContext } from "react-icons";
import {Toaster} from "react-hot-toast";
import { AuthProvider } from './context/AuthContext.jsx';
import axios from "axios";
import { CartProvider } from './context/CartContext.jsx';
axios.defaults.baseURL="http://localhost:8080/api/v1";
axios.defaults.withCredentials=true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <IconContext.Provider value={{color: "#171717",size:32}}>
            <Toaster position='top-right'/>
            <App />
          </IconContext.Provider>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
