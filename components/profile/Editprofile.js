import { Fragment, useContext, useRef } from "react";
import classes from "../password/password.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { firebaseConfig } from "../firebase-config";
import { CartContext } from "../../CartContext";

export default function Editprofile({ setModal }) {
  const nameRef = useRef();
  const apiKey = firebaseConfig.apiKey;
  const cart = useContext(CartContext);

  function updateHandler(e) {
    const enteredName = nameRef.current.value;
    e.preventDefault();
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: cart.token,
          displayName: enteredName.trim(),
          photoUrl: "",
          deleteAttribute: "PHOTO_URL",
          returnSecureToken: false,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setModal(false);
      });
  }

  return (
    <Fragment>
      <div onClick={() => setModal(false)} className="overlay"></div>
      <section className={classes.section}>
        <h1>Update profile</h1>
        <form onSubmit={updateHandler} className={classes.form}>
          <div className={classes.detail}>
            <label>
              <AiOutlineUser />
            </label>
            <input ref={nameRef} type="text" placeholder="Enter your name" />
          </div>
          <button>Update</button>
        </form>
      </section>
    </Fragment>
  );
}
