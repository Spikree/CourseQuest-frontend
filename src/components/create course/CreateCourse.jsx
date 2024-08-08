import { useRef, useState } from "react";
import "./CreateCourse.css";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [thumbnail, setThumbnail] = useState(null);
  const fileInputRef = useRef(null);

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

      toast.success("course created sucessfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setThumbnail(null);
    setCourseName("");
    setCourseDescription("");
    setCoursePrice(0);
  };

  const handleUploadFile = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  return (
    <div className="create-course">
      <ToastContainer />
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

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <p htmlFor="fileInput" style={{ margin: "0px" }}>
            Choose Thumbnail :
          </p>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <button
            className="choose-file-btn"
            onClick={(e) => handleUploadFile(e)}
          >
            Choose file
          </button>
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default CreateCourse;
