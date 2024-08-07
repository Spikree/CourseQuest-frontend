import { useState } from "react";
import "./CreateCourse.css";
import { useEffect } from "react";
import axios from "axios";

const CreateCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [thumbnail, setThumbnail] = useState(null);

  const url = "http://localhost:5000";
  const token = localStorage.getItem("token");

  const formData = new FormData();

  const createCourse = async (e) => {
    e.preventDefault();
    formData.append("name", courseName);
    formData.append("description", courseDescription);
    formData.append("price", coursePrice);
    formData.append("courseThumbnail", thumbnail);
    console.log("sub");
    try {
      const response = await axios.post(url + "/create-course", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        formData,
      });
    } catch (error) {
      console.log(error);
    }

    setThumbnail(null);
    setCourseName("");
    setCourseDescription("");
    setCoursePrice(0);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  return (
    <div className="create-course">
      <form onSubmit={(e) => createCourse(e)}>
        <input
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          type="text"
          name="name"
          placeholder="course name"
        />
        <input
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="course description"
        />
        <input
          value={coursePrice}
          onChange={(e) => setCoursePrice(e.target.value)}
          type="number"
          name="price"
          placeholder="course price"
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <p htmlFor="fileInput" style={{ margin: "0px" }}>
            Choose Thumbnail :
          </p>
          <input type="file" name="thumbnail" onChange={handleFileChange} />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default CreateCourse;
