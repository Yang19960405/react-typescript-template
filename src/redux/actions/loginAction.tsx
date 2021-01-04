import * as ActionType from "../actionType";

export function updateLoginInfo(data:{[key:string]:any}){
    return {
        type: ActionType.LOGIN_UPDATE,
        data
    }
}

export function addLoginInfo(data:{[key:string]:any}){
    return {
        type: ActionType.LOGIN_ADD,
        data
    }
}