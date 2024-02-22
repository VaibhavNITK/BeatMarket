// import { createContext, useContext, useState } from "react";

// const SongContext = createContext();

// function SongProvider({ children }) {
//   const [albums, setAlbums] = useState([]);
  
  

//   return (
//     <SongContext.Provider
//       value={{
//         songs: searchedSongs,
//         onAddSong: handleAddSong,
//         onClearSongs: handleClearSongs,
//         searchQuery,
//         setSearchQuery,
//       }}
//     >
//       {children}
//     </SongContext.Provider>
//   );
// }

// function useSongs() {
//   const context = useContext(SongContext);
//   if (context === undefined)
//     throw new Error("This context was used outside the AuthProvider.");

//   return context;
// }

// export { SongProvider, useSongs };
