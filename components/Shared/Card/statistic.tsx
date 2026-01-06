import Image from "@/components/Core/Image";
import CountUp from "@/components/Core/CountUp";
import { HTMLAttributes, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  icon: string;
  title: string;
  count: number;
  decimals?: number;
  suffix?: string;
};

export default function Card({
  className,
  children,
  icon,
  title,
  count,
  decimals = 0,
  suffix = "" as any,
  ...props
}: CardProps) {
  return (
    <div
      className={`statistic-card rounded-xl p-8 ${className} hover:bg-primaryLight transition-all duration-300`}
      {...props}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="statistic-card-content text-center">
        <div className="statistic-card-content-icon mb-4 flex items-center justify-center">
          <Image
            src={`/images/icons/${icon}`}
            alt={title}
            width={35}
            height={35}
            className="w-[35px] h-[35px]"
          />
        </div>
        <div>
          <CountUp
            value={count}
            decimals={decimals}
            suffix={suffix}
            duration={1000}
          />
          <p className="text-base text-gray2 font-medium">{title}</p>
        </div>
      </div>

      {children}
    </div>
  );
}
