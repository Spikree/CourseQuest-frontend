import "./VideoPlayer.css";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="course-page-video">
      <video controls>
        <source src={videoUrl} />
      </video>
    </div>
  );
};

export default VideoPlayer;
