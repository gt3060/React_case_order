import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import one from '../images/one.png';
import '../css/index.css'

const axios = require('axios');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            domain: 'http://a.itying.com/'
        };
    }

    requestData = () => {

        var api = this.state.domain + 'api/productlist';

        axios.get(api).then((response) => {
            console.log(response);
            this.setState({
                list: response.data.result
            })
        }).then(function (error) {
            console.log(error)
        })

    }

    componentDidMount() {
        this.requestData();
    }
    render() {
        return (
            <div className="Home">
                首页组件
                <button>
                    <Link to="/login">跳转到登录页面</Link>
                </button>
                <div className="list">
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <div className="item" key={key}>

                                    <h3 className="title">{value.title}</h3>

                                    <ul>
                                        {
                                            value.list.map((v, k) => {
                                                return (
                                                    <div key={k}>
                                                        <li>
                                                            <Link to={`/pcontent/${v._id}`}>
                                                                <img src={`${this.state.domain}${v.img_url}`} className="item_pic"></img>
                                                                <p className="item_title">{v.title}</p>
                                                                <p className="item_price">{v.price}￥</p>
                                                            </Link>

                                                        </li>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            )
                        })
                    }

                    <h3></h3>

                </div>


            </div>
        );
    }
}

export default Home;