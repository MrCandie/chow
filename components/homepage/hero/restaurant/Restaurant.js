import Link from "next/link";
import classes from "./restaurant.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Restaurant() {
  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h1>Restaurant near you</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal2.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal3.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal4.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal5.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal6.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal2.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal3.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal4.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal5.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal6.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
          <SwiperSlide className={classes.restaurant}>
            <div>
              <div className={classes.image}>
                <img src="/images/meal7.avif" />
              </div>
              <div className={classes.content}>
                <img src="/images/meal3.avif" />
                <div className={classes.desc}>
                  <h1>Simi food and snacks</h1>
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
        </Swiper>
      </div>
    </section>
  );
}
