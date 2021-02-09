import React from 'react';
import {Layout,Button,Menu,Avatar,Row,Col,Dropdown,DatePicker,Select } from 'antd';
import { connect } from "react-redux";
import * as ActionType from "../redux/actionType";

import { ReducerType } from "../redux/rootReducer";
import { host } from "../config";
import Axios from "axios";
import { MenuUnfoldOutlined,MenuFoldOutlined,UserOutlined} from '@ant-design/icons';
import LeftNavigation from "./LeftNavigation";
import { updateLocale } from "../redux/actions/setting";
import { updataCollapsed } from "../redux/actions/layout";
import "./Layout.less";
import { useHistory } from "react-router-dom";

const {Option} = Select

export interface IProp{
    locale: string;
    children: any;
    collapsed: boolean;
    toggle: () => void;
    updateLocale: (e:string) => void;
}

const onClickSingOut = (history:any) =>{
    localStorage.clear();
    window.console.log(localStorage.getItem("name"));
    history.push("/login");
}

const UserSetting = (history:any) => {
    
    return (
        <>
            <Menu>
                <Menu.Item>
                    <a onClick = {() => {onClickSingOut(history)}}>退出</a>
                </Menu.Item>
            </Menu>
        </>
    )
} 

const AppLayout = (e:IProp) =>{
    let history = useHistory();
    const { Header, Sider, Content } = Layout;
    return(
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={e.collapsed}>
                <div className="logo">
                    <img src = "/images/logo.png" />
                </div>
                <LeftNavigation/>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <Row justify="space-between">
                        <Col>
                            {React.createElement(e.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: e.toggle,
                            })}
                        </Col>
                        <Col >
                            <div className = "layout-header-user-div">
                                <Select className = "layout-header-user-select" value = {e.locale} onChange = {(value:any) => {e.updateLocale(value)}}>
                                    <Option key = "zh-cn" value = "zh-cn">
                                        中文
                                    </Option>
                                    <Option key = "en-us" value = "en-us">
                                        English
                                    </Option>
                                </Select>
                                <Dropdown overlay = {UserSetting(history)}>
                                    <Avatar icon={<UserOutlined/>}></Avatar>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
  
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                    <DatePicker></DatePicker>
                    <div className = "test">
                        
                        <div className = "testa"></div>
                    </div>
                    <div className = "test1"></div>
                </Content>
                </Layout>
            </Layout>
        </>
    )
}

const mapDispatchToProps = (dispatch:any,ownProps:any) =>{
    return{
        toggle: () => dispatch(updataCollapsed()),
        updateLocale: (e:string) => dispatch(updateLocale(e))
    }
}

const mapStateToProps = (state:ReducerType) =>{
    return{
        collapsed: state.layoutReducer.layoutInfo.collapsed,
        locale: state.settingReducer.settingInfo.locale
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppLayout);