import CommonNav from "@components/nav/CommonNav";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { ForgotVal, PwdFiledsFormikInterface } from "./types";
import PwdFields from "./PwdFields";

const otpLength: number = 6;
const ForgotPwd = () => {
  const initialValues: ForgotVal = { email: "" };
  const [otp, setOtp] = useState<string[]>(Array(otpLength).fill(""));
  const [step, setStep] = useState<string>("email");
  const [randomOTP, setRandomOTP] = useState<string>("");
  const [otpMessage, setOtpMessage] = useState({ sentMsg: "", errMsg: "" });
  console.log(otp);
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    ind: number
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[ind] = value;
      setOtp(newOtp);
      if (value && ind < otpLength - 1) {
        const nextInput = document.getElementById(`otp-input-${ind + 1}`);
        nextInput?.focus();
      }
    }
  };
  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    ind: number
  ) => {
    if (e.key === "Backspace") {
      if (otp[ind] === "" && ind > 0) {
        const prevInput = document.getElementById(`otp-input-${ind - 1}`);
        prevInput?.focus();
      }
    }
  };
  const handlevalidate = (values: ForgotVal) => {
    const errors: ForgotVal = {} as ForgotVal;
    const { email } = values;
    if (!email) errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errors.email = "Invalid email address";
    return errors;
  };
  const handleChangePwd = (vals: PwdFiledsFormikInterface) => {
    console.log("FINAL::::", vals);
  };
  return (
    <div className="bg-dark-grey min-h-[96vh]">
      <CommonNav />
      <div className="text-white">{randomOTP}</div>
      <div className="max-w-[320px] m-auto">
        <h1 className="text-white mb-[1.5rem] mt-16">Forgot Password</h1>
        {step !== "pwd" && (
          <Formik
            initialValues={initialValues}
            validate={(values) => handlevalidate(values)}
            onSubmit={(values) => {
              if (step === "email") {
                const randomOtp = Math.floor(
                  Math.random() * 1000000
                ).toString();
                setRandomOTP(randomOtp);
                console.log("SUB::::", randomOtp);
                setStep("otp");
                setOtpMessage({
                  ...otpMessage,
                  sentMsg: "Otp Sent to Your Mail",
                });
              } else if (step === "otp") {
                if (otp.join("") === randomOTP) {
                  setOtpMessage({
                    ...otpMessage,
                    sentMsg: "",
                    errMsg: "",
                  });
                  setStep("pwd");
                } else {
                  setOtpMessage({
                    ...otpMessage,
                    errMsg: "Invalid Otp",
                  });
                }
              }
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
                {otpMessage.sentMsg && (
                  <p className="text-center text-green-500">
                    {otpMessage.sentMsg}
                  </p>
                )}
              </div>
              {step !== "email" && (
                <>
                  <div className="flex gap-[5px] mb-[1rem] justify-between">
                    {otp.map((_, index) => {
                      return (
                        <input
                          type="text"
                          id={`otp-input-${index}`}
                          value={otp[index]}
                          disabled={step == "pwd"}
                          onChange={(e) => handleOtpChange(e, index)}
                          onKeyDown={(e) => handleOtpKeyDown(e, index)}
                          className="basis-[10px] text-center text-xl max-w-[15%] p-[5px] bg-dark-grey text-slate-100/30 px-[10px] py-[15px] border-[1px] border-slate-100/30 rounded-md"
                        />
                      );
                    })}
                  </div>
                  {otpMessage.errMsg && (
                    <div className="text-center text-red-500">
                      {otpMessage.errMsg}
                    </div>
                  )}
                </>
              )}

              <button
                type="submit"
                className="w-full mb-[0.8rem] px-[10px] py-[8px] border-[1px] border-slate-100/30 rounded-md text-white bg-header-color"
              >
                Reset Password
              </button>
            </Form>
          </Formik>
        )}
        {step === "pwd" && <PwdFields handleChangePwd={handleChangePwd} />}
      </div>
    </div>
  );
};

export default ForgotPwd;
