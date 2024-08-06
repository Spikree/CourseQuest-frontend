import CourseCard from "../../components/course card/CourseCard";
import "./Main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoCourses from "../../components/No cources/NoCourses";

const Main = () => {
  const url = "http://localhost:5000";
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState();
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

  const handleClick = (courseId) => {
    setCourseId(courseId);
    console.log(courseId);
  };

  return (
    <div className="main">
      <ToastContainer />
      <div
        className="main-container"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} onClick={() => handleClick(course._id)}>
              <Link key={course._id} to={"/course-page"}>
                <CourseCard
                  courseThumbnail={course.courseThumbnail}
                  key={course._id}
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
