import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashBoard from "./components/user dashboard/userDashboard";
const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/dashboard">
            <UserDashBoard></UserDashBoard>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
