import { highlightText } from "@/utils/highlightText";
import { useTranslations } from "next-intl";
import { HTMLAttributes, PropsWithChildren } from "react";
import Button from "../Button";
import Image from "../Core/Image";
import Slider from "../Slider";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations();
  const text = t("titles.learn_arabic_easy_with_expert_tutors");
  const highlighted = highlightText(text, ["Expert Tutors"]);
  const data = [
    {
      title: "Item 1",
      description: "Description 1",
    },
    {
      title: "Item 2",
      description: "Description 2",
    },
    {
      title: "Item 1",
      description: "Description 1",
    },
    {
      title: "Item 2",
      description: "Description 2",
    },
    {
      title: "Item 1",
      description: "Description 1",
    },
    {
      title: "Item 2",
      description: "Description 2",
    },
  ];
  return (
    <section
      className={`hero-section w-full rounded-lg shadow-3xl lg:py-20 py-10`}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {/* START:: TEXT SECTION */}
          <div
            className="hero-section-content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span className="span-chip text-[#115E57] text-sm font-normal ">
              {t("titles.join_300_active_students")}
            </span>
            <h1
              className="lg:text-5xl text-3xl font-bold mt-2 mb-4 !leading-[4rem]"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            ></h1>
            <p className="text-dark-gray lg:text-xl text-base font-normal">
              {t("descriptions.hero_description")}
            </p>
            <div className="hero-section-buttons flex gap-4 my-12">
              <Link href="/" target="_blank" className="btn default-btn">
                <Image
                  src="/images/icons/apple.svg"
                  alt="App Store"
                  className="w-[140px] h-[37px]  image-icon"
                />
              </Link>
              <Link href="/" target="_blank" className="btn default-btn">
                <Image
                  src="/images/icons/google.svg"
                  alt="Google Store"
                  className="w-[140px] h-[37px]  image-icon"
                />
              </Link>
            </div>
            <div className="hero-section-qr-code flex  items-center gap-3">
              <Image
                src="/images/icons/qr-code.svg"
                alt="QR Code"
                className="w-24 h-24 object-cover"
              />
              <p className="text-dark-gray text-xs font-normal lg:w-[35%]">
                {t("titles.scan_to_download")}
              </p>
            </div>
          </div>
          {/* END:: TEXT SECTION */}

          {/* START:: SLIDER SECTION */}
          <div
            className="hero-section-slider relative"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <span className="chip-try-now absolute top-[-2.2rem] rotate-[3deg] left-0 right-0 mx-auto flex items-center gap-1 justify-center font-semibold text-sm bg-primary-gradient text-light rounded-[24px] px-4 py-3 w-[125px] ">
              <img src="/images/icons/star.svg" alt="Arrow Right" />
              {t("titles.try_now")}
            </span>
            <Slider
              items={data}
              slidesPerView={1}
              spaceBetween={16}
              loop={false}
              autoplay={false}
              className="custom-hero-section-slider"
              renderItem={(item, index) => (
                <div className="swiper-slide-image-container">
                  <Image
                    src="/images/hero/screen.webp"
                    alt="Mockup"
                    className="swiper-slide-image"
                  />
                </div>
              )}
            />
          </div>
          {/* END:: SLIDER SECTION */}
        </div>
      </div>
    </section>
  );
}
