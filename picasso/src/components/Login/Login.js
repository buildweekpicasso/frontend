import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creds: {
        username: '',
        password: '',
      }
    }
  }

  handleChanges = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value,
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.creds)
      .then(() => {
        this.props.history.push('/');
      });
    this.setState({
      creds: {
        username: '',
        password: '',
      }
    })
  };

  render() {
    return (
      <div className='Login'>
        <Form
          onSubmit={this.login}
        >
          <Input
            type='text'
            name='username'
            placeholder='Username'
            value={this.state.creds.username}
            onChange={this.handleChanges}
          />
          <Input
            type='password'
            name='password'
            placeholder="Password"
            value={this.state.creds.password}
            onChange={this.handleChanges}
          />
          <Button
            type='submit'
          >
            Log In
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;