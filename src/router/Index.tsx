import React from 'react';
import ReactDOM from 'react-dom';
import {Router } from 'react-router';
import App from '../layouts/Layout';
import Login from "../views/login/IndexCont";
import { BrowserRouter, Route, Switch ,Redirect} from "react-router-dom";

const HomePage = () =>{
    if(localStorage.getItem("name") !== null){
        return(
            <>
              <App>
                <Route path="/logi"><Login/></Route>
              </App>
            </>
        )
    }else{
        return(
            <Redirect to = {{pathname:"/login"}}/>
        )
    }
    
} 

// const PrivateRoute = ({ children, ...rest }) => {

// }
const LoginPage = () =>{
    if(localStorage.getItem("name") == null){
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
                    <Route path="/">
                        <HomePage/>
                    </Route> 
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    )
}
export default Index