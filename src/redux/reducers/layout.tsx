import * as ActionType from '../actionType';
import {IAction} from '../actionType';
import {combineReducers} from 'redux';

export interface LayoutModel{
    /**
     * 左侧导航显示开关
     */
    collapsed: boolean
}

const initialState:LayoutModel = {
    collapsed: false,
}

const layoutInfo = (state = initialState, action:IAction) => {
    switch(action.type){
        case ActionType.layout.UPDATA_COLLAPSED: return{ ...state, collapsed: !state.collapsed};
        default: return state;
    }
}

const layoutReducer = combineReducers({
    layoutInfo,
})

export default layoutReducer;