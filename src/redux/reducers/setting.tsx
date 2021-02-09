import * as ActionType from '../actionType';
import {IAction} from '../actionType';
import {combineReducers} from 'redux';

export interface SettingModel{
    locale: string
}

const initialState: SettingModel = {
    locale: "zh-cn"
}

const settingInfo = (state = initialState, action:IAction) =>{
    switch(action.type){
        case ActionType.setting.UPDATA_LOCALE: return{ ...state, locale:action.data};
        default: return state;
    }
}

const settingReducer = combineReducers({
    settingInfo,
})

export default settingReducer;