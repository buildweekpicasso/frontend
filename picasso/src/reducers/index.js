import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

const initialState = {
  loggingIn: false,
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
    default:
      return state;
  }
}
export default reducer;