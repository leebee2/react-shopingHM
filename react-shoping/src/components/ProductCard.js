import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navi = useNavigate();

    const showDetail = (id) => {
        navi(`/product/${id}`);
    }
    
    return (
        <div className='card' onClick={() => showDetail(item.id)}>
            <img className="product-img" src={item?.img} alt="product_img"/>
            {item?.choice ? <div className='new-product'>Conscious choice</div> : <></>}
            <div>{item?.title}</div>
            <div>₩{item?.price}</div>
            <div className='new-product'>{item?.new == true ? '신제품' : ''}</div>
        </div>
    );
};

export default ProductCard;