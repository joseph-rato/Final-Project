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
    this.loginAsGuest = this.loginAsGuest.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user).then(this.props.closeModal)
  }

  loginAsGuest() {
    const emailArr = 'test1@gmail.com'.split('');
    const passwordArr = 'password'.split('');
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
          <li className="session-errors" key={`error-${i}`}>
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
      <div className="modal-screen animated fadeInDown">
        <form className="modal-session-form"onSubmit={this.handleSubmit}>
          <br/>
            <img className="session-form-img" src={window.images.sessionForm}></img>
            <label className="session-form-img-desc outlineme">Product Escape</label>

            <p className="please-do-form">{capitalLogin} to Product Escape </p>
            <p className="type-of-community">We're a community of product people here to geek out and discover new, interesting products.</p>
          {this.renderErrors()}
          <div className="signup-question">Use our demo logins</div>
          <div className='guest-login-options'>
            <button className='demo-login twitter' onClick={this.loginAsGuest}>
              <i className="fab fa-twitter"></i>
              <p className="demo-login-des">LOG IN WITH TWITTER</p>
            </button>
            <button className='demo-login facebook' onClick={this.loginAsGuest}>
              <i className="fab fa-facebook-f"></i>
              <p className="demo-login-des">LOG IN WITH FACEBOOK</p>
            </button>
            <button className='demo-login google' onClick={this.loginAsGuest}>
              <i className="fab fa-google"></i>
              <p className="demo-login-des">LOG IN WITH GOOGLE</p>
            </button>
            <button className='demo-login angelist' onClick={this.loginAsGuest}>
              <i className="fab fa-angellist"></i>
              <p className="demo-login-des">LOG IN WITH ANGELLIST</p>
            </button>
          </div>
          <div className="session-discliamer">We'll never post to any of your accounts without your permission.</div>
          <div className="signup-question">or</div>
          <div className='session-form-manual-login'>
              {
                (this.props.formType === 'signup')
              ? (
                <label>USERNAME
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    />
                </label>
                )
              : <div></div>
            }
            <label> EMAIL
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                />
            </label>
              <label> PASSWORD
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  />
              </label>
              <br></br>
              <input id="login" className="session-submit" type="submit" value={this.props.formType.toUpperCase()}/>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
