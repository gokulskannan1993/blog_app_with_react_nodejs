import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const user = true;

  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/signup">{user ? <Home /> : <Register />}</Route>
          <Route path="/signin">{user ? <Home /> : <Login />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
          <Route path="/post/:postID">
            <Single></Single>
          </Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
