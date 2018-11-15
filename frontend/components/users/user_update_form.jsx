import React from 'react';
import {Link} from 'react-router-dom';

class UserUpdateForm extends React.Component{
    constructor(props){
        super(props)
        debugger
        this.state = {
            user: ""
            // username: this.props.users[this.props.userId] ? this.props.users[this.props.userId].username : "",
            // avatar: this.props.users[this.props.userId] ? this.props.users[this.props.userId].avatar : "",
            // headline: this.props.users[this.props.userId] ? this.props.users[this.props.userId].headline : "",
            // website: this.props.users[this.props.userId] ? this.props.users[this.props.userId].website : "",
            // email: this.props.users[this.props.userId] ? this.props.users[this.props.userId].email : "",
            // profile_header: this.props.users[this.props.userId] ? this.props.users[this.props.userId].profile_header : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }
    componentDidMount(){
        debugger
        this.props.fetchUser(this.props.userId).then( (userData) => 
            this.setState(userData)
        )
    }

    handleFile(type){
        return (event) => {
            event.preventDefault();
            return this.setState({[type]: event.currentTarget.files[0]})
        }
    }

    handleChange(type) {
        debugger
        return (event) => {
            event.preventDefault()
            return this.setState({[type]: event.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
    }

    render(){
        debugger
        this.user = this.state.user
        if (this.user === ""){
            return null;
        } else {
            return(
                <div className="user-form-page">
                    <h1 className="page-description">Settings</h1>
                    <div className="update-form-container">
                        <h3>My Details</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="profile-form-name">
                                <label className="profile-update-label">Name</label>
                                <input type="text" className="profile-form-input-field" onChange={this.handleChange('username')} value={this.user.username}></input>
                            </div>
                            <div className="profile-form-avatar">
                                <label className="profile-update-label">Avatar</label>
                                <input type="file"></input>
                            </div>
                            <div className="profile-form-headline">
                                <label className="profile-update-label">Headline</label>
                                <input type="text" className="profile-form-input-field" onChange={this.handleChange('headline')} value={this.user.headline}></input>
                            </div>
                            <div>
                                <label className="profile-update-label">Email</label>
                                <input type="email" className="profile-form-input-field" onChange={this.handleChange('email')} value={this.user.email}></input>
                            </div>
                            <div>
                                <label className="profile-update-label">Website</label>
                                <input type="text" className="profile-form-input-field" onChange={this.handleChange('website')} value={this.user.website}></input>
                            </div>
                            <div>
                                <label className="profile-update-label">Profile Header</label>
                                <input type="file"></input>
                            </div>
                            <button type="submit" className="">UPDATE</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}


export default UserUpdateForm;