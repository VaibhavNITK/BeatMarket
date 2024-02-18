import React from "react";
import Navbar from "../components/Navbar";
import { Card } from "@material-tailwind/react";
import ListItems from "../components/ListItems";
import Demo from "./Demo";

const songs = [
  {
    id: 1,
    title: "Song1",
    releaseDate: "abcd",
    likes: "123",
    price: "$12",
  },
  {
    id: 2,
    title: "Song2",
    releaseDate: "abcd",
    likes: "123",
    price: "$12",
  },
  {
    id: 3,
    title: "Song3",
    releaseDate: "abcd",
    likes: "123",
    price: "$20",
  },
];

export default function Profile() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-10 mx-5 px-5">
        <h1 className="my-5 text-6xl font-bold">My Songs</h1>

        <Card className="my-10">
          {songs.map((song) => (
            <ListItems key={song.id} song={song} />
          ))}
        </Card>

        <Demo />
      </main>
    </>
  );
}
