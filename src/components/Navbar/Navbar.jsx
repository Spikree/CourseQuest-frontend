import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <h1>CourseQuest</h1>
          </Link>
        </div>

        <div className="nav-items">
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
