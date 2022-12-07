import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./recommended.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../../../../spinner/spinner";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useRouter } from "next/router";

export default function Recommended({ meal }) {
  const router = useRouter();
  if (meal.length === 0) {
    return <Spinner />;
  }
  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h1>Recommended for you</h1>
        <Link href="/meals">
          view all
          <span>
            <AiOutlineArrowRight />
          </span>
        </Link>
      </div>
      <div className={classes.large}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={true}
          modules={[Pagination]}
          className={classes.container}
        >
          {meal.map((item) => (
            <SwiperSlide
              key={item.id}
              onClick={() =>
                router.push(`/meals/restaurant/${item.key}/${item.id}`)
              }
              className={classes.meal}
            >
              <div>
                <div className={classes.image}>
                  <img src={`../../..${item.images}`} />
                  <span></span>
                </div>
                <div className={classes.content}>
                  <h1>{item.name}</h1>
                  <h2>N{item.price}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={classes.mobile}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          pagination={true}
          modules={[Pagination]}
          className={classes.container}
        >
          {meal.map((item) => (
            <SwiperSlide
              key={item.id}
              onClick={() =>
                router.push(`/meals/restaurant/${item.key}/${item.id}`)
              }
              className={classes.meal}
            >
              <div>
                <div className={classes.image}>
                  <img src={`../../..${item.images}`} />
                  <span></span>
                </div>
                <div className={classes.content}>
                  <h1>{item.name}</h1>
                  <h2>N{item.price}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
