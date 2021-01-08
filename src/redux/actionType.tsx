// actionType.ts 
//定义 action 的 type 类型
export const USERINFO_UPDATE = 'USERINFO_UPDATE';
export const SEARCHBOOK_UPDATE = 'SEARCHBOOK_UPDATE';
export const CHAPTER_UPDATE = 'CHAPTER_UPDATE';
export const LOGIN_ADD = 'LOGIN_ADD';
export const LOGIN_UPDATE = 'LOGIN_UPDATE';
export const LOGIN_SET_USERPASS = 'LOGIN_SET_USERPASS';

export const leftMenu = {
    GET_MENUDATA: "GET_MENUDATA",
}

export const layout = {
    UPDATA_COLLAPSED: "UPDATA_COLLAPSED",
}

/***
 * 定义通用Action类型
 */
export interface IAction{
    type: string;
    [key:string]:any;
}