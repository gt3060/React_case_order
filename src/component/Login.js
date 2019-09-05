import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link ,Redirect , withRouter} from 'react-router-dom';

/**
 * 实现用js跳转路由：
 *      
 *      1、要引入Redirect
 *          
 *          import { BrowserRouter as Router, Route, Link ,Redirect , withRouter} from 'react-router-dom';         
 * 
 *      2、定义一个flag
 * 
 *          this.state = { 
                loginFlag:false
            };
 * 
 *      3、进行判断，如果flag为ture则跳转：
 * 
 *          if(this.state.loginFlag){
               //第一种写法：

                // return <Redirect to={{pathname:"/"}}/>

                //第二种写法：

                return <Redirect t="/"></Redirect>
            }      
 *      
        4、执行js跳转

            通过改变loginflag状态，重新渲染界面
 */

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginFlag:false
         };
    }

    doLogin=(e)=>{

        e.preventDefault();

        let username =  this.refs.username.value;

        let pwd = this.refs.pwd.value;

        if(username == 'admin' && pwd == '123456'){
            console.log("登录 成功")
            this.setState({
                loginFlag:true
            })
            }
        else{
            console.log("登录失败")
        }

        console.log(username+"呸"+pwd)
    } 

    render() {

        if(this.state.loginFlag){
            
            //第一种写法：

            // return <Redirect to={{pathname:"/"}}/>

            //第二种写法：

            return <Redirect t="/"></Redirect>
        }

        return (
            <div>
                <br/><br/>
                <form onSubmit={this.doLogin}>
                    <input type ="text" ref="username"/><br/><br/>
                    <input type = "password" ref="pwd"/><br/><br/>
                    <input type="submit" value="执行登录"/><br/>
                </form>
            </div>
        );
    }
}

export default Login;