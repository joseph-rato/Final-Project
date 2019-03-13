import React from 'react';
import {Link} from 'react-router-dom';

class UserUpdateForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // user: ""
            username: this.inititalCheck(this.props.users[this.props.userId].username) ? this.props.users[this.props.userId].username : "",
            avatar: this.inititalCheck(this.props.users[this.props.userId].avatar) ? this.props.users[this.props.userId].avatar : "",
            headline: this.inititalCheck(this.props.users[this.props.userId].headline) ? this.props.users[this.props.userId].headline : "",
            website: this.inititalCheck(this.props.users[this.props.userId].website) ? this.props.users[this.props.userId].website : "",
            email: this.inititalCheck(this.props.users[this.props.userId].email) ? this.props.users[this.props.userId].email : "",
            profile_header: this.inititalCheck(this.props.users[this.props.userId].profile_header) ? this.props.users[this.props.userId].profile_header : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.inititalCheck = this.inititalCheck.bind(this)
        this.updatingComponentMountin = this.updatingComponentMountin.bind(this)
    }
    componentDidMount(){
        this.props.fetchUser(this.props.userId).then( (userData) =>{
                let allUserKeys= Object.keys(userData.user[this.props.userId])
                let allUserData = userData.user[this.props.userId]
                for(let f =0; f < allUserKeys.length; f++){
                    this.updatingComponentMountin(allUserKeys[f], allUserData)
                }
            }
        )
    }

    updatingComponentMountin(key, dataObj){
        let theValue = dataObj[key]
        if (typeof theValue === 'undefined' || theValue === null){
            this.setState({[key]: ""})
        } else if (typeof theValue === "string" && theValue.slice(0, 28) === "/rails/active_storage/blobs/"){
            this.setState({[key]: "You have this picture"})
        } else {
            this.setState({[key]: theValue})
        }
    }

    inititalCheck(someProp){
        if (typeof someProp === 'undefined' || someProp === null){
            return false
        } else {
            return true
        }
    }

    handleFile(type){
        return (event) => {
            event.preventDefault();
            return this.setState({[type]: event.currentTarget.files[0]})
        }
    }

    handleChange(type) {
        return (event) => {
            event.preventDefault()
            return this.setState({[type]: event.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData()
        debugger
        if (this.state.profile_header){
            formData.append('user[profile_header]', this.state.profile_header)
        }
        if (this.state.avatar){
            formData.append('user[avatar]', this.state.avatar)
        }
        formData.append('user[username]', this.state.username)
        formData.append('user[headline]', this.state.headline)
        formData.append('user[website]', this.state.website)
        formData.append('user[email]', this.state.email)
        return this.props.updateUser(formData, this.props.userId).then( (serverProdcut) =>{
            return this.props.history.push(`/user/${this.props.userId}`)
        })
    }

    render(){        
        return(
            <div className="user-form-page">
                <h1 className="page-description">Settings</h1>
                <div className="update-form-container">
                    <h3 className="user-form-section-description">My Details</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="profile-form-name">
                            <label className="profile-update-label">Name</label>
                            <input type="text" className="profile-form-input-field" onChange={this.handleChange('username')} value={this.state.username}></input>
                        </div>
                        <div className="profile-form-avatar">
                            <label className="profile-update-label">Avatar</label>
                            <input className="profile-form-file-field" type="file" onChange={this.handleFile('avatar')}></input>
                        </div>
                        <div className="profile-form-headline">
                            <label className="profile-update-label">Headline</label>
                            <input type="text" className="profile-form-input-field" onChange={this.handleChange('headline')} value={this.state.headline}></input>
                        </div>
                        <div>
                            <label className="profile-update-label">Email</label>
                            <input type="email" className="profile-form-input-field" onChange={this.handleChange('email')} value={this.state.email}></input>
                        </div>
                        <div>
                            <label className="profile-update-label">Website</label>
                            <input type="text" className="profile-form-input-field" onChange={this.handleChange('website')} value={this.state.website}></input>
                        </div>
                        <div>
                            <label className="profile-update-label">Profile Header</label>
                            <input className="profile-form-file-field" type="file" onChange={this.handleFile('profile_header')}></input>
                        </div>
                        <button className="profile-form-submit" type="submit">UPDATE</button>
                    </form>
                </div>
            </div>
        )
    }
    
}


export default UserUpdateForm;