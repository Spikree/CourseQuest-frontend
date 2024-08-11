import "./ExistingVideo.css";

const ExistingVideo = ({ videoName, videoDescription, videoNumber }) => {
  return (
    <div className="existing-video-inner">
      <div className="video-title">
        <h2>{videoName}</h2>
      </div>

      <div className="video-description">
        <p>{videoDescription}</p>
      </div>

      <div className="video-number">{videoNumber}</div>
    </div>
  );
};

export default ExistingVideo;
