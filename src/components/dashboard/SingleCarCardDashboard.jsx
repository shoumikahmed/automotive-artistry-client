import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function SingleCarCardDashboard({ car, onDelete }) {
  const { id, imageUrl, model, brand, price, description } = car;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/cars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`Car deleted`);
        onDelete(id);
      });
  };

  return (
    <div className="card w-80 bg-base-200 shadow-2xl rounded-lg mx-auto">
      <figure>
        <img className="p-4" src={imageUrl} alt="cars" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brand}</h2>
        <h3 className="text-xl font-semibold">{model}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300">
            <Link to={`/cars/${id}`}>See details</Link>
          </button>
          <button className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300">
            <Link to={`/dashboard/edit-cars/${id}`}>Edit</Link>
          </button>
          <button
            onClick={handleDelete}
            className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
