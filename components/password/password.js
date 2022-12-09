import { Fragment, useContext, useRef, useState } from "react";
import classes from "./password.module.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { firebaseConfig } from "../firebase-config";
import { CartContext } from "../../CartContext";
import Spinner from "../../spinner/spinner";

export default function Password({ setModal }) {
  const cart = useContext(CartContext);
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  function changeHandler(e) {
    const apiKey = firebaseConfig.apiKey;
    e.preventDefault();
    const enteredPassword = passwordRef.current.value;

    setLoading(true);
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: cart.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setModal(false);
      });
  }
  return (
    <Fragment>
      <div onClick={() => setModal(false)} className="overlay"></div>
      <section className={classes.section}>
        <h1>Change password</h1>
        <form onSubmit={changeHandler} className={classes.form}>
          <div className={classes.detail}>
            <label>
              <RiLockPasswordLine />
            </label>
            <input
              ref={passwordRef}
              required
              placeholder="Enter new password"
              type="password"
            />
          </div>
          <button>Change</button>
        </form>
      </section>
      {loading && <Spinner />}
    </Fragment>
  );
}
