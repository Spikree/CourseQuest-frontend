import { useNavigate } from "react-router-dom";
import "./CoursePage.css";
import { useEffect, useState } from "react";
import VideoCard from "../../components/video card/VideoCard";
import axios from "axios";
import VideoPlayer from "../../components/video player/VideoPlayer";
import NowPlaying from "../../components/now playing/NowPlaying";

const CoursePage = () => {
  const navigate = useNavigate();
  const courseId = "66aa7acac0404bda3b4c50ef";
  const url = "http://localhost:5000";
  const token = localStorage.getItem("token");

  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [videoUrl, setVideoUrl] = useState();
  const [nowPlayingName, setNowPlayingName] = useState("Choose a video");
  const [nowPlayingDescription, setNowPlayingDescription] = useState();
  const [nowPlayingNumber, setNowPlayingNumber] = useState();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${url}/get-videos?courseId=${courseId}`,
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

    if (!token) {
      navigate("/login");
    } else {
      fetchVideos();
    }
  }, [token, navigate, courseId]);

  const getVideoUrl = async () => {
    try {
      const response = await axios.get(
        `${url}/get-video-by-id?videoId=${videoId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.videoUrl) {
        console.log(response.data);
        setNowPlayingName(response.data.videoName);
        setNowPlayingNumber(response.data.videoNumber);
        setNowPlayingDescription(response.data.videoDescription);
        setVideoUrl(response.data.videoUrl);
      } else {
        console.log("No video URL found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVideoClick = (videoId) => {
    setVideoId(videoId);
    getVideoUrl();
  };

  return (
    <div className="course-page">
      <div className="course-page-left">
        <div className="course-page-video-left">
          <VideoPlayer videoUrl={videoUrl} />
        </div>
        <div className="course-page-video-bottom">
          <NowPlaying
            name={nowPlayingName}
            description={nowPlayingDescription}
            number={nowPlayingNumber}
          />
        </div>
      </div>
      <div className="course-page-right">
        {videos.map((video) => (
          <div
            key={video.videoId}
            onClick={() => handleVideoClick(video.videoId)}
          >
            <VideoCard
              videoId={video.videoId}
              videoName={video.videoName}
              videoDescription={video.videoDescription}
              videoNumber={video.videoNumber}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
