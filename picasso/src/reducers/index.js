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
  SUBMIT_DEEP_PAYLOAD_START,
  SUBMIT_DEEP_PAYLOAD_SUCCESS,
  SUBMIT_DEEP_PAYLOAD_FAILURE,
  FETCH_REQUEST_START,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  FETCH_GALLERY_START,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
} from '../actions';

const initialState = {
  error: '',
  loggingIn: false,
  signingUp: false,
  fetchingStyles: false,
  styleImages: [],
  submittingPayload: false,
  resultImages: {
    output_url: null,
    content_url: null,
    style_url: null,
    request_key: null,
  },
  processDeep: false,
  fetchingRequest: false,
  // fetchingGallery: false,
  // gallery: [],
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
        processDeep: false,
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
      case SUBMIT_DEEP_PAYLOAD_START:
      return {
        ...state,
        error: '',
        submittingPayload: true,
        processDeep: false,
      }
    case SUBMIT_DEEP_PAYLOAD_SUCCESS:
      return {
        ...state,
        error: '',
        submittingPayload: false,
        processDeep: true,
      }
    case SUBMIT_DEEP_PAYLOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        processDeep: false,
        submittingPayload: false,
      }
    case FETCH_REQUEST_START:
      return {
        ...state,
        error: '',
        fetchingRequest: true,
      }
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingRequest: false,
        resultImages: action.payload,
      }
    case FETCH_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingRequest: false,
      }
    case FETCH_GALLERY_START:
      return {
        ...state,
        error: '',
        fetchingGallery: true,
      }
    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingGallery: false,
        gallery: action.payload,
      }
    case FETCH_GALLERY_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingGallery: false,
      }
    default:
      return state;
  }
}
export default reducer;