import {combineReducers} from 'redux';
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer";
import { LoginModel } from "./reducers/loginReducer";
import leftMeunReducer, { leftMenuModel} from "./reducers/leftMenu"
import layoutReducer, {LayoutModel} from "./reducers/layout";

const rootReducer = combineReducers({
    userReducer,
    loginReducer,
    leftMeunReducer,
    layoutReducer,
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
    };
    layoutReducer:{
        layoutInfo:LayoutModel
    }
}

export default rootReducer;