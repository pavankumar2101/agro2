
import React, { useEffect, useState } from "react";

const CartList = ({ cart }) => {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="cart">
      {CART?.map((cartItem, cartIndex) => {
        return (
          <div className="cart-item">
            <img src={cartItem.img} alt="" width={60} />
            <span>{cartItem.name}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartIndex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span>Rs.{cartItem.price * cartItem.quantity}/-</span>
          </div>
        );
      })}
      <p>
        {" "}
        Total : Rs.<span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
    </div>
  );
};

export default CartList;

