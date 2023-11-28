import React, { useState } from "react";
import axios from "axios";
import "./main.css";

function Add() {
  const [id, setId] = useState(4);
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: setId(id + 1),
      title: title,
      release_year: parseInt(releaseYear),
      ticket_price: parseFloat(ticketPrice),
      poster_url: posterUrl,
    };

    axios
      .post("http://localhost:5000/movies", newMovie)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        alert("Error !");
      });
  };

  return (
    <div className="addCtn">
      <h2>Add Movies</h2>
      <form onSubmit={handleSubmit}>
        <div className="line">
          <label>Titre:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="line">
          <label>Année de sortie:</label>
          <input
            type="text"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
        </div>
        <div className="line">
          <label>Prix du billet:</label>
          <input
            type="number"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
          />
        </div>
        <div className="line">
          <label>Poster:</label>
          <input
            type="text"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </div>
        <div className="line">
          {posterUrl ? <img src={posterUrl} alt="" width="70" /> : null}
        </div>
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
