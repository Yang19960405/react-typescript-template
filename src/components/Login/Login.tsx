import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormInstance } from "antd/lib/form";
import {ILogin} from "../../containers/Login/Login"

export default class Login extends React.Component<ILogin>{

    /**
     * 表单数据域
     */
    formRef = React.createRef<FormInstance>();

    constructor(props:any){
        super(props);
        window.console.log(props);
    }

    componentDidMount(){
        this.setLoginFormData();
    }

    componentDidUpdate(){
        this.setLoginFormData();
    }

    setLoginFormData = () =>{
        this.formRef.current?.setFieldsValue({
            username: this.props.loginName,
            password: this.props.loginPass,
        })
    }

    render(){
        return(
            <>
                <Form
                    ref = {this.formRef}
                    name="normal_login"
                    className="login-form"
                    onFinish={() => {this.props.loginSubmit(this.props.loginName,this.props.loginPass)}}
                >
                    <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="Username" 
                        onChange = {e => {
                            this.props.updataUserName(e.target.value)
                        }}
                    />
                    </Form.Item>
                    <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange = {e => {
                            this.props.updataPassWord(e.target.value)
                        }}
                    />
                    </Form.Item>
                    <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
            
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    </Form.Item>
            
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </>
        )
    }
}  