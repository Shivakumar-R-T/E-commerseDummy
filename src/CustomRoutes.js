import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Home from './Components/Home/Home'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import ProductList from './Components/ProductList/ProductList'
import Welcome from './Components/Welcome/Welcome'
const CustomRoutes = () => {
    return (
        <div >
            <Routes>
            <Route path='/' element={<Welcome />} />
                <Route path='/productlist' element={<ProductList />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product' >
                    <Route path=':productId' element={<ProductDetails />} />
                </Route>
                <Route path='*' element={<Welcome />} />
            </Routes>
        </div>
    )
}

export default CustomRoutes