import React from 'react';
import {Link} from 'react-router-dom';

class CreateReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pro: '',
            con: '',
            time_used: '',
            comment: '',
            rating: '',
            product_id: this.props.product.id,
            user_id: this.props.currentUser
        }
        this.selectors = {
            rating_selected: '',
            time_used_selected: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRating = this.handleRating.bind(this)
    }

    handleRating(num_score){
        return (event) => {
            event.preventDefault();
            this.highlightedSwitch('rating', event.currentTarget);
            this.setState({rating: num_score});
        }
    }

    handleChange(type){
        return (event) => {
            event.preventDefault();
            this.setState({[type]: event.currentTarget.value});
        }
    }

    buttonSelection(type){
        return (event) => {
            event.preventDefault();
            this.highlightedSwitch(type, event.currentTarget);
            this.setState({[type]: event.currentTarget.value})
        }
    }

    highlightedSwitch(type, new_button){
        let selectedState = type + '_selected'
        let oldButton = this.selectors[selectedState]
        if (oldButton){
            oldButton.classList.remove(`${selectedState}`)
        }
        this.selectors[selectedState] = new_button 
        new_button.classList.add(`${selectedState}`)
    }

    handleSubmit(e){
        e.preventDefault();
        let reviewData = Object.assign({}, {reviews: this.state})
        debugger
        return this.props.sendForm(reviewData).then(this.props.openModal('product', this.props.product))
    }

    handleDelete(e){
        e.preventDefault();
        debugger
        let idData = Object.assign({}, this.state)
        return this.props.deleteForm(idData).then(this.props.openModal('product', this.props.product))
    }

    render(){
        return(
        <div className="review-container">
            <form onSubmit={this.handleSubmit}>
                <div className="create-review">
                    <div className="review-question">Would you recommend product, name to a friend?</div>
                    <div className="review-rating-system">
                        <button onClick={this.handleRating(1)} className="review-face-counter"><i className="far fa-smile"></i></button>
                        <button onClick={this.handleRating(0)} className="review-face-counter"><i className="far fa-meh"></i></button>
                        <button onClick={this.handleRating(-1)} className="review-face-counter"><i className="far fa-frown"></i></button>
                    </div>
                </div>
                <div className="review-form-pros-line">
                    <label>Pros</label>
                    <input onChange={this.handleChange('pro')}></input>
                    <span>140</span>
                </div>
                <div className="review-form-cons-line">
                    <label>Cons</label>
                    <input onChange={this.handleChange('con')}></input>
                    <span>140</span>
                </div>
                <div className="review-form-comment-line">
                    <label>Tell us more</label>
                    <textarea onChange={this.handleChange('comment')} rows="3" cols="50"></textarea>
                    <span>Infinity</span>
                </div>
                <div className="review-form-time-used-line">
                    <label>How long have you used this product?</label>
                    <div>
                        <button onClick={this.buttonSelection('time_used')} value="Never Used">NEVER USED</button>
                        <button onClick={this.buttonSelection('time_used')} value="One Day">1 DAY</button>
                        <button onClick={this.buttonSelection('time_used')} value="One Week">1 WEEK</button>
                        <button onClick={this.buttonSelection('time_used')} value="One Month">1 MONTH</button>
                        <button onClick={this.buttonSelection('time_used')} value="One Year">1 YEAR</button>
                    </div>
                </div>
                <div className="review-form-button-options">
                    <button onClick={this.handleDelete}>DELETE MY REVIEW</button>
                    <button type="submit">SAVE</button>
                </div>

            </form>

        </div>
        )
    }
};

export default CreateReview;
