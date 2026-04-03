import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivteRouet from "./PrivteRouet";
import NotFound from "../container/NotFound/NotFound";
import Auth from "../container/Auth/Auth.jsx";
import Header from "../components/Header/Header.jsx";
import Home from "../container/Home/Home.jsx"
import Footer from "../components/Footer/Footer.jsx"
import InstructorDashboard from "../container/InstructorDashboard/InstructorDashboard.jsx"
import { CheackAuth } from "../redux/slice/auth.slice.js";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../context/ThemeContext.jsx";
import Category from "../container/Category/Category.jsx";
import Course from "../container/Course/Course.jsx";
import BlogDetail from "../container/BlogDetail/BlogDetail.jsx";

function UserRouter() {
  const themedata = useContext(ThemeContext);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CheackAuth());
  }, []);
  return (
    <div className={themedata.theme === 'light' ? 'dark' : 'light'}>
      <Header />
      
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/:logtype" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog-detail" element={<BlogDetail /> } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default UserRouter;
