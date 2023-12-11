import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { IoAddCircle } from "react-icons/io5";
import { BsWrenchAdjustableCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Card({ cards, deleteProd }) {
  const { cartCount, cartDetails, addItem } = useShoppingCart();

  const addToCart = (card) => {
    const target = {
      id: card.id,
      title: card.title,
      synopsis: card.synopsis,
      author: card.author,
      cover: card.cover,
      pub_year: card.pub_year,
      pages: card.pages,
      cost: card.cost,
    };
    addItem(target);
  };

  return (
    <>
      <div className="cart-count">{cartCount}</div>
      {cards &&
        cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div className="info">
                <p className="title">{card.title}</p>
                <div className="lineCard">
                  <p>{card.pub_year}</p>
                  <p>{card.cost}$</p>
                </div>
                <p className="plot">{card.synopsis}</p>
              </div>
              <div className="img">
                <img src={card.cover} alt={card.title} />
              </div>
              <div className="btns">
                <button onClick={() => addToCart(card)}>
                  <IoAddCircle size={20} />
                </button>
                <button>
                  <Link to={`/Modif/${card.id}`} className="link">
                    <BsWrenchAdjustableCircleFill size={20} />
                  </Link>
                </button>
                <button>
                  <MdDelete
                    onClick={() => {
                      deleteProd(card.id);
                    }}
                    size={20}
                  />
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Card;
