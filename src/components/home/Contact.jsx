import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_swwue6c", "template_wtjzxcw", form.current, {
        publicKey: "wO0G5-6b21zauXBa0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://mocah.org/uploads/posts/922270-BMW-M340i-vehicle-car-low-light-Headlights-red-light.jpg)",
      }}
      className="hero h-[550px] bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="text-2xl font-semibold text-gray-300 py-6">
            "The thrill of driving a high-performance car is like no other. It's
            a true symphony of power and precision."
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm  bg-transparent">
          <h1 className="text-4xl font-bold text-center text-white">
            CONTACT FORM
          </h1>
          <form className="card-body" ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">Name</span>
              </label>
              <input
                type="Name"
                placeholder="Name"
                className="input input-bordered shadow-2xl bg-transparent text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">Email</span>
              </label>
              <input
                type="Email"
                placeholder="Email"
                className="input input-bordered shadow-2xl bg-transparent text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm  font-bold text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What can we do for you sir?"
                required
                className=" text-white shadow-2xl bg-transparent mt-1 block w-full px-3 py-2  border-red-800 rounded-md  focus:outline-none sm:text-sm"
                rows="4"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-transparent text-white hover:text-black">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
