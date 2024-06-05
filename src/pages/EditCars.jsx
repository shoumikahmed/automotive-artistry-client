import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function EditCars() {
  const car = useLoaderData();
  const navigate = useNavigate();
  console.log(car);

  const [model, setModel] = useState(car?.model);
  const [price, setPrice] = useState(car?.price);
  const [brand, setBrand] = useState(car?.brand);
  const [description, setDescription] = useState(car?.description);
  const [imageUrl, setImageURL] = useState(car?.imageUrl);

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const model = form.model.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;

    const data = { model, brand, price, description, imageUrl };
    console.log(data);

    await fetch(`http://localhost:5000/cars/${car._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          form.reset();
          toast.success(`Successfully car's data updated`);
          navigate("/dashboard/all-cars");
        }
      });
  };

  return (
    <div className="bg-indigo-300 rounded-xl shadow-2xl w-4/6 mb-16">
      <h1 className="text-5xl font-bold text-center pt-8 text-purple-700">
        Edit Car
      </h1>

      <div className="my-16 p-12">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="brand"
              placeholder="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="model"
              placeholder="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 w-full"
              type="submit"
              value="Edit Car"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
