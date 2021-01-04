import React from 'react';
import {Layout,Button} from 'antd';
import { connect } from "react-redux";
import * as ActionType from "../redux/actionType";



class LeftNavigation extends React.Component<any,any>{

    constructor(props:any){
        super(props)
        window.console.log(this.props.value);
    }

    render(){
        return(
            <>
                <Button type = "default" >按钮</Button>
                <Button type = "default" onClick = {this.props.updataName} >1{this.props.value}</Button>
            </>
        )
    }
}

const mapStateToProps = (state:any) => {
    return{
        value: state.userReducer.userInfo.name
    }
}

const mapDispatchToProps = (dispatch:any,ownProps:any) =>{
    return{
        updataName: () => dispatch({
            type: ActionType.USERINFO_UPDATE
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftNavigation);
