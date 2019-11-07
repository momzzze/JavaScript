import React, { Component } from 'react'

const ProductPrice = ({children}) => (
    <div>
        <p className="product-price">
            Price:
    <span> {children}$</span>
        </p>
    </div>
)

export default ProductPrice