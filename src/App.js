import React from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
import './css/App.css';
// import Home from './component/Home';
import Pcontent from './component/Pcontent';
import Login from './component/Login';
import Home from './component/nesting/Home'
import User from './component/nesting/User';


// 请求api接口：

//   列表：http://a.itying.com/api/productlist

//   详情：http://a.itying.com/api/productcontent?id=5acla22011f48140d0002955

function App() {
  return (
    <div>

      {/* <Router>
        <div>
        
          <Route path="/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/pcontent/:id" component={Pcontent}></Route>
        </div>

      </Router> */}
      <Router>
      <header className="title1">
        <br/>
        <Link to="/" >首页组件</Link>

        <Link to="/user" >用户界面</Link>
        
      </header>
      
        <Route exact path="/" component={Home}/>
        <Route path="/user" component ={User}/>
      </Router>
    </div>
  );
}

export default App;
