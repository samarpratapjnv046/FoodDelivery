import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'


import Fome from './pages/Fome/Fome'
import cart from './pages/cart/cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Fome/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/order'  element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App