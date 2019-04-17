import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FETCH_STYLES_START,
  FETCH_STYLES_SUCCESS,
  FETCH_STYLES_FAILURE,
  SUBMIT_PAYLOAD_START,
  SUBMIT_PAYLOAD_SUCCESS,
  SUBMIT_PAYLOAD_FAILURE,
} from '../actions';

const initialState = {
  error: '',
  loggingIn: false,
  signingUp: false,
  fetchingStyles: false,
  styleImages: [],
  submittingPayload: false,
  resultImages: {
    file: null,
  },
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
      case FETCH_STYLES_START:
      return {
        ...state,
        error: '',
        fetchingStyles: true,
      }
    case FETCH_STYLES_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingStyles: false,
        styleImages: action.payload,
      }
    case FETCH_STYLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingStyles: false,
      }
    case SUBMIT_PAYLOAD_START:
      return {
        ...state,
        error: '',
        submittingPayload: true,
      }
    case SUBMIT_PAYLOAD_SUCCESS:
      return {
        ...state,
        error: '',
        submittingPayload: false,
        resultImages: action.payload,
      }
    case SUBMIT_PAYLOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        submittingPayload: false,
      }
    default:
      return state;
  }
}
export default reducer;