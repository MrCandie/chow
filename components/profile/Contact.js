import classes from "./profile.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Contact() {
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
        <h1>Contact us</h1>
        <div className={classes.account}>
          <div className={classes.items}>
            <Link
              href="mailto:akinwumiadekanmi2@gmail.com"
              className={classes.item}
            >
              <span>
                <AiOutlineMail />
              </span>
              <h1>Mail</h1>
            </Link>
            <Link href="" className={classes.item}>
              <span>
                <AiOutlineInstagram />
              </span>
              <h1>Instagram</h1>
            </Link>
            <Link href="" className={classes.item}>
              <span>
                <AiFillFacebook />
              </span>
              <h1>Facebook</h1>
            </Link>
            <Link href="" className={classes.item}>
              <span>
                <AiOutlineTwitter />
              </span>
              <h1>Twitter</h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
