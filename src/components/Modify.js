import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditMovie() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/movies/${id}`).then((res) => {
      setTitle(res.data.title);
      setReleaseYear(res.data.release_year.toString());
      setTicketPrice(res.data.ticket_price.toString());
      setPosterUrl(res.data.poster_url);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMovie = {
      id: id,
      title,
      release_year: parseInt(releaseYear),
      ticket_price: parseFloat(ticketPrice),
      poster_url: posterUrl,
    };

    axios
      .put(`http://localhost:3001/movies/${id}`, updatedMovie)
      .then((res) => {
        console.log(res);
        navigate("/movies");
      })
      .catch((error) => {
        console.log(error);
        alert("Error !");
      });
  };

  return (
      <div className="AddCtn">
        <h2>Modify Movie</h2>
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
            <label>URL de l'affiche:</label>
            <input
              type="text"
              value={posterUrl}
              onChange={(e) => setPosterUrl(e.target.value)}
            />
          </div>
          <div className="line">
            {posterUrl ? <img src={posterUrl} alt={title} width="70" /> : null}
          </div>
          <div>
            <button type="submit">Valider</button>
          </div>
        </form>
      </div>
  );
}

export default EditMovie;
