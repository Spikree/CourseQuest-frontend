import { useEffect, useState } from "react";
import "./ProfileInfo.css";
import axios from "axios";
import { getInitials } from "../../helper/getInitials";
import { Link, useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [userName, setUserName] = useState("loading");

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(url + "/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userName = response.data.user.name;

        setUserName(userName);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [token]);

  return (
    <div className="profile-info">
      <Link to={"/user-account"}>
        <div className="user-profile">{getInitials(userName)}</div>
      </Link>
      <div className="user-info">
        <p style={{ marginBottom: "2px" }}>{userName}</p>
        <a
          style={{ border: "1px solid gray", textAlign: "center" }}
          onClick={() => onLogout()}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default ProfileInfo;
