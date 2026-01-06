import Image from "@/components/Core/Image";
import CountUp from "@/components/Core/CountUp";
import { HTMLAttributes, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  icon: string;
  title: string;
};

export default function Card({ className, icon, title, ...props }: CardProps) {
  return (
    <div
      className={`how-work-card rounded-xl p-8 ${className} bg-[#F9FAFB] !transition-all !duration-300 min-h-[174px] flex items-center justify-center gap-5 flex-col cursor-pointer`}
      {...props}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="how-work-card-content-icon flex items-center justify-center">
        <Image
          src={`/images/icons/${icon}`}
          alt={title}
          width={42}
          height={42}
          className="w-[42px] h-[42px]"
        />
      </div>
      <div className="how-work-card-content-title text-center">
        <h3 className="text-base text-gray2 font-medium transition-all duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
}
