import React from 'react'
import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import { Toaster} from "react-hot-toast"
import Cart from './components/Cart';


import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/cart.scss";
import "./styles/mediaquery.scss";






const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster/>

    </BrowserRouter>
  )
}

export default App;