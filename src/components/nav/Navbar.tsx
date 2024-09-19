import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar:React.FC<{}> = ():JSX.Element => {
  const navigate = useNavigate();
  return (
    <ul className="flex justify-around py-[10px] items-center">
      <li className="text-5xl font-bold text-header-color sm:ml-[-80px] xs:ml-[0px]">
        NETFLIX
      </li>
      <li>
        <select
          name=""
          id=""
          className="w-[120px] bg-dark-grey text-white px-[20px] py-[5px] mr-[10px] rounded-md"
        >
          <option value="English">English</option>
        </select>
        <button
          className="bg-header-color text-white px-[20px] py-[5px] rounded-md hover:bg-header-hover"
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
