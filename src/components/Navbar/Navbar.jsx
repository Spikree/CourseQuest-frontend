import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import ProfileInfo from "../profileInfo/ProfileInfo";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      navigate("/");
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>CourseQuest</h1>
        </div>
        {isLoggedIn ? (
          <div className={"search-box"}>
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
        ) : (
          <div className={"nav-items"}>
            <ul>
              <Link to={"/login"}>Login</Link>

              <Link to={"/signup"}>Signup</Link>
            </ul>
          </div>
        )}

        <div className={isLoggedIn ? "profile-info" : "disabled"}>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};

export default Navbar;
