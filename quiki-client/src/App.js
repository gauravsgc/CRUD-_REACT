//import Details from './Components/Stock_Details.js';
import './App.css';
import Home from './Components/Pages/Home.js';
import View from './Components/Pages/View.js';
import Edit from './Components/Pages/Edit.js';
import ADD from './Components/Pages/ADD.js';
//import Delete from './Components/Pages/Delete.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Router>
        <Switch>

          {/* <Route exact path='/' component={Home}></Route> */}

          <Route exact="true"
            path='/'
            component={Home} />



          <Route exact="true"
            path='/View/:id'
            component={View}
          />
          <Route exact="true"
            path='/Edit/:id/:nm'
            component={Edit}
          />
          <Route exact="true"
            path='/ADD'
            component={ADD}
          />
        </Switch>
        {/*<Login />*/}
      </Router>
    </>
  );
}

export default App;
