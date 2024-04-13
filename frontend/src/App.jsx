import React from 'react';
import {Routes,Route} from "react-router-dom"
import Header from './components/Header';
import SemiHeader from './components/SemiHeader';
import Home from './pages/Home';
import Footer from './components/Footer';
import LoginAndReg from './pages/LoginAndReg';

const App = () => {

  return (
    <>
      <SemiHeader/>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop/my-account' element={<LoginAndReg/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
