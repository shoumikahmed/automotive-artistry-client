import React, { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import Contact from "../components/home/Contact";
import ClientReview from "../components/home/ClientReview";
import Diff from "../components/home/Diff";
import Benefits from "../components/home/Benefits";
import { useLoaderData } from "react-router-dom";
import Cars from "../components/home/Cars";

export default function Home() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <Banner></Banner>
      <Cars data={data}></Cars>
      {/* <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Cars</h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-6">
          {cars
            ?.reverse()
            ?.slice(0, 4)
            ?.map((car) => (
              <CarCards key={car?.id} car={car}></CarCards>
            ))}
        </div>
      </div> */}
      <Diff></Diff>
      <ClientReview></ClientReview>
      <Contact></Contact>
      <Benefits></Benefits>
    </div>
  );
}
