"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Thumbs,
  FreeMode,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../Button";

interface CustomSwiperProps<T = any> {
  items: T[];
  slidesPerView: number;
  spaceBetween?: number;
  autoplay?: boolean;
  breakpoints?: any;
  centeredSlides?: boolean;
  loop?: boolean;
  allowTouchMove?: boolean;
  renderItem: (item: T, index: number) => React.ReactNode;
  renderItemThumb: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export default function CustomSwiper<T>({
  items = [],
  slidesPerView,
  spaceBetween = 0,
  autoplay = true,
  breakpoints,
  centeredSlides = false,
  loop = false,
  allowTouchMove = true,
  className,
  renderItem,
  renderItemThumb,
}: CustomSwiperProps<T>) {
  const swiperRef = useRef<any>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage >= totalPages - 1;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const updatePagination = () => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    setCurrentPage(swiper.activeIndex);

    setTotalPages(
      Math.ceil(swiper.slides.length / swiper.params.slidesPerView)
    );
  };

  const prevSlide = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    swiper.slideTo(swiper.activeIndex - 1);
  };

  const nextSlide = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    swiper.slideTo(swiper.activeIndex + 1);
  };

  return (
    <div className={`custom-swiper custom-swiper-thumbs ${className} `}>
      <Swiper
        onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
        spaceBetween={24}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mb-8"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItemThumb(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={16}
        navigation={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        }}
        speed={1500}
        watchSlidesProgress={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2 py-8"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      {/* <div className="flex justify-center items-center gap-3 mt-6">
        <Button
          onClick={prevSlide}
          variant={isPrevDisabled ? "light" : "default"}
          disabled={isPrevDisabled}
          className={`arrows-btn !w-12 !h-12 !p-0 !rounded-full ${
            isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img
            src="/images/icons/arrow-left.svg"
            alt="arrow-right"
            className="w-6 h-6 small-icon"
          />
        </Button>

        <Button
          onClick={nextSlide}
          variant={isNextDisabled ? "light" : "default"}
          disabled={isNextDisabled}
          className={`arrows-btn !w-12 !h-12 !p-0 !rounded-full ${
            isNextDisabled ? "cursor-not-allowed" : ""
          }`}
        >
          <img
            src="/images/icons/arrow-right.svg"
            alt="arrow-left"
            className="w-6 h-6 small-icon"
          />
        </Button>
      </div> */}
    </div>
  );
}
