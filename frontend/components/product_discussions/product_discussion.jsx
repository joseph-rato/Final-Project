import React from 'react';
import {Link} from 'react-router-dom';

class ProductDiscussion extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        // debugger
        let commentsArr = Object.values(this.props.productDiscussion)
        return(
        <div className="product-discussion-container">
            <div>Header</div>
            <div>Comments.each do print out
                <div>recursivecallstackfor reply comments</div>
            </div>
            {
                commentsArr.forEach( (comment) => {
                    return(
                        <div className="comments">
                            <span>{comment.body}</span>
                        </div>
                    )
                })
            }
        </div>

        )
    }
}

export default ProductDiscussion;