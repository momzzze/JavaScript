import React, { Component } from 'react'
import Product from './product/Product'
import './product-list.css'
import ProductPrice from './product-price/ProductPrice';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props
    return (
      <div className="container">
        <Product product={product} comp={<ProductPrice/>} />
      </div>
    )
  }
}




export default ProductList
