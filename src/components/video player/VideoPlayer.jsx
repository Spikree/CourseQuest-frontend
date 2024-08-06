import SelectVideo from "../select a video/SelectVideo";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="course-page-video">
      {videoUrl ? <video controls src={videoUrl} /> : <SelectVideo />}
    </div>
  );
};

export default VideoPlayer;
