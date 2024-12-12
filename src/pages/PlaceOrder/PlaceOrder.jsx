import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const handlePaymentClick = () => {
    // Get all input values
    const firstName = document
      .querySelector('input[placeholder="First Name"]')
      .value.trim();
    const lastName = document
      .querySelector('input[placeholder="Last Name"]')
      .value.trim();
    const email = document
      .querySelector('input[placeholder="Email address"]')
      .value.trim();
    const street = document
      .querySelector('input[placeholder="Street"]')
      .value.trim();
    const city = document
      .querySelector('input[placeholder="City"]')
      .value.trim();
    const state = document
      .querySelector('input[placeholder="State"]')
      .value.trim();
    const zipCode = document
      .querySelector('input[placeholder="Zip code"]')
      .value.trim();
    const country = document
      .querySelector('input[placeholder="Country"]')
      .value.trim();
    const phone = document
      .querySelector('input[placeholder="Phone"]')
      .value.trim();

    // Check if all fields are filled
    if (
      !firstName ||
      !lastName ||
      !email ||
      !street ||
      !city ||
      !state ||
      !zipCode ||
      !country ||
      !phone
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all the Delivery Information fields.",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Order Successful!",
        text: "Your order has been placed.",
        icon: "success",
      });
    }
  };

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="button" onClick={handlePaymentClick}>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
