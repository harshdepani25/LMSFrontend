import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Admin/Container/Dashboard/Dashboard";
import Category from "../Admin/Container/Category/Category";
import Layout from "../Admin/Component/Layout/Layout";
import Course from "../Admin/Container/Course/Course";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../context/ThemeContext";
import Section from "../Admin/Container/Section/Section";

function AdminRouet(props) {
  const Theme = useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      mode: Theme.theme,
      primary : {
        main : "#066ac9"
      },
      secondary : {
        main : "#f7c32e"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/section" element={<Section />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default AdminRouet;
