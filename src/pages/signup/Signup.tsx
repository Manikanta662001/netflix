import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Step1 from "../../components/steps/Step1";
import Step2 from "../../components/steps/Step2";
import Step3 from "../../components/steps/Step3";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const handleNextClick = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const {
    state: { email },
  } = useLocation();
  return (
    <>
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
      <div className="border-b"></div>
      <div
        className={`mx-auto ${
          step === 3 ? "mt-0 max-w-[60%]" : "mt-[3rem] max-w-[37%]"
        }`}
      >
        {step === 1 ? (
          <Step1 stepValue={step} email={email} />
        ) : (
          <>
            {step === 2 ? (
              <Step2 stepValue={step} />
            ) : (
              <Step3 stepValue={step} />
            )}
          </>
        )}
        <div className={`${step===3&&'w-[75%] m-auto'}`}>
          <button
            className="bg-header-color text-white w-full px-[16px] py-[8px] rounded-md hover:bg-header-hover"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
