import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions';

const initialState = {
  error: '',
  loggingIn: false,
  signingUp: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
      }
      case SIGNUP_START:
      return {
        ...state,
        error: '',
        signingUp: true,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: '',
        signingUp: false,
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        signingUp: false,
      }
    default:
      return state;
  }
}
export default reducer;