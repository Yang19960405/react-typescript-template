import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.less";
import { ILogin } from "./IndexCont";
import PickerButton from "antd/lib/date-picker/PickerButton";
import Axios from 'axios';
import { host } from "../../config";

const LoginView = (e:ILogin) => {

    const [form] = Form.useForm();

    return(
        <>
            <div className = "login-body">
                
                <Form
                    form = {form}
                    name="normal_login"
                    className="login-form"
                    onFinish = {values => {
                        if(e.loginSubmit){
                            e.loginSubmit(values.username,values.password);
                        }
                    }}
                >
                    <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="Username" 
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
            </div>
            
        </>
    )
}

export default LoginView