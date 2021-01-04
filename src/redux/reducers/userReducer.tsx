import * as ActionType from '../actionType';
import {combineReducers} from 'redux';

interface IUserInfoAction{
    type: string;
    [key:string]:any;
}

const initialState = {
    name:"aaa",
};

const userInfo = (state = initialState,action: IUserInfoAction) => {
    switch(action.type){
        case ActionType.USERINFO_UPDATE: return {name: "BBB"};
        default: return state;
    }
}

const userReducer = combineReducers({
    userInfo
})

export default userReducer;