import Image from "@/components/Core/Image";
import CountUp from "@/components/Core/CountUp";
import { HTMLAttributes, PropsWithChildren } from "react";
import { useTranslations } from "next-intl";
type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  icon: string;
  title_step: string;
  description: string;
  image: string;
  index: number;
};

export default function Card({
  className,
  icon,
  title_step,
  description,
  image,
  index,
  ...props
}: CardProps) {
  const t = useTranslations();
  return (
    <div
      className={`how-work-big-card rounded-[20px] px-12 ${className} bg-[#F9FAFB] !transition-all !duration-300 h-[445px] grid lg:grid-cols-2 grid-cols-1 gap-10 items-center`}
      {...props}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="how-work-big-card-content py-12">
        <Image
          src={`/images/icons/${icon}`}
          alt={title_step}
          width={42}
          height={42}
          className="w-[42px] h-[42px] mb-6"
        />
        <span className="text-sm text-[#6A7282] font-normal">
          {t("titles.step", { index })}
        </span>

        <h3 className="text-4xl text-dark font-bold mt-3 mb-5">
          {title_step}
        </h3>
        <p className="text-base text-gray2 font-normal ">{description}</p>
      </div>
      <div className="how-work-big-card-content-image max-h-full overflow-hidden pt-12 flex items-center justify-center">
        <Image
          src={`/images/general/${image}`}
          alt={`${title_step} image`}
          width={42}
          height={42}
          className="w-auto  h-full  animation_up_and_down  mb-[-2rem]"
        />
      </div>
    </div>
  );
}
