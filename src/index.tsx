import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider} from 'antd';
import {Provider} from 'react-redux';
import './index.css';
import {store} from "./redux/store";
import { connect } from "react-redux";
import App from "./router/Index";
import { ReducerType } from "./redux/rootReducer";
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.less';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Mock from "mockjs";//使用接口时需要注释此引用

moment.locale('zh-cn');

const Page = connect((e:ReducerType)=>{return{locale:e.userReducer.userInfo.name}})((e:any) =>{
  window.console.log("store:",e);
  return (
    <ConfigProvider locale = {zhCN}>
      <App></App>
    </ConfigProvider>
  )
})


ReactDOM.render(
  <Provider store={store}>
    <Page/>
  </Provider>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
