import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './css/App.css';
import Home from './component/Home';
import Pcontent from './component/Pcontent';


// 请求api接口：

//   列表：http://a.itying.com/api/productlist

//   详情：http://a.itying.com/api/productcontent?id=5acla22011f48140d0002955

function App() {
  return (
    <div>
      {/* <Home></Home>
      <Pcontent></Pcontent> */}

      <Router>
        <div>
          {/* <ul>
            <li>
              <Link to="/">首页组件</Link>
            </li>
            <li>
              <Link to="/pcontent">详情页组件</Link>
            </li>
          </ul> */}

          <Route exact path="/" component={Home}></Route>
          <Route path="/pcontent/:id" component={Pcontent}></Route>
        </div>



      </Router>
    </div>
  );
}

export default App;
