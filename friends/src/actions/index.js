import axios from 'axios';

export const LOGIN_START = "LOGIN_START"
export const logIn = (credentials) => dispatch =>{
    dispatch({type: LOGIN_START })
    axios.post('http://localhose:5000/api/login', credentials)
}