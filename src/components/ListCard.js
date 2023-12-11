// ListCard.js

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./main.css";

function ListCard() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/novels")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCards(response.data);
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const deleteProd = async (id) => {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }

    axios
      .delete("http://localhost:5000/novels/" + id)
      .then(() => {
        console.log("successfully deleted!");
        setCards((prevNovels) => prevNovels.filter((card) => card.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const cardsF = cards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="listCards">
      <div className="line">
        <p>Sort by </p>
        <button>Title</button>
        <button>Year</button>
        <button>Cost</button>
        <p className="search">Search</p>
        <input
          className="input1"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="cards">
        <Card cards={cardsF} deleteProd={deleteProd} />
      </div>
    </div>
  );
}

export default ListCard;
