import Link from "next/link";
import classes from "./account.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import Spinner from "../../spinner/spinner";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../CartContext";

export default function Login() {
  const cart = useContext(CartContext);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  function toggleVisibility() {
    if (type === "password") {
      setType("text");
      setIcon(false);
    } else {
      setType("password");
      setIcon(true);
    }
  }

  async function loginHandler(e) {
    e.preventDefault();

    const enteredMail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userDetail = {
      email: enteredMail,
      password: enteredPassword,
    };

    setIsLoading(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        enteredMail,
        enteredPassword
      );
      setIsLoading(false);
      console.log(user);
      cart.login(user._tokenResponse.idToken, user._tokenResponse.localId);
      router.replace("/");
    } catch (err) {
      setIsLoading(false);
      toast.error(err.message);
    }
  }

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <header>
          <span onClick={() => router.push("/")}>
            <AiOutlineArrowLeft />
          </span>
          <Link href="/account/register">Sign up</Link>
        </header>
        <div className={classes.account}>
          <h1>Log in</h1>
          <form onSubmit={loginHandler}>
            <div className={classes.detail}>
              <label htmlFor="mail">
                <AiOutlineMail />
              </label>
              <input
                ref={emailRef}
                id="mail"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className={classes.detail}>
              <label htmlFor="password">
                <RiLockPasswordLine />
              </label>
              <input
                ref={passwordRef}
                id="password"
                placeholder="Password"
                type={type}
              />
              <span onClick={toggleVisibility}>
                {icon ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
            <p>Forgot your password?</p>
            <button>Log in</button>
          </form>
        </div>
      </div>
      {isLoading && <Spinner />}
      <ToastContainer position="top-center" autoClose={300} />
    </section>
  );
}
