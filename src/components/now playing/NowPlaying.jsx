import "./NowPlaying.css";

const NowPlaying = ({ name, description, number }) => {
  return (
    <div className="now-playing">
      <div className="now-playing-left">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <div className="now-playing-right">
        <h3>{number}</h3>
      </div>
    </div>
  );
};

export default NowPlaying;
