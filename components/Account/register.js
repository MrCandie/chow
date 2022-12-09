import Link from "next/link";
import classes from "./account.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useContext, useRef, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { CartContext } from "../../CartContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../spinner/spinner";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const cart = useContext(CartContext);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(true);

  const [user, setUser] = useState({});
  const router = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [auth]);

  function toggleVisibility() {
    if (type === "password") {
      setType("text");
      setIcon(false);
    } else {
      setType("password");
      setIcon(true);
    }
  }

  async function signupHandler(e) {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredMail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userDetail = {
      name: enteredMail,
      email: enteredMail,
      password: enteredPassword,
    };

    // fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]"
    // );
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        enteredMail,
        enteredPassword
      );
      setLoading(false);
      cart.login(user._tokenResponse.idToken);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  }

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <header>
          <span onClick={() => router.push("/")}>
            <AiOutlineArrowLeft />
          </span>
          <Link href="/account/login">Log in</Link>
        </header>
        <div className={classes.account}>
          <h1>Sign up</h1>
          <form onSubmit={signupHandler}>
            <div className={classes.detail}>
              <label htmlFor="mail">
                <AiOutlineUser />
              </label>
              <input ref={nameRef} id="mail" placeholder="Name" type="text" />
            </div>
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
            <button>{loading ? "Loading..." : "Sign up"}</button>
          </form>
        </div>
      </div>
      {loading && <Spinner />}
      <ToastContainer position="top-center" autoClose={300} />
    </section>
  );
}
