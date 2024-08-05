import { useNavigate } from "react-router-dom";
import "./CoursePage.css";
import { useEffect, useState } from "react";
import VideoCard from "../../components/video card/VideoCard";
import axios from "axios";
import VideoPlayer from "../../components/video player/VideoPlayer";

const CoursePage = () => {
  const navigate = useNavigate();

  const courseId = "66aa7acac0404bda3b4c50ef";

  const url = "http://localhost:5000";

  const token = localStorage.getItem("token");
  const [video, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          url + `/get-videos?courseId=${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setVideos(response.data.allVideoData);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchVideos();

    if (!token) {
      navigate("/login");
    }
  }, [token]);

  console.log(video);

  return (
    <div className="course-page">
      <div className="course-page-left">
        <div className="course-page-video-left">
          {video.map((video, index) => {
            return <VideoPlayer key={index} videoUrl={video.videoUrl} />;
          })}
        </div>

        <div className="course-page-video-bottom"></div>
      </div>
      <div className="course-page-right">
        <VideoCard />
      </div>
    </div>
  );
};

export default CoursePage;
