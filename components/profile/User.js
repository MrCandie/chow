import classes from "./profile.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { MdPayment } from "react-icons/md";
import { firebaseConfig } from "../firebase-config";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import { MdPermIdentity } from "react-icons/md";

export default function User() {
  const cart = useContext(CartContext);
  const [user, setUser] = useState("");
  const apiKey = firebaseConfig.apiKey;
  fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        idToken: cart.token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => setUser(data));

  if (!user) {
    return;
  }

  const router = useRouter();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <span
          onClick={() => router.replace("/profile")}
          className={classes.back}
        >
          <AiOutlineArrowLeft />
        </span>
        <h1>My details</h1>
        <div className={classes.account}>
          <div className={classes.items}>
            <div className={classes.item}>
              <span>
                <AiOutlineUser />
              </span>
              <h1>John doe</h1>
            </div>
            <div className={classes.item}>
              <span>
                <AiOutlineMail />
              </span>
              <h1>{user.users[0].email}</h1>
            </div>
            <div className={classes.item}>
              <span>
                <MdPermIdentity />
              </span>
              <h1>{user.users[0].localId}</h1>
            </div>
            <div className={classes.item}>
              <span>
                <RiLockPasswordFill />
              </span>
              <h1>Change password</h1>
            </div>
            <div className={classes.item}>
              <span>
                <MdPayment />
              </span>
              <h1>Payment methods</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
