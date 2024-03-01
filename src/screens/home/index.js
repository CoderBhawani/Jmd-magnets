import React from 'react'
import Navbar from './navbar'
import Card from '../../common/card'

import ProductList from './productList/index'


const Home = () => {
  return (
    <div className='w-full'>
<Navbar/>
<Card/>
<ProductList/>
    </div>
  )
}

export default Home