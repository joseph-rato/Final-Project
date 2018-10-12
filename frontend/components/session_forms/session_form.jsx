import React from 'react'
import {Link, withRouter} from 'react-router-dom';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user).then(this.props.closeModal)
  }

  loginAsGuest() {
    const emailArr = 'guest@guest.com'.split('');
    const passwordArr = 'hunter2'.split('');
    const button = document.getElementById('login');
    this.setState({email: '', password: ''}, () =>
      this.loginAsGuestHelper(emailArr, passwordArr, button)
    );
  }

  loginAsGuestHelper(emailArr, passwordArr, button){
    if (emailArr.length > 0) {
      this.setState(
        { email: this.state.email + emailArr.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(emailArr, passwordArr, button), 75);
        }
      );
    } else if (passwordArr.length > 0) {
      this.setState(
        { password: this.state.password + passwordArr.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(emailArr, passwordArr, button), 100);
        }
      );
    } else {
      button.click();
    }
  }

  handleChange(type) {
    return (event) => {
      event.preventDefault();
      this.setState({[type]: event.currentTarget.value})
    }
  }

  renderErrors () {
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))
      }
      </ul>
    );
  }



  render () {
    const capitalLogin = this.props.formType.slice(0, 1).toUpperCase() + this.props.formType.slice(1)
    return (
      <div className="modal-screen">
        <form className="modal-session-form"onSubmit={this.handleSubmit}>
          <br/>
            <img className="session-form-img" src="../../../app/assets/images/product_escape_session_form.jpeg"></img>
            <label className="session-form-img-desc">Product Hunt</label>
            <p className="please-do-form">{capitalLogin} to Product Escape </p>
            <p className="type-of-community">We're a community of product people here to geek out and discover new, interesting products.</p>
          {this.renderErrors()}
          <div className='session-form-manual-login'>
              {
                (this.props.formType === 'signup')
              ? (
                <label> Username:
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    />
                </label>
                )
              : <div></div>
            }
            <br />
            <label> Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                />
            </label>
            <br/>
              <label> Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  />
              </label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType}/>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
