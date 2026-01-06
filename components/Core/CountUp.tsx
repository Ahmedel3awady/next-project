"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
};

export default function CountUp({
  value,
  duration = 1500,
  decimals = 0,
  suffix = "",
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      setCount(progress * value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <span ref={ref} className={`text-dark text-3xl font-bold mb-2 flex items-center justify-center ${className}`}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
