import Image from "@/components/Core/Image";
import CountUp from "@/components/Core/CountUp";
import { HTMLAttributes, PropsWithChildren } from "react";
import { Each } from "@/components/Core/Each";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  icon: string;
  title: string;
  type: string;
  price: string | number;
  duration: string;
  features: string[];
  mostPopular?: boolean;
};

export default function Card({
  className,
  children,
  icon,
  title,
  type,
  price,
  duration,
  features,
  mostPopular = false,
  ...props
}: CardProps) {
  const t = useTranslations();
  return (
    <div
      className={`package-card rounded-[20px] p-8 flex flex-col justify-between ${
        mostPopular && "!bg-primary"
      } bg-light  p-10 transition-all duration-300 relative`}
      {...props}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {mostPopular && (
        <span className="text-sm text-light bg-[#F79009] font-normal w-max px-3 py-2 rounded-full absolute top-[-1rem] right-0 left-0 mx-auto text-center">
          {t("titles.most_popular")}
        </span>
      )}
      <div className="package-card-content">
        <Image
          src={`/images/icons/${icon}`}
          alt={title}
          width={42}
          height={42}
          className={`w-[30px] h-[30px] mb-5 ${mostPopular && "light-filter"}`}
        />
        <h3
          className={`text-xl text-[#101828] font-bold mb-2 ${
            mostPopular && "text-light"
          }`}
        >
          {title}
        </h3>
        <span
          className={`text-xs text-gray2 font-medium mb-7 block ${
            mostPopular && "text-light/80"
          }`}
        >
          {type}
        </span>
        <h2
          className={`text-5xl text-[#101828] font-bold mb-2 flex items-end ${
            mostPopular && "text-light"
          }`}
        >
          <Image
            src={`/images/icons/dollar_.svg`}
            alt="price"
            className={`w-[32px] h-auto inline-block ${
              mostPopular && "light-filter"
            }`}
          />
          {price}
        </h2>
        <span
          className={`text-xs text-gray2 font-medium block ${
            mostPopular && "text-light/80"
          }`}
        >
          {duration}
        </span>
        <ul className="features-package-card flex flex-col gap-3 mt-6">
          <Each
            of={features}
            render={(feature, index) => (
              <li className="feature-package-card flex items-center gap-2.5">
                <Image
                  src={`/images/icons/check.svg`}
                  alt={feature}
                  width={16}
                  height={16}
                  className={`w-[16px] h-[16px] ${
                    mostPopular && "light-filter"
                  }`}
                />
                <span
                  className={`text-sm text-gray2 font-medium block ${
                    mostPopular && "text-light/90"
                  }`}
                >
                  {feature}
                </span>
              </li>
            )}
          />
        </ul>
      </div>
      <div className="package-card-action mt-8">
        <Button
          className="!w-full"
          variant={mostPopular ? "lightDefault" : "default"}
          onClick={() => {}}
          loading={false}
        >
          {t("buttons.choose_this_package")}
        </Button>
      </div>
    </div>
  );
}
