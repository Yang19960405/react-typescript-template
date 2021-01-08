import {combineReducers} from 'redux';
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer";
import { LoginModel } from "./reducers/loginReducer";
import leftMeunReducer, { leftMenuModel} from "./reducers/leftMenu"

const rootReducer = combineReducers({
    userReducer,
    loginReducer,
    leftMeunReducer,
})

export interface ReducerType{
    userReducer:{
        userInfo:{
            name:string
        }
    };
    loginReducer:{
        loginInfo:LoginModel
    };
    leftMeunReducer:{
        leftInfo:leftMenuModel
    }
}

export default rootReducer;