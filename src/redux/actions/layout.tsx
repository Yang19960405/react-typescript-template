import * as ActionType from '../actionType'

/**
 * 修改导航显示状态
 */
export const updataCollapsed = (collapsed: boolean) => {
    return{
        type: ActionType.layout.UPDATA_COLLAPSED,
        collapsed,
    }
}