import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Sign In</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your password"
        />
        <button className="loginButton">Sign In</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </button>
    </div>
  );
}
