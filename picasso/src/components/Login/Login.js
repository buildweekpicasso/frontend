import React from 'react';
import { connect } from 'react-redux';
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
    console.log(this.props.location.pathname)

    return (
      <div className='Login'>
        <Form
          onSubmit={this.login}
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