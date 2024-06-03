import React from "react";
import Banner from "../components/home/Banner";
import Contact from "../components/home/Contact";
import ClientReview from "../components/home/ClientReview";
import Diff from "../components/home/Diff";
import Benefits from "../components/home/Benefits";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Diff></Diff>
      <ClientReview></ClientReview>
      <Contact></Contact>
      <Benefits></Benefits>
    </div>
  );
}
