import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
