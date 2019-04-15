import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('https://bw-picasso.herokuapp.com/auth/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.payload
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response
      })
    });
}

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios.post('https://bw-picasso.herokuapp.com/auth/register', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.payload
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err.response
      })
    });
}