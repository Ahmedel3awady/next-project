"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

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
}: CustomSwiperProps<T>) {
  const swiperRef = useRef<any>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage >= totalPages - 1;

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
    <div className={`custom-swiper ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        loop={loop}
        allowTouchMove={allowTouchMove}
        simulateTouch={allowTouchMove}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={0}
        autoplay={
          autoplay
            ? {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updatePagination();
          swiper.on("slideChange", updatePagination);
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-3 mt-6">
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
      </div>
    </div>
  );
}
