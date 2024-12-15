import React, { useContext } from "react";
import Swal from "sweetalert2";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Allows 10-15 digits
    return phoneRegex.test(phone);
  };

  const handlePaymentClick = () => {
    const errors = [];

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

    if (!firstName || !/^[A-Za-z]+$/.test(firstName)) {
      errors.push("a valid first name");
    }
    if (!lastName || !/^[A-Za-z]+$/.test(lastName)) {
      errors.push("a valid last name");
    }
    if (!email || !validateEmail(email)) {
      errors.push("a valid email address");
    }
    if (!street) {
      errors.push("a street address");
    }
    if (!city || !/^[A-Za-z\s]+$/.test(city)) {
      errors.push("a valid city");
    }
    if (!state || !/^[A-Za-z\s]+$/.test(state)) {
      errors.push("a valid state");
    }
    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
      errors.push("a 5-digit zip code");
    }
    if (!country) {
      errors.push("a country");
    }
    if (!phone || !validatePhone(phone)) {
      errors.push("a valid phone number (10-15 digits)");
    }

    if (errors.length > 0) {
      Swal.fire({
        title: "Error!",
        text: `Please enter ${errors.join(
          ", "
        )}, to proceed with your payment!`,
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
