import classes from "./profile.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

export default function Profile() {
  const cart = useContext(CartContext);
  const router = useRouter();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.profile}>
          <span onClick={() => router.replace("/")} className={classes.back}>
            <AiOutlineArrowLeft />
          </span>
          <h1>Hello, Name!</h1>
        </div>
        <div className={classes.account}>
          <h1>Account</h1>
          <hr />
          <div className={classes.items}>
            <Link href="/cart">
              <div className={classes.item}>
                <span>
                  <RiShoppingCartLine />
                </span>
                <h1>My orders</h1>
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
  );
}
