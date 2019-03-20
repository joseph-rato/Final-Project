import React from 'react';
import ProductListItem from '../products/product_list_item'
import {isEmpty} from '../../util/random_util_functions'

const tagDescriptions = {
    Tech: 'Something to make us futuristic',
    Education: 'Something to keep us smart',
    Music: 'Something pleasent to listen to',
    Productivity: 'Things that can keep us on topic',
    AI: 'Something smarter then us',
}

class IndexResults extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      prodList: [],
    }
    this.checkProductsPresent = this.checkProductsPresent.bind(this)
    this.tagDescription = this.tagDescription.bind(this)
  }

  componentDidMount(){
    this.checkProductsPresent()
      if (!!this.props.tag){
          return this.props.fetchProducts({tags: this.props.tag}).then( data => {
            let podArr = Object.keys(data.tags)
            this.setState({prodList: podArr})
          });
      } else {
          return this.setState({prodList: this.props.productIds})
      }
  }

  checkProductsPresent(){
    if (isEmpty(this.props.products) && (!!this.props.tag)){
      return this.props.fetchAllProducts().then( allProds =>{
          let podArr = Object.keys(data.tags)
          this.setState({prodList: podArr})
      })
    } else if (isEmpty(this.props.products) && (!!this.props.productIds)) {
      return this.props.fetchProducts().then( allProds =>{
        this.setState({prodList: this.props.productIds})
      })
    }
  }
  
  tagDescription(){
    if (this.props.type === 'tags'){
        return(
            <div className="tag-search-tag-description">
                <h3>{`${this.props.tag}`}</h3>
                <p>{tagDescriptions[`${this.props.tag}`]}</p>
            </div>
        )
    } else {
        return(null)
    }
  }
  

  render() {
    return(
      <div className="product-list-content-box">
        {this.tagDescription()}
        <ul>
          <h2 className="product-list-day" >What's New</h2>
          {
            this.state.prodList.map( (productId, idx) =>{
              return(
                <ProductListItem key={idx} product={this.props.products[productId]} openModal={this.props.openModal}/>
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default IndexResults;