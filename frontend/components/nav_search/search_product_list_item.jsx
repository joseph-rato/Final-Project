
import React from 'react';


const SearchProductListItem = ({product, openModal}) => {
  return(
    <div className='search-product-list-item' onClick={() => openModal('product', product)} >
      <div className="search-show-product-list-item-photo"><img className="search-product-list-item-logo" src={product.logoPhoto}></img></div>
      <div className="search-product-list-item-headline">
        <h2 className="search-product-list-item-product-Name">{product.product_name}</h2>
        <h3 className='search-product-list-item-description'>{product.description}</h3>
      </div>
    </div>
  )
}

export default SearchProductListItem;
