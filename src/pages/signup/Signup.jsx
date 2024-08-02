import { useState } from "react";
import "./Signup.css";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = ({ name, email, password, setName, setEmail, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const api = "http://localhost:5000";
  const handleSubmit = async () => {
    event.preventDefault();

    try {
      const response = await axios.post(api + "/create-account", {
        name: name,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setName("");
        setEmail("");
        setPassword("");
        toast.success("Account created successfully!", {
          position: "top-center",
        });
      } else {
        toast.error("Failed to create account. Please try again later.", {
          position: "top-left",
        });
      }

      setName("");
      setEmail("");
      setPassword("");

      toast.success("Success Notification !", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Error Notification !", {
        position: "top-left",
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
