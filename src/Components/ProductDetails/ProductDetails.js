import React,{useEffect,useState} from 'react'
import './ProductDetails.css'
import {useParams,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import QuantityCounter from '../ui/QuantityCounter/QuantityCounter'
const ProductDetails = () => {
    const store=useSelector((state)=>state);
    const params=useParams();
    const navigate=useNavigate();

    const [product, setproduct] = useState({});
    useEffect(()=>{
    const currentProduct=    store.originalList.filter((productObj)=>{
            if(params.productId==productObj.id)
            {
                return productObj
            }
        })[0]
        setproduct({...currentProduct})


    },[])
   
    return (
        
        <div className="productdetail-box">
            <button onClick={()=>navigate('/productlist')}>Back </button>
            <div className="productdetail-body">
                <div className="productdetail-left">
                    <img src={product?.imgSrc} />
                </div>
                <div className="productdetail-right">
                    <div className="productdetail-heading">Name : {product?.name} </div>
                    <div className="productdetail-price">{product?.price}</div>
                    <div className="productdetail-warranty">
                        Warranty :{product?.desc?.warranty}
                    </div>
                    <div className="productdetail-key-features">
                        <h2>Key features : </h2>
                        <ul>
                            {product?.desc?.keyFeatures.map((feature) => {
              return <li>{feature}</li>;
            })}
                            {/* <li>feature1</li> */}
                        </ul>
                    </div>
                    <QuantityCounter id={params.productId} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails