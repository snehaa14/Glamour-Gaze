import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Shop.css'
import Popular from '../Components/Popular/Popular'
import Overlay1 from '../Components/Overlay/Overlay1'
import Blazer from '../Components/Blazer/Blazer'
import Overlay2 from '../Components/Overlay/Overlay2'
import NewCollections from '../Components/NewCollections/NewCollections'
import  {NewsLetter}  from '../Components/NewsLetter/NewsLetter'
import shoplogo from '../Components/assets/img/white-logobg.png'
import Overlay3 from '../Components/Overlay/Overlay3'
import Features from '../Components/Features/Features'
const Shop = () => {
  return (
    <>
    <div className='main-container'>
      <Navbar logo={shoplogo}/>
    </div>
    <Popular/>
    <Overlay1/>
    <Blazer/>
    <Overlay2/>
    <NewCollections/>
    <NewsLetter/>
    <Features/>
    <Overlay3/>
   
    </>
  )
}

export default Shop