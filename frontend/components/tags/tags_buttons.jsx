import React from 'react'

class TagButtons extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(tag){
        return (e) => {
            e.stopPropagation();
            this.props.history.push(`/search/tags/${tag}`);
        }
    }
    
    render(){
        return(
                <div className="product-item-tags">
                    {
                        this.props.tags.map( (tag) => {
                            return(
                                <button className="product-list-item-tag" onClick={this.handleClick(tag)}>{tag}</button>
                            )
                        })
                    }
                </div>
            )}
}

export default TagButtons;