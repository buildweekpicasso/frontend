import axios from 'axios';

export const baseURL = 'https://bw-picasso.herokuapp.com';
export const testURL = 'https://quiet-shore-93010.herokuapp.com';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post(`${baseURL}/auth/login`, creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token
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
  return axios.post(`${baseURL}/auth/register`, creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.token
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

export const FETCH_STYLES_START = 'FETCH_STYLES_START';
export const FETCH_STYLES_SUCCESS = 'FETCH_STYLES_SUCCESS';
export const FETCH_STYLES_FAILURE = 'FETCH_STYLES_FAILURE';
export const fetchStyleImages = () => dispatch => {
  console.log('Running')
  dispatch({ type: FETCH_STYLES_START });
  return axios.get(`${testURL}/images/styles/`)
    .then(res => {
      dispatch({
        type: FETCH_STYLES_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_STYLES_FAILURE,
        payload: err.response
      })
    });
}

export const SUBMIT_PAYLOAD_START = 'SUBMIT_PAYLOAD_START';
export const SUBMIT_PAYLOAD_SUCCESS = 'SUBMIT_PAYLOAD_SUCCESS';
export const SUBMIT_PAYLOAD_FAILURE = 'SUBMIT_PAYLOAD_FAILURE';
export const submitPayload = formData => dispatch => {
  dispatch({ type: SUBMIT_PAYLOAD_START });
  return axios.post(`${baseURL}/images/upload/`, formData)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: SUBMIT_PAYLOAD_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: SUBMIT_PAYLOAD_FAILURE,
        payload: err.response,
      })
    });
}