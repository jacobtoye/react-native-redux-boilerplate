import {
  REQUEST_ERROR,
  CLEAR_ERROR,
} from './types';

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export const requestError = error => ({
  type: REQUEST_ERROR,
  error,
});

/**
 * Sets the `error` state as empty
 */
export const clearError = () => ({
  type: CLEAR_ERROR,
});
