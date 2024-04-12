import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from "react-router-dom"
import { IconContext } from "react-icons";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <IconContext.Provider value={{color: "#171717",size:32}}>
          <Toaster position='top-right'/>
          <App />
        </IconContext.Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
