import "./login.css";

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
      <button className="loginRegisterButton">Sign Up</button>
    </div>
  );
}
