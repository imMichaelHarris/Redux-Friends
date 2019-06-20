import {axiosWithAuth} from '../utility/axiosWithAuth'

//                 LOGIN                                       //

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const logIn = (credentials) => dispatch =>{
    dispatch({type: LOGIN_START })
    return axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
        console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload)
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
        return true;
    })
    .catch(err => {
        console.log(err)
        dispatch({type: LOGIN_FAILED, payload: err.response})
    })
}

////////////////         FRIEND                               ////
export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START"
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS"
export const FETCH_FRIENDS_FAILED = "FETCH_FREINDS_FAILED"