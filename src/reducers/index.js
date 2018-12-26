import { combineReducers} from "redux/es/redux";
import authReducer from './authReducer';

export default combineReducers({

    //object with the reducers
    auth: authReducer

})