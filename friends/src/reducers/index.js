
import { combinedReducers} from 'redux'
import {friendReducer as friends} from './friendReducer'

export default combinedReducers({
    friends
})