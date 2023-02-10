import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addtoCart, increaseDecreaseItem, removeFromCart } from '../../../Store/actions'

import './QuantityCounter.css'
const QuantityCounter = ({id}) => {

  const store=useSelector((state)=>state);
  

  const dispatch=useDispatch();

  const getItemQuantityinCart=()=>{
   const currentItem= store.cart.filter((cartItem)=>cartItem.id===id)
 

   return currentItem.length?currentItem[0].quantity:0;
  }

  const gerAvailableQuantity=()=>{
    const currentItem=store.originalList.filter((product)=>product.id===id);

    return currentItem[0]?.availableQuantity;
  }

  const handleQuantity=(action)=>{

    const prevQuantityinCart=getItemQuantityinCart();
    if(prevQuantityinCart===0)
    {
      dispatch(
        addtoCart(
          {id:id}))
    }
    else{
      action==='decrease'?( prevQuantityinCart>1?
      dispatch(increaseDecreaseItem({
        id:id,
        newquantity:prevQuantityinCart-1
      })): dispatch(
        removeFromCart(
          {id:id}))
      ):dispatch(increaseDecreaseItem({
        id:id,
        newquantity:prevQuantityinCart+1
      }))
    }

    // action==="increase"?
    // dispatch(
    //   addtoCart(
    //     {id:id})) : dispatch(
    //       removeFromCart(
    //         {id:id}));

  }
  return (
    <div className='quantity-counter-box'>
        <button disabled={!getItemQuantityinCart()} onClick={()=>handleQuantity("decrease")} >-</button>
        <input type='text' className='quantity-counter-input' value={getItemQuantityinCart()} />
        <button disabled={!gerAvailableQuantity()} onClick={()=>handleQuantity("increase")} >+</button>
        
    </div>
  )
}

export default QuantityCounter