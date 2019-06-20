import axios from 'axios';

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"





export const logIn = (credentials) => dispatch =>{
    dispatch({type: LOGIN_START })
    axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: LOGIN_FAILED, payload: err.response})
    })
}