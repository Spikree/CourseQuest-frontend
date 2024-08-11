import axios from "axios";
import ExistingVideo from "../../components/existing videos/ExistingVideo";
import "./UploadVideos.css";
import { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadVideos = () => {
  const [videoName, setVideoName] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoDuration, setVideoDuration] = useState("");
  const [videoNumber, setVideoNumber] = useState("");
  const fileInputRef = useRef(null);
  const [video, setVideo] = useState(null);
  const [allVideos, setAllVideos] = useState([]);
  const { CourseId } = useContext(StoreContext);

  const url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");

  const formData = new FormData();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(
          url + `/get-videos?courseId=${CourseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setAllVideos(response.data.allVideoData);
        console.log(response);
      } catch (error) {}
    };
    getVideos();
  }, []);

  const uploadVideo = async (e) => {
    e.preventDefault(e);

    formData.append("videoName", videoName);
    formData.append("videoDescription", videoDescription);
    formData.append("videoDuration", videoDuration);
    formData.append("videoNumber", videoNumber);
    formData.append("video", video);
    formData.append("courseId", CourseId);

    try {
      const response = await axios.post(url + "/upload-video", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        formData,
      });

      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleUploadFile = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  return (
    <div className="upload-videos">
      <ToastContainer />
      <div className="existing-videos">
        {allVideos.map((video, idx) => {
          return (
            <ExistingVideo
              key={idx}
              videoName={video.videoName}
              videoDescription={video.videoDescription}
              videoNumber={video.videoNumber}
            />
          );
        })}
      </div>

      <div className="video-upload">
        <form onSubmit={(e) => uploadVideo(e)}>
          <div className="input-div">
            <h2>Upload Video</h2>
          </div>

          <div className="input-div">
            <label>Video Name</label>
            <input
              onChange={(e) => setVideoName(e.target.value)}
              value={videoName}
              placeholder="video name"
            />
          </div>

          <div className="input-div">
            <label>Video description</label>
            <input
              onChange={(e) => setVideoDescription(e.target.value)}
              value={videoDescription}
              placeholder="video description"
            />
          </div>

          <div className="input-div">
            <label>Video duration</label>
            <input
              onChange={(e) => setVideoDuration(e.target.value)}
              value={videoDuration}
              type="number"
              placeholder="video duration"
            />
          </div>

          <div className="input-div">
            <label>Video number</label>
            <input
              onChange={(e) => setVideoNumber(e.target.value)}
              value={videoNumber}
              type="number"
              placeholder="video number"
            />
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p htmlFor="fileInput" style={{ margin: "0px" }}>
              Choose video :
            </p>
            <input
              type="file"
              name="thumbnail"
              accept="video/*"
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

          <button type="submit">Upload video</button>
        </form>
      </div>
    </div>
  );
};

export default UploadVideos;
