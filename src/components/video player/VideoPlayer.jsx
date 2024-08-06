import "./VideoPlayer.css";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="course-page-video">
      {videoUrl ? <video controls src={videoUrl} /> : <p>No video selected</p>}
    </div>
  );
};

export default VideoPlayer;
