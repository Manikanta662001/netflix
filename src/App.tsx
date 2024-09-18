import React from "react";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  return (
    <div>
      <div className="landing-page min-h-[100vh] mb-[1rem]">
        <ul className="flex justify-around py-[10px] items-center">
          <li className="text-5xl font-bold text-header-color ml-[-80px]">
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
            <button className="bg-header-color text-white px-[20px] py-[5px] rounded-md hover:bg-header-hover">
              Sign In
            </button>
          </li>
        </ul>
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
              className="bg-dark-grey text-slate-100/30 min-w-[500px] px-[10px] py-[15px] border-[1px] border-slate-100/30 rounded-md"
            />
            <button className="mt-[1rem] text-[1.5rem] bg-header-color px-[16px] py-[8px] rounded-md hover:bg-header-hover">
              Get Started
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
      <div className="flex flex-wrap gap-4 justify-center mb-[2rem] cards-container">
        <div className="basis-[19.5%] bg-card-color rounded-2xl px-[10px] py-[15px]">
          <h5 className="text-white">Enjoy on your TV</h5>
          <p className="text-slate-100/60">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="basis-[19.5%] bg-card-color rounded-2xl px-[10px] py-[15px]">
          <h5 className="text-white">Download your shows to watch offline</h5>
          <p className="text-slate-100/60">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div className="basis-[19.5%] bg-card-color rounded-2xl px-[10px] py-[15px]">
          <h5 className="text-white">Watch everywhere</h5>
          <p className="text-slate-100/60">
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </p>
        </div>
        <div className="basis-[19.5%] bg-card-color rounded-2xl px-[10px] py-[15px]">
          <h5 className="text-white">Create profiles for kids</h5>
          <p className="text-slate-100/60">
            Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        <div className="flex w-[82%] bg-dark-grey text-white p-[20px] justify-between items-center">
          <h3>What is Netflix?</h3>
          <AddIcon />
        </div>
        <div className="flex w-[82%] bg-dark-grey text-white p-[20px] justify-between items-center">
          <h3>How much does Netflix cost?</h3>
          <AddIcon />
        </div>
        <div className="flex w-[82%] bg-dark-grey text-white p-[20px] justify-between items-center">
          <h3>Where can I watch?</h3>
          <AddIcon />
        </div>
        <div className="flex w-[82%] bg-dark-grey text-white p-[20px] justify-between items-center">
          <h3>How do I cancel?</h3>
          <AddIcon />
        </div>
        <div className="flex w-[82%] bg-dark-grey text-white p-[20px] justify-between items-center">
          <h3>What can I watch on Netflix?</h3>
          <AddIcon />
        </div>
        <div className="flex w-[82%] bg-dark-grey text-white p-[20px] justify-between items-center">
          <h3>Is Netflix good for kids</h3>
          <AddIcon />
        </div>
      </div>
    </div>
  );
};

export default App;
