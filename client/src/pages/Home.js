import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-10 mx-5 px-5 flex">
        <Cards />
      </main>
    </>
  );
}
