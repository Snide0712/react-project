import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { IoAddCircle } from "react-icons/io5";
import { BsWrenchAdjustableCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function Card({ cards }) {
  const { addItem } = useShoppingCart();

  return (
    <>
      {cards &&
        cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div className="img">
                <img src={card.poster_url} alt={card.title} />
              </div>
              <div className="info">
                <p>{card.title}</p>
                <div className="lineCard">
                  <p>{card.release_year}</p>
                  <p>{card.ticket_price}$</p>
                </div>
                <div className="btns">
                  <button onClick={() => addItem(card)}>
                    <IoAddCircle size={20} />
                  </button>
                  <button>
                    <BsWrenchAdjustableCircleFill size={20} />
                  </button>
                  <button>
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Card;
