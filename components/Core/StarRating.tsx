type StarRatingProps = {
  rating: number; // مثال: 4.5
  max?: number;
};

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  const percentage = Math.min((rating / max) * 100, 100);

  return (
    <div className="relative w-fit">
      {/* Empty Stars */}
      <div className="flex">
        {Array.from({ length: max }).map((_, i) => (
          <img
            key={i}
            src="/images/icons/empty-star.svg"
            alt="empty star"
            className="w-5 h-5"
          />
        ))}
      </div>

      {/* Filled Stars */}
      <div
        className="absolute top-0 left-0 flex overflow-hidden"
        style={{ width: `${percentage}%` }}
      >
        {Array.from({ length: max }).map((_, i) => (
          <img
            key={i}
            src="/images/icons/fill-star.svg"
            alt="filled star"
            className="w-5 h-5"
          />
        ))}
      </div>
    </div>
  );
}
