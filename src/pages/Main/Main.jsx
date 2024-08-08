import CourseCard from "../../components/course card/CourseCard";
import "./Main.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoCourses from "../../components/No cources/NoCourses";
import { StoreContext } from "../../context/StoreContext";

const Main = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    if (!authToken) {
      navigate("/");
    }
  }, [authToken]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(url + "/get-all-courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(res.data.courseList);
        if (res.data.length === 0) {
          console.log("no courses found");
        }
        setCourses(res.data.courseList);
      } catch (error) {
        toast.error("error fetching courses", {
          position: "top-right",
        });
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="main">
      <ToastContainer />
      <div
        className="main-container"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index}>
              <Link key={course._id} to={"/course-page"}>
                <CourseCard
                  courseThumbnail={course.courseThumbnail}
                  key={course._id}
                  courseId={course._id}
                  name={course.name}
                  description={course.description}
                  price={course.price}
                />
              </Link>
            </div>
          ))
        ) : (
          <NoCourses />
        )}
      </div>
    </div>
  );
};

export default Main;
