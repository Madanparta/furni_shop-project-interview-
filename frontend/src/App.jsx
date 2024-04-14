import React from 'react';
import {Routes,Route, Link} from "react-router-dom"
import Header from './components/Header';
import SemiHeader from './components/SemiHeader';
import Home from './pages/Home';
import Footer from './components/Footer';
import LoginAndReg from './pages/LoginAndReg';
import ProductPage from './pages/ProductPage';
import { useAuth } from './context/AuthContext';

const App = () => {
  const auth = useAuth()
  return (
    <>
      <SemiHeader/>
      <Header/>

      <Routes>
        {
          auth?.user ? <> 
          <Route path='/product/:id' element={<ProductPage/>}/>
          </>
          : <Route path='/shop/my-account' element={<LoginAndReg/>}/>
        }
        <Route path='/' element={<Home/>}/>
        <Route path='/shop/my-account' element={<LoginAndReg/>}/>
        <Route path='/*' element={<LoginAndReg/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
