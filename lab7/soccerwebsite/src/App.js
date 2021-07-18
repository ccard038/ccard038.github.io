import Navbar from "./Navbar";
import Home from "./Home";
import LearnMore from "./LearnMore";
import Standings from "./Standings";
import Register from "./Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/learnmore">
              <LearnMore />
            </Route>
            <Route exact path="/standings">
              <Standings />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
