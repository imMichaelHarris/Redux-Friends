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

export const getFriends = () => dispatch => {
    dispatch({type: FETCH_FRIENDS_START})
     axiosWithAuth()
    .get('/friends')
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: FETCH_FRIENDS_FAILED, payload: err.response})
    })
}

///////////////          ADD FRIEND         //////////////
export const SAVING_FRIEND = "SAVING_FRIEND"
export const UPDATING_FRIEND = "UPDATING_FRIEND"

export const addFriends = info => dispatch => {
    dispatch({type: SAVING_FRIEND})
    axiosWithAuth()
    .post('')
}