"use client";

import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function LazyImage({
  src,
  alt = "",
  className = "",
}: LazyImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden">
      {visible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`transition-opacity duration-700 opacity-0 ${className}`}
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        />
      )}
    </div>
  );
}
