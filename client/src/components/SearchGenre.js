import React from "react";
import { useSongs } from "../contexts/SongContext";

export default function SearchGenre() {
  const { searchQuery, setSearchQuery } = useSongs();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search genre..."
    />
  );
}
