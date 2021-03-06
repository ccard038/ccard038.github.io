import Navbar from "./Navbar";
import LanguageSel from "./LanguageSel";
import Home from "./Home";
import LearnMore from "./LearnMore";
import Standings from "./Standings";
import Register from "./Register";
import NotFound from "./NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="fill-window">
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
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
      <LanguageSel />
    </Router>
  );
}

export default App;
