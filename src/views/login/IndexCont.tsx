import React from "react";
import { connect } from "react-redux";
import Login from "./Index";
import * as ActionType from "../../redux/actionType";
import { ReducerType } from "../../redux/rootReducer";
import Axios from 'axios';
import { host } from "../../config";
import "../../utils/mock/Index";

const mapDispatchToProps = (dispatch:any) =>{
    return{
        updataPassWord:(e:string) => dispatch({
            type:ActionType.LOGIN_ADD,
            num:e,
        }),
        updataUserName:(e:string) => dispatch({
            type:ActionType.LOGIN_UPDATE,
            num:e,
        }),
        loginSubmit: async (userName:string,passWord:string) =>{
            var ref = await Axios.post(`${host}/login/login`,{
                userName,
                passWord,
            })
            dispatch({
                type: ActionType.LOGIN_SET_USERPASS
            })
            if(ref.status === 200){
                
            }

        }
    }
}

const mapStateToProps = (state:ReducerType) => {
    return{
        loginName: state.loginReducer.loginInfo.loginUserName,
        loginPass: state.loginReducer.loginInfo.loginPassWord,
    }
}

export interface ILogin{
    loginName:string;
    loginPass: string;
    updataPassWord: (e:string) => void;
    updataUserName: (e:string) => void;
    loginSubmit: (userName:string,passWord:string) => void;
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);