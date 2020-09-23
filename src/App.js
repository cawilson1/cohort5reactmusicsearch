import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import SongCard from "./components/SongCard";

function App() {
  const [songs, setSongs] = useState([]);
  const [searchInput, setSearchInput] = useState("nickelback");
  useEffect(() => {
    async function fetchSongs() {
      try {
        const result = await axios.get(
          `https://itunes.apple.com/search?term=${searchInput}`
        );
        const songsArray = result.data.results;
        console.log(songsArray);
        setSongs(songsArray);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSongs();
  }, [searchInput]);
  console.log(songs);

  return (
    <div>
      <Navbar setSearchInput={setSearchInput} />
      {/* <input onChange={event => setSearchInput(event.target.value)} /> */}
      {songs.map((song, index) => (
        <SongCard elevation={15} key={index} song={song} />
      ))}
    </div>
  );
}

export default App;
