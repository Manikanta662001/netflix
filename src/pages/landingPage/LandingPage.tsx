import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../../components/nav/Navbar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LandingCards from "../../components/cards/LandingCards";

const questions = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids",
];
const LandingPage: React.FC<{}> = (): JSX.Element => {
  return (
    <div>
      <div className="landing-page min-h-[100vh] mb-[3rem] relative">
        <Navbar />
        <div className="min-h-[80vh] mt-[100px] text-center text-white">
          <h1 className="text-[3.5rem]">Unlimited movies, TV</h1>
          <h1 className="text-[3.5rem] mb-[1rem]">shows and more</h1>
          <p className="text-[1.5rem] font-medium mb-[2rem]">
            Starts at ₹149. Cancel anytime.
          </p>
          <p className="mb-[1rem]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col items-center">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="bg-dark-grey text-slate-100/30 sm:w-[500px] w-[100%] px-[10px] py-[15px] border-[1px] border-slate-100/30 rounded-md"
            />
            <button className="mt-[1rem] mb-[5rem] text-[1.5rem] bg-header-color px-[16px] py-[8px] rounded-md hover:bg-header-hover">
              Get Started
              <ChevronRightIcon fontSize="large" className="align-text-top" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-[-20px] left-[20%] w-[60%] py-[0.8rem] rounded-xl text-white bg-dark-blue hidden lg:flex lg:justify-between lg:items-center">
          <div className="basis-[50%] ml-[2.5rem]">
            <div className="text-[20px]">
              The Netflix you love for just $6.99.
            </div>
            <div className="text-[15px]">
              Get our most affordable, ad-supported plan.
            </div>
          </div>
          <div className="basis-[15%] mr-[2.3rem]">
            <button className="bg-light-grey rounded-md px-[5px] py-[7px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="mb-[1rem]">
        <select
          name=""
          id=""
          className="w-[100px] bg-light-grey text-white p-[10px] mr-[10px] rounded-md"
        >
          <option value="English">India</option>
        </select>
        <select
          name=""
          id=""
          className="w-[100px] bg-light-grey text-white p-[10px] mr-[10px] rounded-md"
        >
          <option value="English">Movies</option>
        </select>
      </div>
      <LandingCards />
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        {questions.map((question, index) => {
          return (
            <>
              <div className="flex w-[82%] bg-dark-grey text-white p-[20px] justify-between items-center">
                <h3>{question}</h3>
                <AddIcon />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
