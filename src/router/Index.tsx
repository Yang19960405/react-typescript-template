import React from 'react';
import ReactDOM from 'react-dom';
import {Router } from 'react-router';
import App from '../layouts/Layout';
import Login from "../views/login/IndexCont";
import { BrowserRouter, Route, Switch ,Redirect} from "react-router-dom";

const indexPage11 = (
    <>
      <App>
        <Route path="/logi"><Login/></Route>
      </App>
    </>
)

// const PrivateRoute = ({ children, ...rest }) => {

// }
const LoginPage = () =>{
    window.console.log(localStorage.getItem("name1"));
    if(localStorage.getItem("name1") == null){
        return(<Login/>)
    }else{
        return(
            <Redirect to = {{pathname:"/"}}/>
        )
    }
}

const Index = () =>{
    return(
        <React.StrictMode>
            <BrowserRouter >
                <Switch>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/"  component={() => {return indexPage11}} />
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    )
}
export default Index