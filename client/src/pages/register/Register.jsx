import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Sign Up</span>
      <form action="" className="registerForm">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your name"
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your password"
        />
        <button className="registerButton">Sign Up</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/signin">
          Sign In
        </Link>
      </button>
    </div>
  );
}
