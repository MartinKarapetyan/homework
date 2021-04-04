import './App.css';
import {BrowserRouter,Route,Link,Switch,NavLink} from "react-router-dom";
import Home from './component/Home.js'
import AddFork from './component/AddFork.js'
import Show from './component/Show.js'
import Table from './component/Table.js'



function App() {
  return (
    <div className="boody">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/table" component={Table}/>
        <Route path="/addFork" component={AddFork}/>
        <Route path="/search" component={Show}/>
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
