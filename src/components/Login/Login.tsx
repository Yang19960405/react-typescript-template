import React from "react";
import { Button } from "antd";

export default class Login extends React.Component<any,any>{

    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <>
                <Button>登录按钮</Button>
            </>
        )
    }
}