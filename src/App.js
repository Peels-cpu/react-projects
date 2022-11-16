
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
import Azuroon from './Components/Azuroon';
import Furnice from './Components/Furnice';
import Leximinth from './Components/Leximinth';
import Moomega from './Components/Moomega';
import Murdoll from './Components/Murdoll';
import Raftnesse from './Components/Raftnesse';
import Revup from './Components/Revup';
import Nightmort from './Components/Nightmort';
import Spectreat from './Components/Spectreat';

function App() {
  return (
    <Router>
    <div className="App">
     <NavBar />
      <Switch>

        <Route  path="/react-projects" exact component={Body}>
          <Body/>
        </Route>

        <Route  path="/react-projects/Dominevo" exact component={Dominevo}>
          <Dominevo/>
        </Route>

        <Route exact path="/react-projects/Romanfrig">
          <Romanfrig/>
        </Route>

        <Route exact path="/react-projects/Khepreetle">
          <Khepreetle/>
        </Route>

        <Route exact path="/react-projects/Meganeudra">
          <Meganeudra/>
        </Route>

        <Route exact path="/react-projects/Monking">
          <Monking/>
        </Route>

        <Route exact path="/react-projects/Craggon">
          <Craggon/>
        </Route>

        <Route exact path="/react-projects/Opawan">
          <Opawan/>
        </Route>

        <Route exact path="/react-projects/Polluvern">
          <Polluvern/>
        </Route>

        <Route exact path="/react-projects/Raival">
          <Raival/>
        </Route>

        <Route exact path="/react-projects/Skadire">
          <Skadire/>
        </Route>

        <Route exact path="/react-projects/Soarnox">
          <Soarnox/>
        </Route>

        <Route exact path="/react-projects/Triplydra">
          <Triplydra/>
        </Route>

        <Route exact path="/react-projects/Azuroon">
          <Azuroon/>
        </Route>

        <Route exact path="/react-projects/Furnice">
          <Furnice/>
        </Route>

        <Route exact path="/react-projects/Leximinth">
          <Leximinth/>
        </Route>

        <Route exact path="/react-projects/Moomega">
          <Moomega/>
        </Route>

        <Route exact path="/react-projects/Murdoll">
          <Murdoll/>
        </Route>

        <Route exact path="/react-projects/Raftnesse">
          <Raftnesse/>
        </Route>

        <Route exact path="/react-projects/Revup">
          <Revup/>
        </Route>

        <Route exact path="/react-projects/Nightmort">
          <Nightmort/>
        </Route>
        
        <Route exact path="/react-projects/Spectreat">
          <Spectreat/>
        </Route>

      </Switch>
     <Footer />
    </div>
    </Router>

  );
}

export default App;
