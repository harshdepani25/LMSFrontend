import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { CheackAuth } from "../redux/slice/auth.slice";

function PrivteRouet() {
  const auth = true
//   const auth = useSelector((state) => state.auth);
//   console.log("checklogin", auth?.user);

  return (
    <div>
      auth ? <Outlet /> : <Navigate to="/auth" />
    </div>
  );
}

export default PrivteRouet;