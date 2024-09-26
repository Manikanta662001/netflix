import React from "react";
import { useNavigate } from "react-router-dom";

const CommonNav = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex justify-between items-center py-[10px] items-center mx-[1rem]">
      <li
        className="text-5xl font-bold text-header-color hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        NETFLIX
      </li>
      <li
        className="text-base font-medium hover:cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Sign In
      </li>
    </ul>
  );
};

export default CommonNav;
