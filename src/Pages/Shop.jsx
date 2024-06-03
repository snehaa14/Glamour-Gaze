import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Shop.css'
import Popular from '../Components/Popular/Popular'
const Shop = () => {
  return (
    <>
    <div className='main-container'>
      <Navbar/>
    </div>
    <Popular/>
    </>
  )
}

export default Shop