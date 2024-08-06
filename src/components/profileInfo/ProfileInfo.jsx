import { useEffect, useState } from "react";
import "./ProfileInfo.css";
import axios from "axios";
import { getInitials } from "../../helper/getInitials";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const url = "http://localhost:5000";
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
      <div className="user-profile">{getInitials(userName)}</div>

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
