import * as ActionType from '../actionType'

/**
 * 修改语言
 */
export const updateLocale = (data:string) => {
    return{
        type: ActionType.setting.UPDATA_LOCALE,
        data
    }
}