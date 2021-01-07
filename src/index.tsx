import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import {Provider} from 'react-redux';
import './index.css';
import {store} from "./redux/store";
import App from './layouts/LeftNavigation';
import Login from "./containers/Login/Login";
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import Mock from "mockjs";//使用接口时需要注释此引用

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
        <Login/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
