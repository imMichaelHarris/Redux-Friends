import {LOGIN_START} from '../actions'

const initialState = {
    error: '',
    loggingIn: false
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            console.log('hey ')
            return {
                ...state
            }
        default: 
        return state
    }
}