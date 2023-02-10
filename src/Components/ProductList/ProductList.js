import React from 'react'
import Card from '../ui/Card/Card'
import './ProductList.css'
import {useSelector} from 'react-redux'
import uniqid from 'uniqid';

const ProductList = () => {
    const store=useSelector((state)=>state);
    // console.log(store)
  return (
    <div className='product-list'>
        {
            store?.originalList?.map((item)=>{
               return  <Card key={uniqid} name={item?.name} img={item?.imgSrc}  price={item?. price} id={item?.id} />
            })

        }
       
    </div>
  )
}

export default ProductList