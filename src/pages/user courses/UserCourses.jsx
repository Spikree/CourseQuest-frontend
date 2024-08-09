import { useEffect, useState } from "react";
import UserCourseCard from "../../components/user course /UserCourseCard";
import "./UserCourses.css";
import axios from "axios";

const UserCourses = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(url + "/get-all-courses-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response) {
          console.log("No courses found");
        }
        setCoursesData(response.data.coursesData);

        console.log(coursesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <div className="user-courses">
      {coursesData.map((course, index) => {
        return (
          <UserCourseCard
            courseName={course.name}
            courseDescription={course.description}
            coursePrice={course.price}
            courseDate={course.createdAt}
            courseThumbnail={course.courseThumbnail}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default UserCourses;
