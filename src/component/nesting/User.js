import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../css/User.css';
import Info from './User/Info';
import Main from './User/Main';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="user">

                <div className="content">

                    <div className="left">


                        <div>
                            <Link to="/user/">个人中心</Link>
                        </div>
                        <div>
                            <Link to="/user/main">用户信息</Link>
                        </div>

                    </div>

                    <div className="right">
                        <Route exact path="/user/" component={Info}></Route>
                        <Route path="/user/main" component={Main}></Route>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;