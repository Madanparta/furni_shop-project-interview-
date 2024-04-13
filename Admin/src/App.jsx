import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginPage from './components/LoginPage';
import Home from './components/Home';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App
