import * as ActionType from "../actionType";

export function updateUserInfo(data:{[key:string]:any}){
    return {
        type: ActionType.USERINFO_UPDATE,
        data
    }
}