import React from 'react';
import {Link} from 'react-router-dom';

class CreateReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time_used_selected: '',
            rating_selected: '',
            pro: '',
            con: '',
            time_used: '',
            comment: '',
            rating: '',
            product_id: this.props.product.id,
            user_id: this.props.currentUser
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRating = this.handleRating.bind(this)
    }
    handleRating(num_score){
        return (event) => {
            event.preventDefault();
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
            debugger
            // let selector = type + '_selected'
            // this.highlightedSwitch(selector)
            this.highlightedSwitch(type, event.currentTarget);
            debugger
            this.setState({[type]: event.currentTarget.value})
        }
    }
    highlightedSwitch(type, new_button){
        let selectedState = type + '_selected'
        console.log(selectedState)
        debugger
        let oldButton = this.state[selectedState]
        if (oldButton){
            oldButton.classList.remove(`${selectedState}`)
        }
        this.setState({[selectedState]: new_button})
        debugger
        new_button.classList.add(`${selectedState}`)
    }

    handleSubmit(e){
        e.preventDefault();
        let reviewData = Object.assign({}, {reviews: this.state})
        return this.props.sendForm(reviewData).then(this.props.openModal('product', this.props.product))
    }
    handleDelete(){

    }
    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <div className="create-review">
                    <div className="review-question">Would you recommend product, name to a friend?</div>
                    <div className="review-rating-system">
                        <button onClick={this.handleRating(1)} className="review-face-counter"><i className="far fa-smile"></i></button>
                        <button onClick={this.handleRating(0)} className="review-face-counter"><i className="far fa-meh"></i></button>
                        <button onClick={this.handleRating(-1)} className="review-face-counter"><i className="far fa-frown"></i></button>
                    </div>
                </div>
                <div>
                    <label>Pros</label>
                    <input onChange={this.handleChange('pro')}></input>
                    <span>140</span>
                </div>
                <div>
                    <label>Cons</label>
                    <input onChange={this.handleChange('con')}></input>
                    <span>140</span>
                </div>
                <div>
                    <label>Tell us more</label>
                    <textarea onChange={this.handleChange('comment')} rows="3" cols="50"></textarea>
                    <span>Infinity</span>
                </div>
                <div>
                    <label>How long have you used this product?</label>
                    <div>
                        <button onClick={this.buttonSelection('time_used')} value="Never Used">NEVER USED</button>
                        <button onClick={this.buttonSelection('time_used')} value="One Day">1 DAY</button>
                        <button onClick={this.buttonSelection('time_used')} value="One Week">1 WEEK</button>
                        <button onClick={this.buttonSelection('time_used')} value="One Month">1 MONTH</button>
                        <button onClick={this.buttonSelection('time_used')} value="One Year">1 YEAR</button>
                    </div>
                </div>
                <div>
                    <button>DELETE MY REVIEW</button>
                    <button type="submit">SAVE</button>
                </div>

            </form>

        </div>
        )
    }
};

export default CreateReview;
