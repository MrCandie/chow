import React, { useRef } from "react";
import classes from "../checkout.module.css";

export default function DeliveryForm({
  setHouseNumber,
  setStreetAddress,
  setShowForm,
}) {
  const houseRef = useRef();
  const streetRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const houseNumber = houseRef.current.value;
    const street = streetRef.current.value;

    if (!street && !houseNumber) {
      return;
    }

    setHouseNumber(houseNumber);
    setStreetAddress(street);
    setShowForm(false);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.details}>
        <label>House number</label>
        <input ref={houseRef} type="number" required />
      </div>
      <div className={classes.details}>
        <label>Street address</label>
        <input ref={streetRef} type="text" required />
      </div>
      <button>Add</button>
    </form>
  );
}
