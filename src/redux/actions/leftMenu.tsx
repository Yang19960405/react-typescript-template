import * as ActionType from '../actionType'
import { leftMenu } from "../reducers/leftMenu";

/**
 * 获取导航数据
 * @param data 导航数据
 */
export function getMeunData(data:leftMenu){
    return{
        type: ActionType.leftMenu.GET_MENUDATA,
        data
    }
}