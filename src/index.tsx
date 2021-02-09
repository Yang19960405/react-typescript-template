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
import {getAntdLocale} from "./utils/i18n/index";
import 'antd/dist/antd.less';
import moment from 'moment';

import Mock from "mockjs";//使用接口时需要注释此引用
const Page = connect((e:ReducerType)=>{return{locale:e.settingReducer.settingInfo.locale}})((e:any) =>{
  return (
    <ConfigProvider locale = {getAntdLocale(e.locale)}>
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
