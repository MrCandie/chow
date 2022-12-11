import classes from "./profile.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { MdFavorite } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import Link from "next/link";
import { Fragment, useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import Editprofile from "./Editprofile";
import { firebaseConfig } from "../firebase-config";

export default function Profile() {
  const cart = useContext(CartContext);
  const router = useRouter();

  const [modal, setModal] = useState(false);
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

  return (
    <Fragment>
      {modal && <Editprofile setModal={setModal} />}
      <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.profile}>
            <button onClick={() => setModal(true)} className={classes.btn}>
              Edit profile
            </button>
            <span onClick={() => router.replace("/")} className={classes.back}>
              <AiOutlineArrowLeft />
            </span>
            <h1>Hello, {user.users[0].displayName}</h1>
          </div>
          <div className={classes.account}>
            <h1>Account</h1>
            <hr />
            <div className={classes.items}>
              <Link href="/favorite">
                <div className={classes.item}>
                  <span>
                    <MdFavorite />
                  </span>
                  <h1>My favorites</h1>
                </div>
              </Link>

              <Link href="/profile/user">
                <div className={classes.item}>
                  <span>
                    <AiOutlineUser />
                  </span>
                  <h1>My details</h1>
                </div>
              </Link>
              <Link href="">
                <div className={classes.item}>
                  <span>
                    <AiOutlineQuestionCircle />
                  </span>
                  <h1>F.A.Qs</h1>
                </div>
              </Link>
              <Link href="/profile/contact">
                <div className={classes.item}>
                  <span>
                    <GrContact />
                  </span>
                  <h1>Contact</h1>
                </div>
              </Link>

              <div onClick={() => cart.logout()} className={classes.item}>
                <span>
                  <FiLogOut />
                </span>
                <h1>Log out</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
