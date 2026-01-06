import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  title: string;
  description?: string;
  className?: string;
}

export default function HeadSection(props: Props) {
  return (
    <div
      className={`head-section text-center flex flex-col items-center justify-center gap-3 mb-14 ${props.className}`}
      data-aos="zoom-out"
      data-aos-delay="100"
    >
      <h3 className="text-5xl font-bold">{props.title}</h3>
      <p className="text-gray2 text-base font-normal">{props.description}</p>
    </div>
  );
}
