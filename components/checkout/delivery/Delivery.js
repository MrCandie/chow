import React, { useState } from "react";
import classes from "../checkout.module.css";
import { GoLocation } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import DeliveryForm from "./DeliveryForm";
import RecepientToggle from "./RecepientToggle";

export default function Delivery() {
  const [houseNumber, setHouseNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [showForm, setShowForm] = useState(false);
  return (
    <div className={classes.delivery}>
      <h1>Delivery address</h1>
      <div className={classes.address}>
        <span className={classes.span}>
          <GoLocation />
        </span>
        <p>
          {houseNumber && streetAddress
            ? `${houseNumber}, ${streetAddress}`
            : "add a delivery address"}
        </p>
        <span>
          <FaGreaterThan />
        </span>
      </div>
      <div onClick={() => setShowForm((prev) => !prev)} className={classes.add}>
        <span>
          <MdOutlineAdd />
        </span>
        <p>new delivery address</p>
      </div>
      {showForm && (
        <DeliveryForm
          setShowForm={setShowForm}
          setHouseNumber={setHouseNumber}
          setStreetAddress={setStreetAddress}
        />
      )}
      <RecepientToggle />
    </div>
  );
}
