import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import ProfileInfo from "../profileInfo/ProfileInfo";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const Token = localStorage.getItem("token");

  useEffect(() => {
    if (Token) {
      setIsLoggedIn(!isLoggedIn);
    }
  }, [Token]);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>CourseQuest</h1>
        </div>

        <div className={isLoggedIn ? "disabled" : "nav-items"}>
          <ul>
            <Link to={"/login"}>Login</Link>

            <Link to={"/signup"}>Signup</Link>
          </ul>
        </div>

        <div className={isLoggedIn ? "search-box" : "disabled"}>
          <input
            value={searchValue}
            onChange={() => setSearchValue()}
            className="search-box-input"
            placeholder="search"
          />

          {searchValue ? (
            <RxCross1 style={{ color: "black" }} />
          ) : (
            <CiSearch style={{ color: "black" }} />
          )}
        </div>

        <div className={isLoggedIn ? "profile-info" : "disabled"}>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};

export default Navbar;
