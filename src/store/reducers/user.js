import UserActionTypes from '../constants/user';

const initialState = {
  email: '',
  errorMessage: '',
  name: '',
  status: 'idle',
  thumb: '',
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionTypes.GET_USER_REQUEST:
      return {
        ...state,
        status: 'running',
      };
    case UserActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        status: 'success',
      };
    case UserActionTypes.GET_USER_FAILED:
      return {
        ...state,
        errorMessage: payload.message,
        status: 'error',
      };
    default:
      return state
  }
}

export default userReducer;