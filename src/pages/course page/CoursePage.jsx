import { useNavigate } from "react-router-dom";
import "./CoursePage.css";
import { useEffect } from "react";

const CoursePage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <div>Course page</div>;
};

export default CoursePage;
