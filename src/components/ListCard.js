import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./main.css";
function ListCard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((response) => {
        if (response.data && response.data) {
          setCards(response.data);
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="cards">
      <Card cards={cards} />
    </div>
  );
}

export default ListCard;
