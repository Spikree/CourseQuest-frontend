import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/login /Login";
import Signup from "./pages/signup/Signup";
import { useEffect, useState } from "react";
import Main from "./pages/Main/Main";
import CoursePage from "./pages/course page/CoursePage";
import UserAccount from "./pages/user account/UserAccount";
import UserCourses from "./pages/user courses/UserCourses";
import UploadVideos from "./pages/upload videos/UploadVideos";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              email={email}
              password={password}
              name={name}
              setEmail={setEmail}
              setPassword={setPassword}
              setIsLoggedIn={setIsLoggedIn}
              setName={setName}
            />
          }
        />
        <Route path="/main" element={<Main />} />
        <Route path="/course-page" element={<CoursePage />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/all-courses" element={<UserCourses />} />
        <Route path="/upload-videos" element={<UploadVideos />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
