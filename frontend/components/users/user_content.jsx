import React from 'react'
import { ScaleLoader } from 'react-spinners'
import ProductListItem from '../products/product_list_item' 


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
      // needed to prevent changes to random generated items
    //   shouldComponentUpdate(nextProps, nextState){
    //      
    //   }

      randomProducts(){
          
          let totalOptions = Object.keys(this.props.products).length
          let optionProds = Object.values(this.props.products)
          let randomTotal = Math.floor(Math.random() * totalOptions)
          let selectedIdx = {}
          let actualProds = []
          for(let i = 0; i < randomTotal; i++){
             let randSelect = this.randomSelect(selectedIdx, totalOptions)
             selectedIdx[randSelect] = 1
            actualProds.push(optionProds[randSelect])
          }
        return actualProds;
      }

      randomSelect(selectedIdx, totalOptions){
        let randNum = Math.floor(Math.random() * totalOptions)
            if (selectedIdx.hasOwnProperty(randNum)){
            randNum = this.randomSelect(selectedIdx, totalOptions)
            }
        return randNum
      }


      render(){
          if (this.state.loading){
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
          const randomValues2 = this.randomProducts()
            return(
                <div className="random-content">
                    {  
                    randomValues2.map((product, idx) =>{
                            return(
                                <ProductListItem key={idx} product={product} openModal={this.props.openModal}/>
                            )
                        })
                    }
                </div>
            )
        }

}

export default UserContent;