import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Login.scss';
import { login, signup } from '../../actions';

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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.location.pathname === '/login');
    this.props.location.pathname === '/login'
      ? this.props.login(this.state.creds)
          .then(() => {
            this.props.history.push('/private');
          })
      : this.props.signup(this.state.creds)
          .then(() => {
            this.props.history.push('/private');
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
      ?(<Redirect to='/private' />)
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
                ? 'Log In'
                : 'Sign Up'
            }
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ loggingIn, signingUp }) => ({
  loggingIn, signingUp
});

export default connect(
  mapStateToProps,
  { login, signup }
)(Login);