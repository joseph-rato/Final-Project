import React from 'react'

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            product_id: this.props.product.id,
            user_id: this.props.currentUser
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e){
        
    }

    handleChange(e){
        e.perventDefault()
        this.setState({body: e.currentTarget.value})
    }

    hiddenSubmit(){
        (this.state.body === '') 
        ? null
        : <div className="comment-submit-area">
            <span>@user, !product, :emoji</span>
            <input type="submit">{this.props.submitButton}</input>
        </div>
    }

    render(){
        let commentType = this.props.type
        const placeholderSen = (commentType) => {
            switch (commentType) {
                case 'review':
                    let placeholds = `Add a comment to ${this.props.users[responseId]}'s review...`
                    return placeholds;
                case 'comment':
                    return `Add a reply to ${this.props.users[responseId]}'s comment...`;
                case 'product':         
                    return "What do you think of this product..."; 
                default:
                    return "no type";
            }
        }
        return(
            <form onSubmit={this.handleSubmit} className="comment-form-container">
                <div className="comment-line-of-text">
                    <div>profilepic</div>
                </div>
                <textarea className="comment-text" handleChange={this.handleChange} placeHolder={placeholderSen} />
                {this.hiddenSubmit}
            </form>
        )
    }
}