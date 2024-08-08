import { useEffect, useState } from "react";
import "./UserInfo.css";
import axios from "axios";

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
    </div>
  );
};

export default UserInfo;
