import React from 'react';

class ProductShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    debugger;
    return this.props.fetchProduct(this.props.product);
  }


  render(){
    return(
      <div className="modal-product-show">
        <div>
          <h1>{this.props.product.product_name}</h1>
        </div>
      </div>
    )
  }
}

export default ProductShow;
