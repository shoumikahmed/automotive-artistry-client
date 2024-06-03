import React from "react";
import { useLoaderData } from "react-router-dom";

export default function CarDetails() {
  const car = useLoaderData();
  console.log(car);

  const { imageUrl, model, brand, price, description } = car;

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-16 mx-auto">
      <figure>
        <img src={imageUrl} alt="cars" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline btn-sm">${price}</div>
          <div className="badge badge-outline btn-sm">{brand}</div>
        </div>
      </div>
    </div>
  );
}
