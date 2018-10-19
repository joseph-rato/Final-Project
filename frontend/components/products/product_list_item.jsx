
import React from 'react';
import {connect} from 'react-redux'


const ProductListItem = ({product, openModal}) => {
  return(
    <div className='product-list-item' onClick={() => openModal('product', product)} >
      <div className="show-product-list-item-photo"><img className="product-list-item-logo" src={product.logoPhoto}></img></div>
      <div className="product-list-item-headline">
        <h2 className="product-list-item-product-Name">{product.product_name}</h2>
        <h3 className='product-list-item-description'>{product.description}</h3>
        <div className="product-list-item-tags-buttons">
          <div className="product-list-item-tags">
            <button className="product-list-item-tag">TECH</button>
          </div>
          <div className="product-list-item-buttons">
            <button className="product-list-item-like-button">456</button>
            <button className="product-list-item-comment-button">17</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListItem;
