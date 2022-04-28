import { combineReducers } from 'redux';
import templateFormReducer from '../containers/templates/reducer/formReducer';
import loginReducer  from '../containers/user/reducer/loginReducer';
const rootReducer =  combineReducers({
    loginReducer,
    templateFormReducer
})

export default rootReducer;