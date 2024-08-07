import CreateCourse from "../../components/create course/CreateCourse";
import UserInfo from "../../components/user info/UserInfo";
import "./UserAccount.css";

const UserAccount = () => {
  return (
    <div className="user-account">
      <UserInfo />
      <CreateCourse />
    </div>
  );
};

export default UserAccount;
