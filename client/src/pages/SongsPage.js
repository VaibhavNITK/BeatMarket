import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import ListItems from "../components/ListItems";
import { List, ListItem, Card } from "@material-tailwind/react";
import SearchGenre from "../components/SearchGenre";

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

export default function SongsPage() {
  const { id } = useParams();
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
      <main className="py-10 px-8 h-screen bg-gray-200">
        <div className="flex justify-between px-7">
          <h1 className="my-5 text-6xl font-bold">Top Songs</h1>
          <SearchGenre />
        </div>

        <Card className="my-10">
          {songs.map((song) => (
            <ListItems key={song.id} song={song} />
          ))}
        </Card>
      </main>
    </>
  );
}
