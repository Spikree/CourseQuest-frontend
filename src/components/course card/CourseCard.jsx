import "./CourseCard.css";
import { IoIosAddCircleOutline } from "react-icons/io";

const CourseCard = ({ name, price, description }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src="https://pbs.twimg.com/media/FPg8IHhWUAE0Zyz?format=jpg&name=large" />
      </div>

      <div className="course-title">
        <h2>{name}</h2>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="course-price">
        <h2>{price}$</h2>
        <IoIosAddCircleOutline className="add-icon" />
      </div>
    </div>
  );
};

export default CourseCard;
