import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  
  const user = false;

  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <Route path="/signin">
            <Login></Login>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
          </Route>
          <Route path="/post/:postID">
            <Single></Single>
          </Route>
          <Route path="/write">
            <Write></Write>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
