import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>CourseQuest</h1>
        </div>

        <div className="nav-items">
          <ul>
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
