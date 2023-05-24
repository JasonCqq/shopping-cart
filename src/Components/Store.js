import "../Styles/Store.css";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import hatImage from "../Images/pexels-marcus-murphy-1878821.jpg";

const Store = () => {
  const [item, setItem] = useState([
    {
      name: "The Biggest Cap",
      price: "100",
      image: hatImage,
      quantity: 0,
      inCart: false,
    },

    {
      name: "The Smallest Cap",
      price: "90",
      image: hatImage,
      quantity: 0,
      inCart: false,
    },

    {
      name: "The Weirdest Cap",
      price: "80",
      image: hatImage,
      quantity: 0,
      inCart: false,
    },

    {
      name: "The Only Cap",
      price: "70",
      image: hatImage,
      quantity: 0,
      inCart: false,
    },

    {
      name: "The Cap",
      price: "60",
      image: hatImage,
      quantity: 0,
      inCart: false,
    },

    {
      name: "The Cappington",
      price: "50",
      image: hatImage,
      quantity: 0,
      inCart: false,
    },

    {
      name: "The Cappaccino",
      price: "40",
      image: hatImage,
      quantity: 0,
      inCart: false,
    },

    {
      name: "The Cap City",
      price: "30",
      image: hatImage,
      quantity: 0,
      inCart: false,
    },
  ]);
  const [cartItem, setCartItem] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  //Track total price
  useEffect(() => {
    let updatedCartItems = cartItem.filter((item) => item.inCart === true);
    let sum = 0;

    updatedCartItems = updatedCartItems.map((item) => {
      sum += Number(Number(item.quantity) * Number(item.price));
      return item;
    });

    setCartPrice(sum);
  }, [cartItem]);

  const emptyCartClick = () => {
    setCartItem([]);
    setCartPrice(0);
  };

  const addToCartClick = (data) => {
    for (const item of cartItem) {
      if (item.name === data.name || item.inCart === false) {
        return;
      }
    }

    setCartItem((prevCartItems) => [
      ...prevCartItems,
      {
        name: data.name,
        price: data.price,
        quantity: data.quantity + 1,
        inCart: true,
      },
    ]);
  };

  const quantityAdd = (data) => {
    setCartItem((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) => {
        if (item.name === data.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return updatedCartItems;
    });
  };

  const quantitySubtract = (data) => {
    if (data.quantity === 1) {
      setCartItem((prevCartItems) => {
        return prevCartItems.filter((item) => {
          item.name !== data.name;
        });
      });
    } else if (data.quantity > 0) {
      setCartItem((prevCartItems) => {
        return prevCartItems.map((item) => {
          if (item.name === data.name) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      });
    }
  };

  return (
    <div className="main-store">
      <div className="store-gallery">
        <input placeholder="SEARCH..."></input>

        <div className="store-items">
          {item.map((hat) => {
            return (
              <div key={uniqid()} className="cap">
                <img src={hat.image}></img>
                <span className="nameAndPrice">
                  <p>{hat.name}</p>
                  <p>${hat.price}</p>
                </span>
                <button
                  onClick={() => addToCartClick(hat)}
                  className="addToCart"
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sidebar">
        <h2>CART</h2>
        <p className="total">Total: ${cartPrice}</p>

        <div className="cart-items">
          {cartItem.map((item) => {
            return (
              <div className="cart-cap" key={uniqid()}>
                <h5>{item.name}</h5>

                <span className="cart-cap-info">
                  <p>${item.price}</p>
                  <span className="cart-cap-quantity">
                    <button
                      onClick={() => {
                        quantitySubtract(item);
                      }}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => {
                        quantityAdd(item);
                      }}
                    >
                      +
                    </button>
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="buttons">
          <button
            onClick={() => {
              emptyCartClick();
            }}
            className="empty-cart"
          >
            Empty Cart
          </button>
          <button
            onClick={() =>
              alert("The Caps have been delivered to your doorstep.")
            }
            className="check-out"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
