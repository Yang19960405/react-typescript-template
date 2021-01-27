import * as ActionType from '../actionType';
import {IAction} from '../actionType';
import {combineReducers} from 'redux';

export interface SettingModel{
    locale:string
}