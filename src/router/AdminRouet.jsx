import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Admin/Container/Dashboard/Dashboard";
import Category from "../Admin/Container/Category/Category";
import Layout from "../Admin/Component/Layout/Layout";
import Course from "../Admin/Container/Course/Course";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../context/ThemeContext";
import Section from "../Admin/Container/Section/Section";
import Quiz from "../Admin/Container/Quiz/Quiz";
import QuizContent from "../Admin/Container/Quiz/QuizContent";
import Content from "../Admin/Container/Content/Content";
import PrivteRouet from "./PrivteRouet";

function AdminRouet(props) {
  const Theme = useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      mode: Theme.theme,
      primary: {
        main: "#066ac9",
      },
      secondary: {
        main: "#f7c32e",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route element={<PrivteRouet />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/course" element={<Course />} />
            <Route path="/section" element={<Section />} />
            <Route path="/content" element={<Content />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz-content/:_id" element={<QuizContent />} />
          </Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default AdminRouet;
