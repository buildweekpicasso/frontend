import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions';

const initialState = {
  loggingIn: false,
  signingUp: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
      }
      case SIGNUP_START:
      return {
        ...state,
        signingUp: true,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
      }
    default:
      return state;
  }
}
export default reducer;