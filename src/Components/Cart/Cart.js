import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../ui/Card/Card';
import './Cart.css'

import uniqid from 'uniqid';
const Cart = () => {
  const store=useSelector((state)=>state);
 
  return (
    <div className='cart-box'>
      {
        store?.cart?.map((item)=>{
       return   <Card key={uniqid} name={item?.name} img={item?.imgSrc}  price={item?. price} id={item?.id}  />
        })
      }
    </div>
  )
}

export default Cart