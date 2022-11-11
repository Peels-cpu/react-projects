
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dominevo from './Components/Dominevo';
import Romanfrig from './Components/Romanfrig';
import Khepreetle from './Components/Khepreetle';
import Meganeudra from './Components/Meganeudra';
import Monking from './Components/Monking';
import Craggon from './Components/Craggon';
import Opawan from './Components/Opawan';
import Polluvern from './Components/Polluvern';
import Raival from './Components/Raival';
import Skadire from './Components/Skadire';
import Soarnox from './Components/Soarnox';
import Triplydra from './Components/Triplydra';

function App() {
  return (
    <Router>
    <div className="App">
     <NavBar />
      <Switch>

        <Route exact path="/">
          <Body/>
        </Route>

        <Route exact path="/Dominevo">
          <Dominevo/>
        </Route>

        <Route exact path="/Romanfrig">
          <Romanfrig/>
        </Route>

        <Route exact path="/Khepreetle">
          <Khepreetle/>
        </Route>

        <Route exact path="/Meganeudra">
          <Meganeudra/>
        </Route>

        <Route exact path="/Monking">
          <Monking/>
        </Route>

        <Route exact path="/Craggon">
          <Craggon/>
        </Route>

        <Route exact path="/Opawan">
          <Opawan/>
        </Route>

        <Route exact path="/Polluvern">
          <Polluvern/>
        </Route>

        <Route exact path="/Raival">
          <Raival/>
        </Route>

        <Route exact path="/Skadire">
          <Skadire/>
        </Route>

        <Route exact path="/Soarnox">
          <Soarnox/>
        </Route>

        <Route exact path="/Triplydra">
          <Triplydra/>
        </Route>
        
      </Switch>
     <Footer />
    </div>
    </Router>

  );
}

export default App;
