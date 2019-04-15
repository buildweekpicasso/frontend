import React from './node_modules/react';
import { connect } from './node_modules/react-redux';
import { Form, FormGroup, Label, Input, Button } from './node_modules/reactstrap';
import './Login.scss';
import { login } from '../../actions';

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
              this.props.loggingIn
                ? 'Logging In...'
                : 'Log In'
            }
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ loggingIn }) => ({
  loggingIn,
});

export default connect(
  mapStateToProps,
  { login }
)(Login);