import * as ActionType from '../actionType';
import {IAction} from '../actionType';
import {combineReducers} from 'redux';

const initialState = {
    name:"aaa",
};

const userInfo = (state = initialState,action: IAction) => {
    switch(action.type){
        case ActionType.USERINFO_UPDATE: return {name: "BBB"};
        default: return state;
    }
}

const userReducer = combineReducers({
    userInfo
})

export default userReducer;