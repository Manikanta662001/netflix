import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "@components/nav/Navbar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import LandingCards from "@components/cards/LandingCards";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import {
  ClickedQuestionInterface,
  EmailInterface,
  QuestionsInterface,
} from "./types";

const questions: QuestionsInterface[] = [
  {
    headerName: "What is Netflix?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum totam, vitae officia quibusdam quidem commodi perferendis, reiciendis provident accusamus, iste veniam aliquam tempore laboriosam repellat fugit illo possimus dolores.",
  },
  {
    headerName: "How much does Netflix cost?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum totam, vitae officia quibusdam quidem commodi perferendis, reiciendis provident accusamus, iste veniam aliquam tempore laboriosam repellat fugit illo possimus dolores.",
  },
  {
    headerName: "Where can I watch?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum totam, vitae officia quibusdam quidem commodi perferendis, reiciendis provident accusamus, iste veniam aliquam tempore laboriosam repellat fugit illo possimus dolores.",
  },
  {
    headerName: "How do I cancel?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum totam, vitae officia quibusdam quidem commodi perferendis, reiciendis provident accusamus, iste veniam aliquam tempore laboriosam repellat fugit illo possimus dolores.",
  },
  {
    headerName: "What can I watch on Netflix?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum totam, vitae officia quibusdam quidem commodi perferendis, reiciendis provident accusamus, iste veniam aliquam tempore laboriosam repellat fugit illo possimus dolores.",
  },
  {
    headerName: "Is Netflix good for kids",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum totam, vitae officia quibusdam quidem commodi perferendis, reiciendis provident accusamus, iste veniam aliquam tempore laboriosam repellat fugit illo possimus dolores.",
  },
];
const LandingPage: React.FC<{}> = (): JSX.Element => {
  const initialValues: EmailInterface = { email: "" };
  const [clickedQuestion, setClickedQuestion] =
    useState<ClickedQuestionInterface>({
      index: null,
      answer: "",
    });
  const navigate = useNavigate();
  const handleValidate = (values: EmailInterface) => {
    const errors = {} as EmailInterface;
    const { email } = values;
    if (!email) errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errors.email = "Invalid email address";
    console.log(errors);
    return errors;
  };
  const handleQuestionClick = (ind: number) => {
    if (ind !== clickedQuestion.index) {
      setClickedQuestion({ index: ind, answer: questions[ind].text });
    } else {
      setClickedQuestion({ index: null, answer: "" });
    }
  };
  return (
    <div>
      <div className="landing-page min-h-[100vh] mb-[3rem] relative">
        <Navbar />
        <div className="min-h-[80vh] mt-[100px] text-center text-white">
          <h1 className="xs:text-[2rem] sm:text-[3.5rem]">
            Unlimited movies, TV
          </h1>
          <h1 className="xs:text-[2rem] sm:text-[3.5rem] mb-[1rem]">
            shows and more
          </h1>
          <p className="xs:text-[0.9rem] sm:text-[1.5rem] font-medium mb-[2rem]">
            Starts at ₹149. Cancel anytime.
          </p>
          <p className="mb-[1rem] xs:text-sm sm:text-base">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <Formik
            initialValues={initialValues}
            validate={(values) => handleValidate(values)}
            onSubmit={(values) => {
              navigate("/signup", { state: { email: values.email } });
            }}
          >
            <Form>
              <div className="flex flex-col items-center">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email or mobile number"
                  className="bg-dark-grey text-slate-100/30 sm:w-[500px] w-[70%] px-[7px] py-[7px] sm:px-[10px] sm:py-[15px] border-[1px] border-slate-100/30 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="text-center text-error-color"
                />
              </div>
              <button
                type="submit"
                className="mt-[1rem] mb-[5rem] text-[1.5rem] bg-header-color px-[16px] py-[8px] rounded-md hover:bg-header-hover"
              >
                Get Started
                <ChevronRightIcon fontSize="large" className="align-text-top" />
              </button>
            </Form>
          </Formik>
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
            <div className="flex w-[82%] flex-wrap">
              <div
                className="flex w-[100%] bg-dark-grey border-b-2 text-white p-[20px] justify-between items-center hover:cursor-pointer hover:bg-blue-800"
                onClick={() => handleQuestionClick(index)}
              >
                <h3>{question.headerName}</h3>
                {clickedQuestion?.index === index ? <CloseIcon /> : <AddIcon />}
              </div>
              {clickedQuestion?.index === index && (
                <div className="w-[100%] bg-light-grey text-white py-[5px]">
                  <p className="w-[95%] text-justify m-auto">
                    {clickedQuestion.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="bg-light-grey w-[82%] m-auto">
        <div className="text-slate-100/80 ml-[10%] mt-6">
          Questions? Call 000-800-919-1694
        </div>
        <ul className="flex flex-wrap text-slate-100/80 underline ml-[10%]">
          <li className="w-[50%] sm:w-[30%] mb-[0.7rem]">FAQ</li>
          <li className="w-[50%] sm:w-[30%] mb-[0.7rem]">Help Center</li>
          <li className="w-[50%] sm:w-[30%] mb-[0.7rem]">Terms of Use</li>
          <li className="w-[50%] sm:w-[30%] mb-[0.7rem]">Privacy</li>
          <li className="w-[50%] sm:w-[30%] mb-[0.7rem]">Cookie Preferences</li>
          <li className="w-[50%] sm:w-[30%] mb-[0.7rem]">
            Corporate Information
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
