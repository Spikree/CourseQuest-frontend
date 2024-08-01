import "./Footer.css";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="first-row">
          <div className="f-row-left">
            <h3>
              Teach the skill you know to the world, learn skills you want to
              learn
            </h3>
            <p>Create online video courses, help people learn, earn money</p>
          </div>

          <div className="f-row-right">
            <li>Start teaching & learning</li>
          </div>
        </div>

        <div className="second-row">
          <div className="column-1">
            <ul>
              <li>courseQuest</li>
              <li>for developers by developers</li>
              <li>Avi Mahalingpure</li>
              <div className="connections">
                <VscGithubInverted />
                <FaLinkedin />
              </div>
            </ul>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
