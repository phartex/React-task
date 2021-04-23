import React from 'react'
import Main from './component/Main'
import {
  BrowserHistory,
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Activity from './component/Activity'
import Earn from './component/Earn'
import Market from './component/Market'
import Wallet from './component/Wallet'
const App = () => {
    return (
      
        <Router>
            <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/Activity" exact component={Activity}></Route>
          <Route path="/Earn" exact component={Earn}></Route>
          <Route path="/Market" exact component={Market}></Route>
          <Route path="/Wallet" exact component={Wallet}></Route>
          
        </Switch>
    
        </Router>

        
    )
}

export default App
