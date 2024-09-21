import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Step1 from "../../components/steps/Step1";
import Step2 from "../../components/steps/Step2";
import Step3 from "../../components/steps/Step3";
import CommonNav from "../../components/nav/CommonNav";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number>(0);
  const handlePayment = (amount: number, currency: string) => {
    const options = {
      key: "rzp_test_MqjIHqND1Uol58", // Replace with your Razorpay key
      amount: amount * 100, // Razorpay amount is in paise, so multiply by 100
      currency: currency,
      name: "Netflix subscription",
      description: "Payment for Subscription",
      handler: function (response: any) {
        // Handle the successful payment
        console.log("Payment successful!", response);
      },
      modal: {
        onDismiss: function () {
          // This callback will be called when the payment modal is closed
          console.log("Payment modal closed");
        },
        onFailure: function (response: any) {
          // Handle payment failure
          console.log("Payment failed!", response);
          alert("Payment failed! Please try again.");
          // You can also implement further logic here, like redirecting or retrying
        },
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  console.log("AMO::", amount);
  const handleNextClick = () => {
    if (step === 3) {
      handlePayment(amount, "INR");
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const {
    state: { email },
  } = useLocation();
  return (
    <>
      <CommonNav />
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
              <Step3 stepValue={step} setAmount={setAmount} />
            )}
          </>
        )}
        <div className={`${step === 3 && "w-[75%] m-auto"}`}>
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
