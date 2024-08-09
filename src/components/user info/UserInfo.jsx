import { useEffect, useState } from "react";
import "./UserInfo.css";
import axios from "axios";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(url + "/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserName(response.data.user.name);
        setUserEmail(response.data.user.email);
      } catch (error) {
        console.log(error);
      }
    };

    getUserInfo();
  }, []);

  return (
    <div className="user-info-main">
      <p className="user-name">{userName}</p>
      <p className="user-email">{userEmail}</p>
      <Link
        style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "10px",
        }}
        to="/all-courses"
      >
        View all your courses
      </Link>
    </div>
  );
};

export default UserInfo;
