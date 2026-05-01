import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivteRouet from "./PrivteRouet";
import NotFound from "../container/NotFound/NotFound";
import Auth from "../container/Auth/Auth.jsx";
import Header from "../components/Header/Header.jsx";
import Home from "../container/Home/Home.jsx";
import Footer from "../components/Footer/Footer.jsx";
import InstructorDashboard from "../container/InstructorDashboard/InstructorDashboard.jsx";
import { CheackAuth } from "../redux/slice/auth.slice.js";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../context/ThemeContext.jsx";
import Category from "../container/Category/Category.jsx";
import Course from "../container/Course/Course.jsx";
import BlogDetail from "../container/BlogDetail/BlogDetail.jsx";
import CourseDetails from "../container/Course/CourseDetails.jsx";
import Quiz from "../container/Quiz/Quiz.jsx";
import CourseVideoPlayer from "../container/Course/CourseVideoPlayer.jsx";

function UserRouter() {
  const themedata = useContext(ThemeContext);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CheackAuth());
  }, []);

  return (
    <div className={themedata.theme === "light" ? "dark" : "light"}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/:logtype" element={<Auth />} />

        <Route path="/category" element={<Category />} />
        <Route path="/category/:_id" element={<Category />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:_id" element={<Course />} />
        <Route path="/course-details/:_id" element={<CourseDetails />} />

        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/quiz/:_id" element={<Quiz />} />

        <Route path="*" element={<NotFound />} />

        <Route element={<PrivteRouet />}>
          <Route
            path="/course-video-player/:_id"
            element={<CourseVideoPlayer />}
          />
          <Route
            path="/instructor-dashboard"
            element={<InstructorDashboard />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default UserRouter;
