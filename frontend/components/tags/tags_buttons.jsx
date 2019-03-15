import React from 'react'

class TagButtons extends React.Component{

    render(){
        return(
                <div className="product-item-tags">
                    {
                        this.props.tags.map( (tag) => {
                            return(
                                <button className="product-list-item-tag" onClick={() => this.props.recieveTags({tags: `${tag}`})}>{tag}</button>
                            )
                        })
                    }
                </div>
            )}
}

export default TagButtons;