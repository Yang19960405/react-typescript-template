import React from "react";
import {message} from 'antd'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Login from "./Index";
import * as ActionType from "../../redux/actionType";
import { ReducerType } from "../../redux/rootReducer";
import Axios from 'axios';
import { host } from "../../config";
import "../../utils/mock/Index";

const LoginCont = (e:ILogin) =>{
    let history = useHistory();
    const loginSubmit = async (userName:string,passWord:string) => {
        let isSuccess = false;
        var ref = await Axios.post(`${host}/login/login`,{
            userName,
            passWord,
        })
        if(ref.status === 200){
            if(ref.data.isSuccess){
               isSuccess = ref.data.isSuccess;
               history.push("/");
            }
        }
        if(!isSuccess){
            message.error("登陆失败，请检查账号密码");
        }else{
            message.success("登陆成功");
            localStorage.setItem("name",userName);
            window.console.log(localStorage.getItem("name"));
        }
    }
    return(<Login {...e} loginSubmit = {loginSubmit} ></Login>)
}

const mapDispatchToProps = (dispatch:any) =>{
    //let history = useHistory();
    return{
        updataPassWord:(e:string) => dispatch({
            type:ActionType.LOGIN_ADD,
            num:e,
        }),
        updataUserName:(e:string) => dispatch({
            type:ActionType.LOGIN_UPDATE,
            num:e,
        })
    }
}

const mapStateToProps = (state:ReducerType) => {
    return{
        loginName: state.loginReducer.loginInfo.loginUserName,
        loginPass: state.loginReducer.loginInfo.loginPassWord,
    }
}

export interface ILogin{
    loginName?: string;
    loginPass?: string;
    updataPassWord: (e:string) => void;
    updataUserName: (e:string) => void;
    loginSubmit ?: (userName:string,passWord:string) => void ;
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginCont);