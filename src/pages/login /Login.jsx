import { useState } from "react";
import "./Login.css";
import { FaEye } from "react-icons/fa";

const Login = ({ email, password, setEmail, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={() => handleSubmit()}>
        <div className="inputs">
          <label>email</label>
          <input
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter email"
          />
        </div>

        <div className="inputs">
          <label>password</label>
          <div className="password-div">
            <input
              className="login-input-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enter password"
              type={showPassword ? "password" : ""}
            />
            <FaEye
              onClick={() => setShowPassword(!showPassword)}
              className="icon"
              style={{ color: showPassword ? "black" : "grey" }}
            />
          </div>
        </div>

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
