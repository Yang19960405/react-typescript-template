import * as ActionType from '../actionType';
import {IAction} from '../actionType';
import {combineReducers} from 'redux';

export interface leftMenu{
    key: string,
    value: string,
    url: string,
    items?: leftMenu[],
}

export interface leftMenuModel{
    leftMenuData: leftMenu[]
}

const initialState: leftMenuModel = {
    leftMenuData: [],
}

const leftInfo = (state:leftMenuModel = initialState, action:IAction) =>{
    switch(action.type){
        case ActionType.leftMenu.GET_MENUDATA: return {...state, leftMenuData:action.data}
        default: return state;
    }
}

const leftMeunReducer = combineReducers({
    leftInfo,
})

export default leftMeunReducer;