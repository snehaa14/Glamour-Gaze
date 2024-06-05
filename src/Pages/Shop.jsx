import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Shop.css'
import Popular from '../Components/Popular/Popular'
import Overlay1 from '../Components/Overlay/Overlay1'
import Blazer from '../Components/Blazer/Blazer'
import Overlay2 from '../Components/Overlay/Overlay2'
import NewCollections from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
const Shop = () => {
  return (
    <>
    <div className='main-container'>
      <Navbar/>
    </div>
    <Popular/>
    <Overlay1/>
    <Blazer/>
    <Overlay2/>
    <NewCollections/>
    <NewsLetter/>
    </>
  )
}

export default Shop