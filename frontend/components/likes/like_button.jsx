import React from 'react'
class LikeButton extends React.Component {
    constructor(props){
        super(props)
        this.state={
            likes: Math.floor(Math.random()*1000),
            liked: false
        }
        this.changeLike = this.changeLike.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.indentity = this.indentity.bind(this)
    }
    changeLike(){
        if (this.state.liked === false){
            let newLikeNum = this.state.likes + 1
            this.setState({likes: newLikeNum, liked: true})
        } else {
            let lessLikeNum = this.state.likes - 1
            this.setState({likes: lessLikeNum, liked: false})
        }
    }
    handleClick(e){
        e.stopPropagation();
        this.changeLike();
    }
    indentity(){
        if(this.state.liked){
            let classString = "product-list-item-like-button liked-orange"
            return classString
        } else {
            let nonOrangeLikeString = "product-list-item-like-button"
            return nonOrangeLikeString;
        }
    }
    render(){
    
        return(
           
                <button className={this.indentity()} onClick={this.handleClick}>{this.state.likes}</button>
          
        )
    }
}
export default LikeButton;