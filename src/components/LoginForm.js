import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChangeInput = event => {
    if (event.target.name === 'username') {
      this.setState({
        username: event.target.value
      })
    } else {
      this.setState({
        password: event.target.value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" type="text" value={this.state.username} onChange={this.handleChangeInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" value={this.state.password} onChange={this.handleChangeInput}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
