import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Shop.css'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Overlay1 from '../Components/Overlay/Overlay1'
import Blazer from '../Components/Blazer/Blazer'

const Shop = () => {
  return (
    <>
    <div className='main-container'>
      <Navbar/>
    </div>
    <Popular/>
    <Offers/>
    <Overlay1/>
    <Blazer/>
    </>
  )
}

export default Shop