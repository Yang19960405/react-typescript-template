import {combineReducers} from 'redux';
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer";
import settingReducer,{SettingModel} from "./reducers/setting"
import { LoginModel } from "./reducers/loginReducer";
import leftMeunReducer, { leftMenuModel} from "./reducers/leftMenu"
import layoutReducer, {LayoutModel} from "./reducers/layout";

const rootReducer = combineReducers({
    userReducer,
    loginReducer,
    leftMeunReducer,
    layoutReducer,
    settingReducer,
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
    };
    settingReducer:{
        settingInfo:SettingModel
    }
}

export default rootReducer;