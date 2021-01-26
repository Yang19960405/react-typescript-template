import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import {Provider} from 'react-redux';
import './index.css';
import {store} from "./redux/store";
import App from "./router/Index";
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.less';
import Mock from "mockjs";//使用接口时需要注释此引用

/**
 * 进入路由时触发
 */
const enterTab = () =>{
  window.console.log("已执行");
  return false;
}
/**
 * 离开路由时触发
 */
const leaveTab = () =>{
  window.console.log("");
}

const homePage = () =>{
}


ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
