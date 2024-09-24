import React from "react";
import { Step2Props } from "./types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Step2: React.FC<Step2Props> = ({ stepValue }): JSX.Element => {
  return (
    <div className="text-center">
      <CheckCircleOutlineIcon fontSize="large" className="text-header-color" />
      <p>STEP {stepValue} OF 3</p>
      <h2 className="mb-[1rem]">Choose your plan.</h2>
      <ul className="list-none">
        <li className="mb-2 before:content-['\2713'] before:mr-2 before:text-red-500">
          No commitments, cancel anytime.
        </li>
        <li className="mb-2 before:content-['\2713'] before:mr-2 before:text-red-500">
          Everything on Netflix for one low price.
        </li>
        <li className="mb-2 before:content-['\2713'] before:mr-2 before:text-red-500">
          No ads and no extra fees,ever.
        </li>
      </ul>
    </div>
  );
};

export default Step2;
