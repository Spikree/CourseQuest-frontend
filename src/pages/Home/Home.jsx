import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <section className="home-one">
          <div className="home-one-left">
            <h1>
              Welcome to courseQuest where learning and teaching becomes reality
            </h1>
            <div className="nav-items-home">
              <ul>
                <Link to={"/login"}>Login</Link>
                <br />
                <Link to={"/signup"}>Signup</Link>
              </ul>
            </div>
          </div>

          <div className="home-one-right">
            <p>
              CourseQuest is your one-stop destination for discovering and
              sharing knowledge. Whether you're an expert looking to monetize
              your skills or a learner seeking to expand your horizons,
              CourseQuest offers a vibrant marketplace where you can buy and
              sell courses on a wide range of subjects.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
