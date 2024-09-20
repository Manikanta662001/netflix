import React, { useState } from "react";
import { Step1Props } from "./types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Step1: React.FC<Step1Props> = ({ stepValue, email }): JSX.Element => {
  const [hidePwd, setHidePwd] = useState<boolean>(true);
  return (
    <>
      <span>STEP {stepValue} OF 3</span>
      <h2>Welcome back!</h2>
      <h2>Joining Netflix is easy.</h2>
      <p className="mb-[1rem]">
        Enter your password and you'll be watching in no time.
      </p>
      <p>Email</p>
      <p className="mb-[1rem]">
        <b>{email}</b>
      </p>
      <div className="relative">
        <input
          type={hidePwd ? "password" : "text"}
          name=""
          id=""
          placeholder="Enter your password"
          className="w-[100%] px-[10px] py-[15px] mb-[1rem] border-[1px] border-inherit rounded-md focus:outline-0"
        />
        <span
          className="absolute text-slate-600/40 right-[3px] top-[16px] hover:cursor-pointer"
          onClick={() => setHidePwd(!hidePwd)}
        >
          {hidePwd ? (
            <VisibilityOffIcon fontSize="medium" />
          ) : (
            <VisibilityIcon fontSize="medium" />
          )}
        </span>
      </div>
      <p className="text-cyan-400 mb-[1rem] hover:cursor-pointer">
        Forgot your password?
      </p>
    </>
  );
};

export default Step1;
