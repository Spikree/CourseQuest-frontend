import CourseCard from "../../components/course card/CourseCard";
import "./Main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const url = "http://localhost:5000";
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(url + "/get-all-courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.length === 0) {
          console.log("no courses found");
        }
        setCourses(res.data.courses);
      } catch (error) {
        toast.error("error fetching courses", {
          position: "top-right",
        });
      }
    };

    fetchCourses();
  }, []);

  console.log(courses);

  console.log(courses._id);

  return (
    <div className="main">
      <ToastContainer />

      {courses.length > 0 ? (
        courses.map((course) => (
          <CourseCard
            key={course._id}
            name={course.name}
            description={course.description}
            price={course.price}
          />
        ))
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
};

export default Main;
