import * as ActionType from '../actionType';
import {IAction} from '../actionType';
import {combineReducers} from 'redux';

export interface LoginModel{
    loginUserName:string;
    loginPassWord:string
}

const initialState:LoginModel = {
    loginUserName:"",
    loginPassWord:""
};

const loginInfo = (state = initialState,action: IAction) => {
    switch(action.type){
        case ActionType.LOGIN_ADD: return {...state,loginPassWord: action.num};
        case ActionType.LOGIN_UPDATE: return {...state,loginUserName: action.num};
        case ActionType.LOGIN_SET_USERPASS: return {...state,loginPassWord: "",loginUserName: ""};
        default: return state;
    }
}

const loginReducer = combineReducers({
    loginInfo
})

export default loginReducer;
