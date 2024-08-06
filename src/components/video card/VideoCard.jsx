import "./VideoCard.css";

const VideoCard = ({
  videoName,
  videoDescription,
  videoNumber,
  setVideoId,
}) => {
  return (
    <div className="video-card">
      <div className="title-desc">
        <h3>{videoName}</h3>
        <p>{videoDescription}</p>
      </div>
      <h4>{videoNumber}</h4>
    </div>
  );
};

export default VideoCard;
