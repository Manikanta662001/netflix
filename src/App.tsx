import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "@pages/landingPage/LandingPage";
import Login from "@pages/login/Login";
import Signup from "@pages/signup/Signup";
import ForgotPwd from "@pages/forgotpassword/ForgotPwd";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />
      </Routes>
    </div>
  );
};

export default App;
