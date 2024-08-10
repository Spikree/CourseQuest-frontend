import { useState, useEffect } from "react";
import "./Signup.css";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  setIsLoggedIn,
}) => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    if (authToken) {
      navigate("/main");
    }
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = async () => {
    event.preventDefault();

    try {
      const response = await axios.post(url + "/create-account", {
        name: name,
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        setIsLoggedIn(true);
        navigate("/main");
      }

      if (response.status === 400) {
        toast.error(response.data.message, {
          position: "top-left",
        });
      } else if (response.status == 200) {
        setName("");
        setEmail("");
        setPassword("");
        toast.success(response.data.message, {
          position: "top-right",
        });
      }

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="signup">
      <ToastContainer />
      <form className="signup-form" onSubmit={() => handleSubmit()}>
        <div className="inputs">
          <label>name</label>
          <input
            type="text"
            required
            className="login-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Enter name"
          />
        </div>

        <div className="inputs">
          <label>email</label>
          <input
            type="email"
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
          signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
