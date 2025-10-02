import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ starCount = 5 }) {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="flex gap-2 text-3xl">
      {[...Array(starCount)].map((_, index) => {
        const current = index + 1;
        return (
          <FaStar
            key={current}
            className={`cursor-pointer transition-colors duration-200 
              ${
                current <= (hoverValue || starValue)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            onClick={() => setStarValue(current)}
            onMouseEnter={() => setHoverValue(current)}
            onMouseLeave={() => setHoverValue(0)}
          />
        );
      })}
    </div>
  );
}
