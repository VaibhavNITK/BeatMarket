import { createContext, useContext, useState } from "react";

const SongContext = createContext();

function SongProvider({ children }) {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchedSongs =
    searchQuery.length > 0
      ? songs.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : songs;

  function handleAddSong(song) {
    //add song to the list of songs(pending)
    setSongs((songs) => [song, ...songs]);
  }

  function handleClearSongs() {
    setSongs([]);
  }

  return (
    <SongContext.Provider
      value={{
        songs: searchedSongs,
        onAddSong: handleAddSong,
        onClearSongs: handleClearSongs,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

function useSongs() {
  const context = useContext(SongContext);
  return context;
}

export { SongProvider, useSongs };
