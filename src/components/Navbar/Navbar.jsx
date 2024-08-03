import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(!isLoggedIn);
    }
  }, [accessToken]);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <h1>CourseQuest</h1>
          </Link>
        </div>

        <div className={isLoggedIn ? "disabled" : "nav-items"}>
          <ul>
            <Link to={"/login"}>Login</Link>

            <Link to={"/signup"}>Signup</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
