import React, { useEffect, useState } from "react";
import { PlansInterface, Step1Props } from "./types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const plans: PlansInterface[] = [
  {
    name: "Mobile",
    pixels: "480p",
    monthly_price: "₹199",
    quality: "Good",
    supported_devices: "mobile phone",
    no_of_devices: 1,
    download_devices: 1,
  },
  {
    name: "Basic",
    pixels: "720p",
    monthly_price: "₹399",
    quality: "Ok",
    supported_devices: "mobile phone, tablet",
    no_of_devices: 1,
    download_devices: 1,
  },
  {
    name: "Standard",
    pixels: "1080p",
    monthly_price: "₹599",
    quality: "Good",
    supported_devices: "Tv, computer, mobile phone, tablet",
    no_of_devices: 2,
    download_devices: 2,
  },
  {
    name: "Premium",
    pixels: "4k + HDR",
    monthly_price: "₹999",
    quality: "Excellent",
    supported_devices: "Tv, computer, mobile phone, projectors",
    no_of_devices: 4,
    download_devices: 4,
  },
];
const Step3: React.FC<Step1Props> = ({ stepValue, setAmount }): JSX.Element => {
  const [selectedPlan, setSelectedPlan] = useState<PlansInterface>(plans[1]);
  useEffect(() => {
    console.log(selectedPlan);
    if (selectedPlan && setAmount) {
      setAmount(Number(selectedPlan?.monthly_price.slice(1)));
    }
  }, [selectedPlan]);
  return (
    <>
      <span>STEP {stepValue} OF 3</span>
      <h2 className="tracking-wide mb-[2rem]">
        Choose the plan that's right for your interest
      </h2>
      <div className="flex sm:flex-nowrap sm:gap-[5px] flex-wrap gap-[2px] w-[100%] min-h-[100px] mb-[1rem]">
        {plans.map((plan) => {
          return (
            <div
              className={`sm:basis-[25%] basis-[49%] border-[1px] border-inherit rounded-md p-[5px] hover:cursor-pointer hover:bg-blue-600/60 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-indigo-500 duration-300 ${
                selectedPlan.name === plan.name &&
                "bg-dark-blue text-white relative"
              }`}
              onClick={() => setSelectedPlan(plan)}
            >
              <b>{plan.name}</b>
              <p>{plan.pixels}</p>
              {selectedPlan.name === plan.name && (
                <CheckCircleIcon className="absolute bottom-1 right-1 text-green-400" />
              )}
            </div>
          );
        })}
      </div>
      <>
        <div className="flex justify-between border-b pb-[0.5rem] mb-[0.5rem]">
          <div className="basis-[50%]">Monthly price</div>
          <div>{selectedPlan.monthly_price}</div>
        </div>
        <div className="flex justify-between border-b pb-[0.5rem] mb-[0.5rem]">
          <div className="basis-[50%]">Video and sound quality</div>
          <div>{selectedPlan.quality}</div>
        </div>
        <div className="flex justify-between border-b pb-[0.5rem] mb-[0.5rem]">
          <div className="basis-[50%]">Resolution</div>
          <div>{selectedPlan.pixels}</div>
        </div>
        <div className="flex justify-between border-b pb-[0.5rem] mb-[0.5rem]">
          <div className="basis-[50%]">Supported devices</div>
          <div>{selectedPlan.supported_devices}</div>
        </div>
        <div className="flex justify-between border-b pb-[0.5rem] mb-[0.5rem]">
          <div className="basis-[50%]">
            Devices your household can watch at the same time
          </div>
          <div>{selectedPlan.no_of_devices}</div>
        </div>
        <div className="flex justify-between border-b pb-[0.5rem] mb-[0.5rem]">
          <div className="basis-[50%]">Download devices</div>
          <div>{selectedPlan.download_devices}</div>
        </div>
      </>
      <p className="mb-[1rem]">
        HD (720p), Full HD (1080p), Ultra HD (4k) and HDR availability subject
        to your internet dervice and device capabilities. Not all content is
        available in all resolutions. See our Terms of Use for more details.
      </p>
      <p className="mb-[1rem]">
        Only people who live with you may use your account. Watch on a different
        devices at the same time with Premium , 2 with Standard, and 1 with
        Basic and Mobile.
      </p>
    </>
  );
};

export default Step3;
