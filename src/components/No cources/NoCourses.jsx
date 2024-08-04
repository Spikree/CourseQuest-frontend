import "./NoCourses.css";
import { TbError404 } from "react-icons/tb";

const NoCourses = () => {
  return (
    <div className="no-courses">
      <TbError404 className="not-found-icon" />
      <p>Error fetching courses</p>
    </div>
  );
};

export default NoCourses;
