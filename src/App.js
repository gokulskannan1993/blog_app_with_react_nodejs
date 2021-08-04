import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <Home></Home> */}
      {/* <Single></Single> */}
      {/* <Write></Write> */}
      {/* <Settings></Settings> */}
      {/* <Login></Login> */}
      <Register></Register>
    </div>
  );
}

export default App;
