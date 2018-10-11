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
    this.props.processForm(user)
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
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render () {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <br/>
          Please {this.props.formType}
          {this.renderErrors()}
          <div>
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
