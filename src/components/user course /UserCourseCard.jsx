import { Link } from "react-router-dom";
import "./UserCourseCard.css";

const UserCourseCard = ({
  courseName,
  courseDescription,
  coursePrice,
  courseDate,
  courseThumbnail,
}) => {
  return (
    <div className="user-courses-card">
      <div className="user-course-image">
        <img className="user-courses-image" src={courseThumbnail} />
      </div>

      <div className="course-name course-description">
        <h2>{courseName}</h2>
        <p>{courseDescription}</p>
      </div>

      <div className="course-price">
        <h4>$ {coursePrice}</h4>
        <p>created on: {courseDate}</p>
      </div>

      <Link to={"/upload-videos"} className="upload-video">
        upload videos
      </Link>
    </div>
  );
};

export default UserCourseCard;
