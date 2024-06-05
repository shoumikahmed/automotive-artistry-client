import React from "react";
import { useLoaderData } from "react-router-dom";
import Dashboard from "./Dashboard";
import toast from "react-hot-toast";

export default function EditProfile() {
  const data = useLoaderData();
  console.log("data:", data);
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    const userData = {
      name,
      age,
      mobileNumber,
    };

    fetch(`https://automotive-artistry-server.vercel.app/user/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`Successfully user's data updated`);
      });
  };

  return (
    <div className="bg-indigo-300 rounded-xl shadow-2xl w-4/6 mb-16">
      <h1 className="text-5xl font-bold text-center pt-8 text-purple-700">
        Edit Profile
      </h1>

      <div className="my-16 p-12">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="name"
              placeholder="User Name"
              defaultValue={data?.name}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="email"
              placeholder="User Email"
              defaultValue={data?.email}
              readOnly
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="number"
              name="age"
              placeholder="User Age"
              defaultValue={data?.age}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="number"
              name="mobileNumber"
              placeholder="User Mobile"
              defaultValue={data?.mobileNumber}
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 w-full"
              type="submit"
              value="Update Profile"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
