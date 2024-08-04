import { useEffect, useState } from "react";
import "./ProfileInfo.css";
import axios from "axios";

const ProfileInfo = () => {
  // const url = "http://localhost:5000";

  // const token = localStorage.getItem("token");

  const [userName, setUserName] = useState("loading");

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const response = await axios.get(url + "/get-user", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       const userName = response.user.name;

  //       setUserName(userName);

  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getUser();
  // }, []);

  // console.log(userName);

  return (
    <div className="profile-info">
      <div className="user-profile">{userName}</div>

      <div className="user-info">
        <p>name</p>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
