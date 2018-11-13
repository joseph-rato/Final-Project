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
    handleSubmit(e){
        e.preventDefault();
        let reviewData = Object.assign({}, {reviews: this.state})
        debugger
        return this.props.sendForm(reviewData).then(openModal('product', this.props.product))
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
                    <select value={this.state.value} onChange={this.handleChange('time_used')}>
                        <option value="Never Used">NEVER USED</option>
                        <option value="One Day">1 DAY</option>
                        <option value="One Week">1 WEEK</option>
                        <option value="One Month">1 MONTH</option>
                        <option value="One Year">1 YEAR</option>
                    </select>
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
