import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Home = () => {
  const store=useSelector((state)=>state)
const navigate=useNavigate()
  return (
    <div>
         <div className="home-app-name">
        E-Commerce Website

        <button onClick={()=>navigate('/')}>Home</button>
        <button onClick={()=>navigate('/productlist')}>Products</button>
        <button onClick={()=>navigate('/cart')}>Cart ({store?.cart?.length?store.cart.length:0})</button>

        
      </div>
    </div>
  )
}

export default Home