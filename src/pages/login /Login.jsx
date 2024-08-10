import { useState, useEffect } from "react";
import "./Login.css";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = ({ email, password, setEmail, setPassword, setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    if (authToken) {
      navigate("/main");
    }
  }, []);

  const handleSubmit = async () => {
    event.preventDefault();

    try {
      const response = await axios.post(url + "/login-account", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        setIsLoggedIn(true);
        navigate("/main");
      }

      if (response.status === 200) {
        toast.success(response.data.message, {
          position: "top-right",
        });

        setEmail("");
        setPassword("");
      }

      if (response.status === 400) {
        toast.error(response.data.message, {
          position: "top-left",
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-left",
      });
    }
  };

  return (
    <div className="login">
      <ToastContainer />
      <form className="login-form" onSubmit={() => handleSubmit()}>
        <div className="inputs">
          <label>email</label>
          <input
            required
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
              required
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
