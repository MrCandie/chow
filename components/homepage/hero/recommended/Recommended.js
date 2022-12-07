import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./recommended.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Recommended() {
  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h1>Recommended for you</h1>
        <Link href="">
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
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal7.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal8.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal9.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal10.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal11.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
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
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal7.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal8.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal9.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal10.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.meal}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal11.avif" />
                <span></span>
              </div>
              <div className={classes.content}>
                <h1>Vegetable spaghetti</h1>
                <h2>#1450</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
