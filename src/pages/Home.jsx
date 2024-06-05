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
      <Diff></Diff>
      <ClientReview></ClientReview>
      <Contact></Contact>
      <Benefits></Benefits>
    </div>
  );
}
