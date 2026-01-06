import Image from "@/components/Core/Image";
import { HTMLAttributes, PropsWithChildren } from "react";
import { Each } from "@/components/Core/Each";
import StarRating from "@/components/Core/StarRating";

interface User {
  name: string;
  image: string;
  job: string;
}
type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  comment: string;
  rate: number;
  user: User;
};

export default function Card({
  className,
  children,
  comment,
  rate,
  user,
  ...props
}: CardProps) {
  return (
    <div
      className={`review-card rounded-xl p-8`}
      {...props}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="review-card-content flex flex-col justify-between h-full gap-10">
        <div>
          <StarRating rating={rate} />
          <p className="text-sm text-gray2 font-normal mt-5">"{comment}"</p>
        </div>
        <div className="review-card-content-user flex items-center gap-3">
          <Image
            src={`/images/general/${user.image}`}
            alt={user.name}
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="review-card-content-user-info flex flex-col gap-1">
            <h3 className="text-sm text-[#101828] font-semibold">
              {user.name}
            </h3>
            <p className="text-xs text-[#6A7282] font-normal">{user.job}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
