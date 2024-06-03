import React, { useEffect, useState } from "react";
import SingleCarCardDashboard from "../components/dashboard/SingleCarCardDashboard";

export default function AllCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car?.id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
        All Cars
      </h1>
      <div className="my-16 flex flex-wrap gap-6 px-10">
        {cars?.map((car) => (
          <SingleCarCardDashboard
            key={car?.id}
            car={car}
            onDelete={handleDeleteCar}
          ></SingleCarCardDashboard>
        ))}
      </div>
    </div>
  );
}
