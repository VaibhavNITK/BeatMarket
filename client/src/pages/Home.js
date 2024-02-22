import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-10 mx-5 px-5">
        <h1 className="my-5 text-6xl font-bold">Top Tracks</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {/* Use the map function to render Cards based on the items */}
          {/* {items.map((item) => (
            <Cards key={item.id} item={item} />
          ))} */}
        </section>
      </main>
    </>
  );
}
