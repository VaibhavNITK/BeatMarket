import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import ListItems from "../components/ListItems";
import { List, ListItem, Card } from "@material-tailwind/react";

const songs = [
  {
    id: 1,
    title: "abc",
    releaseDate: "abcd",
    likes: "123",
    price: "$12",
  },
  {
    id: 2,
    title: "abc",
    releaseDate: "abcd",
    likes: "123",
    price: "$12",
  },
];

export default function SongsPage() {
  //const [searchParams] = useSearchParams();
  //const producerName = searchParams.get("producer");

  //const [songs, setSongs] = useState({});

  // useEffect(() => {
  //   const fetchSongs = async () => {
  //     try {
  //       const response = await axios.get(`/api/songs?producer=${producerName}`);
  //       setSongs(response.data);
  //     } catch (error) {
  //       console.error("Error fetching songs:", error);
  //     }
  //   };

  //   fetchSongs();
  // }, [producerName]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-10 mx-5 px-5">
        <h1 className="my-5 text-6xl font-bold">Top Songs</h1>

        <Card className="my-10">
          {songs.map((song) => (
            <ListItems key={song.id} song={song} />
          ))}
        </Card>
      </main>
    </>
  );
}
