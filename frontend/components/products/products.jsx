import React from 'react';


class Products extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      prodList: [],
    }
  }

  componentDidMount(){
    return this.props.fetchProducts().then( data => {
      let podArr = Object.values(data.products)
      return this.setState({prodList: podArr})
    });
  }

  render() {
    return(
      <div>
        <ul>
        <h1>Almost There</h1>
          {
            this.state.prodList.map( (product, idx) =>{
              return(
                <li className={'product-list-item'} key={idx} onClick={() => this.props.openModal('product', product)}>
                  <p>{product.photos}</p>
                  <h2>{product.product_name}</h2>
                  <h3>{product.description}</h3>
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default Products;
