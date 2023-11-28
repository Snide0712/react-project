import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useNavigate } from "react-router-dom";
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import "./main.css";

const Cart = () => {
  const {
    cartDetails,
    removeItem,
    clearCart,
    totalPrice,
    cartCount,
    incrementItem,
    decrementItem,
  } = useShoppingCart();
  const navigate = useNavigate();

  const commander = () => {
    navigate("/");
  };

  const clear = () => {
    clearCart();
  };

  if (cartCount === 0) return <h1 className="empty">(◕‿◕)</h1>;

  return (
    <div className="container">
      <div className="cards2">
        {cartDetails &&
          Object.values(cartDetails).map((item) => (
            <div className="card" key={item.id}>
              <div className="img">
                <img alt={item.title} src={item.poster_url} />
              </div>
              <div className="info">
                <h5>{item.title}</h5>
                <p>
                  Price:
                  {item.ticket_price
                    ? item.ticket_price.toFixed(2) + " $"
                    : "Price not available"}
                </p>
                <p>Tickets: {item.quantity}</p>
                <div className="line">
                  <button
                    onClick={() => {
                      incrementItem(item.id);
                    }}
                  >
                    <FaPlusCircle size={15} />{" "}
                  </button>
                  <button onClick={() => decrementItem(item.id)}>
                    <FaCircleMinus size={15} />{" "}
                  </button>

                  {item.quantity === 1 && (
                    <button onClick={() => removeItem(item.id)}>
                      <TiDelete size={23} />{" "}
                    </button>
                  )}
                </div>
              </div>{" "}
            </div>
          ))}
      </div>
      <div className="sideBar">
        <button onClick={commander}>Add More Movies</button>
        <p>In Total</p>
        <h3>{cartCount}</h3>
        <p>Total Payement</p>
        <h3>{totalPrice} $</h3>
          <button onClick={commander}>Order</button>
          <button onClick={clear}>Cancel</button>
      </div>
    </div>
  );
};

export default Cart;
