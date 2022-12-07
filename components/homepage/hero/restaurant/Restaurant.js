import Link from "next/link";
import classes from "./restaurant.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useRouter } from "next/router";
import Spinner from "../../../../spinner/spinner";

export default function Restaurant({ restaurant }) {
  const router = useRouter();
  if (restaurant.length === 0) {
    return <Spinner />;
  }
  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h1>Restaurant near you</h1>
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
          {restaurant.map((item) => (
            <SwiperSlide
              onClick={() => router.push(`/meals/restaurant/${item.key}`)}
              key={item.id}
              className={classes.restaurant}
            >
              <div>
                <div className={classes.image}>
                  <img src={`../../..${item.image}`} />
                </div>
                <div className={classes.content}>
                  <img src={`../../..${item.image}`} />
                  <div className={classes.desc}>
                    <h1>{item.name}</h1>
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
          {restaurant.map((item) => (
            <SwiperSlide
              onClick={() => router.push(`/meals/restaurant/${item.key}`)}
              key={item.id}
              className={classes.restaurant}
            >
              <div>
                <div className={classes.image}>
                  <img src={`../../..${item.image}`} />
                </div>
                <div className={classes.content}>
                  <img src={`../../..${item.image}`} />
                  <div className={classes.desc}>
                    <h1>{item.name}</h1>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
