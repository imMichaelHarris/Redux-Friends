import {FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILED} from '../actions'
const initialState = {
    friends: [],
    error: '',
    fetching: false
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetching: true,
                errors: ''
            }
        default: 
        return state;
    }
}