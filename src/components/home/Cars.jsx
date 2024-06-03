import React from "react";
import SingleProduct from "../shared/SingleProduct";

export default function Cars({ data }) {
  console.log(data);
  return (
    <div className="my-16">
      <h1 className="my-8 text-2xl font-bold text-center pb-5">Our Cars</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 px-16">
        {data?.slice(0, 3)?.map((car) => (
          <SingleProduct key={car?.id} car={car}></SingleProduct>
        ))}
      </div>
    </div>
  );
}
