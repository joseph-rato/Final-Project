import React from 'react';


class Products extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      prodList: [],
    }
  }

  componentDidMount(){
    // this.props.fetchProducts();
    return this.props.fetchProducts().then( data => {
      let podArr = Object.values(data.products)
      return this.setState({prodList: podArr})
    });

    // let prodArr = Object.values(this.props.products)
  }

  // componentDidUpdate(){
  //   debugger;
  //   if (this.state.prodList.length < 1) {
  //     let prodArr = Object.values(this.props.products)
  //     return this.setState({prodList: prodArr})
  //   }
  // }

  render() {
    return(
      <div>
        <ul>
        <h1>Almost There</h1>
          {
            this.state.prodList.map( product =>{
              return(
                <li className="product-list-item" onClick={() => this.props.openModal('product', product)}>
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
