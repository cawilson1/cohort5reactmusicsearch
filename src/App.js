import React, { useState, useEffect } from "react";
import axios from "axios";

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
  console.log(searchInput);

  return (
    <div>
      <input onChange={event => setSearchInput(event.target.value)} />
      {songs.map((song, index) => (
        <div key={index}>{song.trackName}</div>
      ))}
    </div>
  );
}

export default App;
