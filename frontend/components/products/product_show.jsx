import React from 'react';
import ReviewComponent from '../reviews/review_component'

class ProductShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {

    return this.props.fetchProduct(this.props.product);
  }


  render(){
    const product = this.props.product
    // debugger;
    return(
      <div className="modal-product-show">
        <div className="show-header">

          <div className="show-product-list-item-photo"><img className="product-list-item-logo" src={product.logoPhoto}></img></div>
          <div className="product-list-item-headline">

            <h1 className="show-product-list-item-product-Name">{product.product_name}</h1>
            <h3 className="show-product-list-item-description">{product.description}</h3>
            <div className="product-list-item-tags-buttons">
              <div className="product-list-item-tags">
                <button className="product-list-item-tag">TECH</button>
              </div>
            </div>

          </div>

        </div>

        <div className="show-body">

          <div className="show-main-information">

            <div className="show-photo-box">
              <div className="show-main-photo">
                <img  className="product-show-photos-img" src={product.displayPhotos}></img>
              </div>
              <div className="show-all-photo-video-select"></div>
            </div>

            <div className="show-information-box">
              <div className="show-user-social-website-links">
                <div className="show-user-add-to-collection">
                  <button className="show-product-user-twitter"><i className="fab fa-twitter"></i><p className="product-show-user-social-p">TWEET</p></button>
                  <button className="show-product-user-facebook"><i className="fab fa-facebook-f"></i><p className="product-show-user-social-p">SHARE</p> </button>
                </div>
              </div>
              <div className="show-learn-more-details">
                <p className="product-show-details-p">{product.details}</p>
              </div>
            </div>

            <ReviewComponent />
            <div className="show-product-discussion">Need new container for this</div>
          </div>

          <div className="side-bar">
            <div className="show-updoots">38</div>
            <div className="show-website-button">{product.website}</div>
            <div className="show-send-to-phone">SEND TO PHONE</div>
            <div className="show-product-social"></div>
            <div className="show-related-products"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductShow;
