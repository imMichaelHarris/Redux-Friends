
import { combineReducers} from 'redux'
import {friendReducer as friends} from './friendReducer'
import {loginReducer as login} from  './loginReducer'

export default combineReducers({
    friends,
    login
})