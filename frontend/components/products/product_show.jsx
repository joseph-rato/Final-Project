import React from 'react';
import ReviewComponent from '../reviews/review_component'
import ProductDiscussionContainer from '../product_discussions/product_discussion_container'
import { ScaleLoader } from 'react-spinners';


class ProductShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.product)
      .then(() => setTimeout(() => this.setState({loading: false}), 750));
  }


 social(){
   return(
     <div>{this.props.product.social}</div>
   )
 }

  render(){
    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
          <ScaleLoader
            className="bars"
            sizeUnit={"px"}
            height={200}
            width={5}
            size={130}
            radius={999}
            color={'#4E7E0F'}
            loading={this.state.loading}
          />
        </div>
      )
    }
    const product = this.props.product
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
            <h3>REVIEWS</h3>
            <ReviewComponent product={product} />
            <h3>DISCUSSION</h3>
            <ProductDiscussionContainer product={product} />
          </div>

          <div className="side-bar">

            <div className="show-updoots">
              <button className="show-upvote-button">
                UPVOTE
                <div className="show-upvote-number">56</div>
              </button>
              <div></div>
            </div>

            <div className="show-website-button-div">
              <button className="show-website-button">
                <i className="fas fa-compass"></i>
                <div className="show-website-word-stacker">
                  <div className="show-website-identifier">Website</div>
                  <div className="show-website-address">{product.website}</div>
                </div>
                <div></div>
              </button>
            </div>

            <div className="show-send-to-phone">
              <button className="show-send-to-phone-button">SEND TO PHONE</button>
            </div>
            <div className="show-product-social">
              {this.social()}
            </div>
            <div className="show-related-products"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductShow;
