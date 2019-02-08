import React from 'react'

class UserContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          loading: true,
        }
      }

      componentDidMount(){
        return this.props.fetchProducts()
          .then(() => setTimeout(() => this.setState({loading: false}), 750));;
      }

      randomProducts(){
          let totalOptions = this.props.products.length + 1
          let optionProds = Object.values(this.props.products)
          let randomTotal = Math.floor(Math.random() * totalOptions)
          let selectedIdx
          let actualProds = []
          for(let i = 0; i < randomTotal; i++){
             let randSelect = randomSelect(selectedIdx)
             selectedIdx[randSelect] = 1
            actualProds.push(optionProds[randSelect])
          }
          return actualProds; 
      }

      randomSelect(selectedIdx){
        let randNum = Math.floor(Math.random() * totalOptions)
             if (selectedIdx[randNum] === 1){
                randomSelect(selectedIdx)
             } else {
                return randNum
             }
      }

      {
        this.state.prodList.map( (product, idx) =>{
          return(
            <ProductListItem key={idx} product={product} openModal={this.props.openModal}/>
          );
        })
      }

      render(){
          if (this.state.loading){
              return(
                  <div className="random-content">
                    {
                        randomProducts().map((product, idx) =>{
                            return(
                                <ProductListItem key={idx} product={product} openModal={this.props.openModal}/>
                            )
                        })
                    }
                  </div>
              )
          }
      }
}

export default UserContent;