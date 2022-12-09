import classes from "./profile.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { MdPayment } from "react-icons/md";

export default function User() {
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
              <h1>johndoe@gmail.com</h1>
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
