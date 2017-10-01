import {
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
} from 'actions/types';

const INITIAL_STATE = {
  error: '',
  currentlySending: false,
};

export const ui = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SENDING_REQUEST:
      return { ...state, currentlySending: action.sending };
    case REQUEST_ERROR:
      return { ...state, error: action.error };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};

export default ui;
