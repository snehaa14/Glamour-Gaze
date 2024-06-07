import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import men_banner from './Components/assets/img/BannerMens.png'
import kids_banner from './Components/assets/img/BannerKids.png'
import bannerWomen from './Components/assets/img/bannerWomen.png'


function App() {
 

  return (
    <div>
      <BrowserRouter>
     {/* <Navbar/> */}
     <Routes>
      <Route>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}/>
        <Route path='/womens' element={<ShopCategory banner={bannerWomen} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        {/* <Route path=':productId' element={<Product/>}/> */}
        <Route path='product/:id' element={<Product />} /> 
       

      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

     </Routes>

     </BrowserRouter>
    </div>
  )
}

export default App
