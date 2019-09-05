import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// React 解析html：

    // 见文档：https://reactjs.org/docs/dom-elements.html

    // dangerouslySetInnerHTML={{__htlm:***}}:

        // eg:<div className="**" dangerouslySetInnerHTML={{_html:this.state.list.content}}></div>


const axios = require('axios');

class Pcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            domain: 'http://a.itying.com/'
        };
    }

    requestData = (aid) => {
        var api = this.state.domain + 'api/productcontent?id=' + aid;

        axios.get(api).then((response) => {
            console.log(response.data.result[0]);

            this.setState({
                list: response.data.result[0]
            })
        }).then(function (error) {
            console.log(error)
        })
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

        var aid = this.props.match.params.id;

        this.requestData(aid);


    }

    render() {
        return (
            <div>
                这是一个商品详情组件
                {/* {
                    this.state.list.map((value,key)=>{
                        return <li key={key}>{value}</li>
                    })
                } */}
                
                    <div className="back" >
                    <Link to="/">返回</Link>
                    </div>

                <div className="item_top">
                    <img src={`${this.state.domain}${this.state.list.img_url}`} className="item_pic" />
                    <h3>{this.state.list.title}</h3>
                    <div className="item_price">{this.state.list.price}/份</div>
                </div>
                <div>
                    <h3>商品详情</h3>
                    <div className="item_content" dangerouslySetInnerHTML={{__html:this.state.list.content}}>
                        {/* {this.state.list.content} */}
                    </div>
                </div>

                {/* <li>{this.state.list.title}</li> */}


            </div>
        );
    }
}

export default Pcontent;