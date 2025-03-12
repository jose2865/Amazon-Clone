import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate();

  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    //is state is not there then navigate to "/auth" to login, than pass message as state.
    if (!user) {
      navigate("/auth", { state: { msg, redirect } }); //give message and redirect in the state then go to navigate/auth.
    }
  }, [user]);

  return children;
};
//payment ---> /auth (/)     .....to access payment go to auth folder and do the payment process.

export default ProtectedRoute;
