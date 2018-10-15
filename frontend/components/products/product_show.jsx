import React from 'react';

class ProductShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    return this.props.fetchProduct(this.props.product);
  }


  render(){
    const product = this.props.product
    return(
      <div className="modal-product-show">
        <div className="show-header">
          <div>image goes here</div>
          <h1>{product.product_name}</h1>
          <h3>{product.description}</h3>
          <div>tag buttons here</div>
        </div>
        <div className="show-body">
          <div className="show-main-information">
            <div className="show-photo-box">
              <div className="show-main-photo"></div>
              <div className="show-all-photo-video-select"></div>
            </div>
            <div className="show-information-box">
              <div className="show-learn-more-details"></div>
              <div className="show-user-social-website-links">
                <div className="show-user-add-to-collection"></div>
              </div>
            </div>
            <div className="show-review-section">Probably need to make new table/container for this</div>
            <div className="show-product-discussion">Next on the list</div>
          </div>
          <div className="side-bar">
            <div className="show-updoots"></div>
            <div className="show-website-button"></div>
            <div className="show-send-to-phone"></div>
            <div className="show-product-social"></div>
            <div className="show-related-products"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductShow;
