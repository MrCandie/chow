import Link from "next/link";
import classes from "./promo.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Promo() {
  return (
    <section className={classes.section}>
      <div className={classes.large}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={true}
          modules={[Pagination]}
          className="myswiper"
        >
          <SwiperSlide className={classes.promo}>
            <div>
              <div className={classes.container}>
                <div className={classes.content}>
                  <h1>20% off</h1>
                  <p>On your first order</p>
                  <Link href="/meals">Order now</Link>
                </div>
                <div className={classes.image}>
                  <img src="/images/meal1.avif" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.promo}>
              <div className={classes.container}>
                <div className={classes.content}>
                  <h1>20% off</h1>
                  <p>On your first order</p>
                  <Link href="/meals">Order now</Link>
                </div>
                <div className={classes.image}>
                  <img src="/images/meal2.avif" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.promo}>
              <div className={classes.container}>
                <div className={classes.content}>
                  <h1>20% off</h1>
                  <p>On your first order</p>
                  <Link href="/meals">Order now</Link>
                </div>
                <div className={classes.image}>
                  <img src="/images/meal3.avif" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.promo}>
              <div className={classes.container}>
                <div className={classes.content}>
                  <h1>20% off</h1>
                  <p>On your first order</p>
                  <Link href="/meals">Order now</Link>
                </div>
                <div className={classes.image}>
                  <img src="/images/meal1.avif" />
                </div>
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
          className={classes.section}
        >
          <SwiperSlide className={classes.promo}>
            <div>
              <div className={classes.container}>
                <div className={classes.content}>
                  <h1>20% off</h1>
                  <p>On your first order</p>
                  <Link href="/meals">Order now</Link>
                </div>
                <div className={classes.image}>
                  <img src="/images/big.jfif" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.promo}>
              <div className={classes.container}>
                <div className={classes.content}>
                  <h1>20% off</h1>
                  <p>On your first order</p>
                  <Link href="/meals">Order now</Link>
                </div>
                <div className={classes.image}>
                  <img src="/images/meal2.avif" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
