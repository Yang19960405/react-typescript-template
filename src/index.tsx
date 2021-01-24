import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import {Provider} from 'react-redux';
import './index.css';
import {store} from "./redux/store";
import App from './layouts/Layout';
import Login from "./views/login/IndexCont";
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.less';
import {Router } from 'react-router';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mock from "mockjs";//使用接口时需要注释此引用

const indexPage11 = (
  <>
    <App>
      <Route path="/logi" component={Login}/>
    </App>
  </>
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={() => indexPage11} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
