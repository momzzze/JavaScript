import React from 'react'
import ProductPrice from '../product-price/ProductPrice'

const Product = ({ product }) => {
    return (
        <div className="product-tile">
            <img className="product-image" src={product.image} alt={product.title} />
            <div>
                <span className="product-brand">{product.brand}</span>
                <span className="product-title">{product.title}</span>
                <ProductPrice price={product.price}>
                    <span>{product.price}$</span>
                </ProductPrice>
            </div>
        </div>
    )
}

export default Product