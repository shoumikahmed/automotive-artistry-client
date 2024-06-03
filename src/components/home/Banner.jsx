import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div
      className="hero h-[650px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Redefining the Boundaries</h1>
          <h1 className="mb-5 text-5xl font-bold">of Automotive Mastery</h1>
          <Link
            to={"/blog"}
            className="btn bg-transparent text-white hover:text-black"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
