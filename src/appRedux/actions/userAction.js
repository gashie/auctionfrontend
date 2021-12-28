
import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../actions/type'
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(email))
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: email,
      })
  
      
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    document.location.href = '/login'
  }