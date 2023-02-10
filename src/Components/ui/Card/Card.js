import React from 'react'
import QuantityCounter from '../QuantityCounter/QuantityCounter'
import './Card.css'
import {useNavigate} from 'react-router-dom'

const Card = ({img,name,price,id }) => {
    const navigate=useNavigate();
  return (
    <div className='card-box'>
        <div className='card-body'>
            <div className='card-img'>
                <img src={img}/>
            </div>
            <div className='card-item-name'>
                Name : {name}
            </div>
            <div className='card-item-price'>
              {price}
            </div>
            <QuantityCounter id={id}/>
            <button className='product-details-btn' onClick={()=>navigate(`/product/${id}`)}>More Details</button>
        </div>
        
    </div>
  )
}

export default Card