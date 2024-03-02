import React from 'react'
import Navbar from './navbar'

import Footer from "../../common/footer/page"


import HomeSlider from "./homeSlider/homeSlider"
import OurFacilities from './ourFacilties/OurFacilities'
import ProductDesSlider from '../../common/cardSlider/CardSlider'
import AddToCartPage from '../../component/addCart'
import ProductList from "./productList/index"


const Home = () => {
  return (
    <div className='w-full'>
<Navbar/>
<HomeSlider/>
{/* <AddToCartPage/> */}
<ProductList/>
<OurFacilities/>
<ProductDesSlider/>
<Footer/>
    </div>
  )
}

export default Home;