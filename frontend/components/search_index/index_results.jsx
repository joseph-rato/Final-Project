import React from 'react';
import ProductListItem from './product_list_item'

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
  }

  componentDidMount(){
    return this.props.fetchProducts().then( data => {
      let podArr = Object.values(data.products.products)
      return this.setState({prodList: podArr})
    });
  }
  

  render() {
    return(
      <div className="product-list-content-box">
        <ul>
          <h2 className="product-list-day" >Today</h2>
          {
            this.state.prodList.map( (product, idx) =>{
              return(
                <ProductListItem key={idx} product={product} openModal={this.props.openModal}/>
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default IndexResults;