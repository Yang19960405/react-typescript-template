import React from 'react';
import {Layout,Button,Menu} from 'antd';
import { connect } from "react-redux";
import * as ActionType from "../redux/actionType";
import { ReducerType } from "../redux/rootReducer";
import { leftMenu } from "../redux/reducers/leftMenu";
import { host } from "../config";
import Axios from "axios";
import { getMeunData } from "../redux/actions/leftMenu";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const LeftNavigation = (e:IProp) =>{
    const {SubMenu} = Menu
    window.console.log(e);
    if(e.leftMenuData.length === 0){
        e.getMenuData();
    }
    return (
        <>
            <Menu
                style={{ width: 256 }}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                {
                    e.leftMenuData.map(titleItem => {
                        return(
                            <>
                                <SubMenu key = {titleItem.key} title = {titleItem.value} icon={<MailOutlined />}>
                                    {titleItem.items?.map(item => {
                                        return(
                                            <>
                                                <Menu.Item key = {item.key}>{item.value}</Menu.Item>
                                            </>
                                        )
                                    })}
                                </SubMenu>
                                
                            </>
                            
                        )
                    })
                }
            </Menu>
            {e.children}
        </>
    )
}

const mapStateToProps = (state:ReducerType) => {
    return{
        leftMenuData: state.leftMeunReducer.leftInfo.leftMenuData
    }
}

const mapDispatchToProps = (dispatch:any,ownProps:any) =>{
    return{
        getMenuData:async () => {
            var ref = await Axios.get(`${host}/menu/data`)
            if(ref.status === 200){
                dispatch(getMeunData(ref.data.data))
            }
        }
    }
}

interface IProp{
    getMenuData: () => void;
    leftMenuData: leftMenu[];
    children:any;
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftNavigation);
