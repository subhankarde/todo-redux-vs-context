import { combineReducers } from 'redux'
import todos from './todo'

//export default combineReducers({ temp: () => { return {} } }); //Temporary purpose while building
export default combineReducers({ todos: todos });
