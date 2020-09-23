import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    async function fetchSongs() {
      try {
        const result = await axios.get(
          "https://itunes.apple.com/search?term=beatles"
        );
        const songsArray = result.data.results;
        console.log(songsArray);
        setSongs(songsArray);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSongs();

    // axios
    //   .get("https://itunes.apple.com/search?term=beatles")
    //   .then(response => {
    //     console.log(response);
    //     console.log(response.data);
    //     console.log(response.data.results);
    //     setSongs(response.data.results);
    //   })
    //   .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {songs.map((song, index) => (
        <div key={index}>{song.collectionName}</div>
      ))}
    </div>
  );
}

export default App;
