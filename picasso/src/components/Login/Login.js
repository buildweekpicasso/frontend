import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap';
import './Login.scss';

export default class Login extends React.Component {
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.location.pathname === '/login'
      ? this.props.login(this.state.creds)
          .then(() => {
            this.props.history.push('/');
          })
      : this.props.signup(this.state.creds)
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
    const canSubmit = !!this.state.creds.username && !!this.state.creds.password;

    return localStorage.getItem('token')
      ?(<Redirect to='/' />)
      :(<div className='Login'>
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormGroup>
            <Label for='login-un'>Username</Label>
            <Input
              id='login-un'
              type='text'
              name='username'
              placeholder='Username'
              value={this.state.creds.username}
              onChange={this.handleChanges}
            />
          </FormGroup>
          <FormGroup>
            <Label for='login-pw'>Password</Label>
            <Input
              id='login-pw'
              type='password'
              name='password'
              placeholder="Password"
              value={this.state.creds.password}
              onChange={this.handleChanges}
            />
          </FormGroup>
          <Button
            type='submit'
            color={canSubmit ? 'primary' : 'secondary' }
            disabled={!canSubmit}
            title='Both a username and password must be entered before submitting'
          >
            {
              this.props.location.pathname === '/login'
                ? !this.props.loggingIn
                  ? 'Log In'
                  : <Spinner size='sm' color='dark' />
                : !this.props.signingIn
                  ? 'Sign Up'
                  : <Spinner size='sm' color='dark' />
            }
          </Button>
        </Form>
      </div>
    );
  }
}
