import React from "react";
import { Link } from "react-router-dom";

export default function SingleProduct({ car }) {
  const { _id, imageUrl, model, brand, price } = car;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Model: {model}</h2>
        <h2 className="card-title">Brand: {brand}</h2>
        <p></p>
        <div className="card-actions justify-between">
          <button className="btn bg-transparent border-none text-white hover:text-yellow-400 hover:bg-transparent">
            Price: ${price}
          </button>
          <Link
            to={`/cars/${_id}`}
            className="btn bg-transparent text-white hover:text-black"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
