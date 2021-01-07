import {combineReducers} from 'redux';
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer";
import { LoginModel } from "./reducers/loginReducer";

const rootReducer = combineReducers({
    userReducer,
    loginReducer,
})

export interface ReducerType{
    userReducer:{
        userInfo:{
            name:string
        }
    };
    loginReducer:{
        loginInfo:LoginModel
    }
}

export default rootReducer;