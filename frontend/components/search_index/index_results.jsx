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
      allProds: this.props.products
    }
    this.checkProductsPresent = this.checkProductsPresent.bind(this)
    this.tagDescription = this.tagDescription.bind(this)
  }

  componentDidMount(){
    let that = this
    // this.checkProductsPresent()
    if (isEmpty(this.props.products) && (!!this.props.tag)){
      return this.props.fetchProducts().then( allProds =>{
        return that.props.fetchSearchResults({tags: that.props.tag}).then( tagAlots =>{
          let podArr = Object.keys(tagAlots.tags)
          let productsArr = Object.values(allProds.products.products)
          that.setState({prodList: podArr, allProds: productsArr})
        })
      })
    } else if (isEmpty(this.props.products) && (!!this.props.productIds)) {
      let newQuery = this.props.history.location.search.slice(1)
      return this.props.fetchSearchResults({query_string: newQuery}).then( (queryResults) =>{
        return this.props.fetchProducts().then( (allProds) =>{
          this.setState({prodList: that.props.productIds})
        })
      })
    } else {
      if (!!this.props.tag){
          return this.props.fetchSearchResults({tags: this.props.tag}).then( data => {
            let podArr = Object.keys(data.tags)
            that.setState({prodList: podArr})
          });
      } else {
        let someQuery = this.props.history.location.search.slice(1)
        return this.props.fetchSearchResults({query_string: someQuery}).then( (queryResults) =>{
          // let productionArr = Object.keys(queryResults.products)
          return this.setState({prodList: that.props.productIds})
        })
      }
    }
  }

  componentWillUpdate(nextProps) {
    // need another update for different searches being submitted
    let that = this
    let newURL = nextProps.match.params
    if (nextProps.match.params.tagType !== this.props.match.params.tagType){
      
      this.props.fetchSearchResults({tags: nextProps.match.params.tagType}).then( tagResults =>{
        let podArr = Object.keys(tagResults.tags)
        return this.setState({prodList: podArr})
      })
    } else if (nextProps.location.search.slice(1) !== this.props.location.search.slice(1)){
      let newQuery = nextProps.location.search.slice(1)
      this.props.fetchSearchResults({query_string: newQuery}).then( (searchResults) =>{

        
        return this.setState({prodList: that.props.productIds})
      })
    }

  }

  checkProductsPresent(){

    let that = this
    
    if (isEmpty(this.props.products)){
      this.props.fetchProducts().then( allProducts =>{
        
        that.setState({allProds: allProducts.products.products})
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
        <h2 className="product-list-day" >What's New</h2>
        <ul className="search-result-ul-list">
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