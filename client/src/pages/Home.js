import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-10 mx-5 px-5">
        <h1 className="my-5 text-6xl font-bold">Top Tracks</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </section>
      </main>
    </>
  );
}
