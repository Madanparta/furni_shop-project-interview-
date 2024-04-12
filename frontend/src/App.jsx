import React from 'react';
import {Routes,Route} from "react-router-dom"
import Header from './components/Header';
import SemiHeader from './components/SemiHeader';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <SemiHeader/>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
