import React from 'react';
import {Layout,Button,Menu} from 'antd';
import { connect } from "react-redux";
import * as ActionType from "../redux/actionType";
import { ReducerType } from "../redux/rootReducer";
import { host } from "../config";
import Axios from "axios";
import { MenuUnfoldOutlined,MenuFoldOutlined,} from '@ant-design/icons';
import LeftNavigation from "./LeftNavigation";

export interface IProp{
    children:any;
    collapsed:boolean;
    toggle: () => void;
}

const AppLayout = (e:IProp) =>{
    const { Header, Sider, Content } = Layout;
    return(
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={e.collapsed}>
                <div className="logo" />
                <LeftNavigation/>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(e.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: e.toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                    Content
                </Content>
                </Layout>
            </Layout>
        </>
    )
}

const mapDispatchToProps = (dispatch:any,ownProps:any) =>{
    return{
        
    }
}

const mapStateToProps = (state:ReducerType) =>{
    return{
        collapsed: state.layoutReducer.layoutInfo.collapsed
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppLayout);