import classes from "./meal.module.css";
import { BiTimeFive } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { useRouter } from "next/router";

export default function Restaurant({ data }) {
  const router = useRouter();
  return (
    <section className={classes.rest}>
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => router.push(`/meals/restaurant/${item.key}`)}
          className={classes.restaurant}
        >
          <div className={classes.image}>
            <img src={item.image} />
          </div>
          <div className={classes.content}>
            <img src={item.image} />
            <div className={classes.desc}>
              <h1>
                {item.name}
                <span>
                  <GoVerified />
                </span>
              </h1>

              <div className={classes.delivery}>
                <p>Free Delivery</p>
                <h2>
                  <span>
                    <BiTimeFive />
                  </span>
                  15-20mins
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
