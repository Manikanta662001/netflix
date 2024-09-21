import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { InitialVals } from "./types";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login: React.FC<{}> = (): JSX.Element => {
  const initialValues: InitialVals = { email: "", password: "" };
  const navigate = useNavigate();
  const [hidePwd, setHidePwd] = useState<boolean>(true);
  const handlevalidate = (values: InitialVals) => {
    const errors: InitialVals = {} as InitialVals;
    const { email, password } = values;
    if (!email) errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errors.email = "Invalid email address";
    if (!password) errors.password = "Required";
    else if (password.length < 6) errors.password = "Mimimum Six Characters";
    return errors;
  };

  return (
    <div className="bg-dark-grey">
      <div
        className="text-header-color text-5xl font-bold ml-[10%] hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        NETFLIX
      </div>
      <div className="max-w-[320px] m-auto">
        <h1 className="text-white mb-[1.5rem] mt-16">Sign In</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validate={(values) => handlevalidate(values)}
            onSubmit={(values) => {
              console.log("SUB::::");
            }}
          >
            <Form>
              <div className="mb-[0.8rem]">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email or mobile number"
                  className="w-full bg-dark-grey text-slate-100/30 px-[10px] py-[15px] border-[1px] border-slate-100/30 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="text-center text-error-color"
                />
              </div>
              <div className="mb-[0.8rem] relative">
                <Field
                  type={hidePwd ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="w-full bg-dark-grey text-slate-100/30 px-[10px] py-[15px] border-[1px] border-slate-100/30 rounded-md"
                />
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="text-center text-error-color"
                />
                <span
                  className="absolute text-slate-100/30 right-[3px] top-[16px]"
                  onClick={() => setHidePwd(!hidePwd)}
                >
                  {hidePwd ? (
                    <VisibilityOffIcon fontSize="medium" />
                  ) : (
                    <VisibilityIcon fontSize="medium" />
                  )}
                </span>
              </div>
              <button
                type="submit"
                className="w-full mb-[0.8rem] px-[10px] py-[8px] border-[1px] border-slate-100/30 rounded-md text-white bg-header-color"
              >
                Sign In
              </button>
              <div className="text-slate-300 text-center mb-[0.8rem]">OR</div>
              <button
                type="submit"
                className="w-full mb-[0.8rem] px-[10px] py-[8px]  rounded-md text-white bg-light-grey"
              >
                Use a sign-in code
              </button>
              <div className="text-white text-center mb-[1rem]">
                Forgot password?
              </div>
              <div className="text-md">
                <Field type="checkbox" className="mr-[1rem]" />
                <span className="text-white">Remember Me</span>
              </div>
              <div className="text-slate-300 text-sm mb-[2rem]">
                New to Netflix?{" "}
                <NavLink to={"/"} className={"text-white underline"}>
                  Sign up now.
                </NavLink>
              </div>
              <p className="text-white text-sm mb-[2rem]">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <button className="bg-white text-black px-[6px] rounded-sm">
                  Learn more.
                </button>
              </p>
              <div className="text-white text-sm">
                The information collected by Google reCAPTCHA is subject to the
                Google <a className="text-blue-600 underline">Privacy Policy</a>{" "}
                and <a className="text-blue-600 underline">Terms of Service</a>,
                and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalised advertising by Google).
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="text-slate-100/80 ml-[10%] mt-16">
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
  );
};

export default Login;
