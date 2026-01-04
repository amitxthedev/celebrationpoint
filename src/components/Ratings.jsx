import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Aarav Sharma",
    rating: 5,
    text: "Absolutely loved the gift quality. Packaging was premium and delivery was on time.",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya Verma",
    rating: 4,
    text: "Beautiful collection and smooth ordering experience. Highly recommended!",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "Best gifting platform I’ve used. Perfect for special occasions.",
    img: "https://i.pravatar.cc/100?img=45",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 justify-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i <= count ? "text-yellow-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.966z" />
        </svg>
      ))}
    </div>
  );
}

function Ratings() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-32 px-6">
      
      {/* HEADING */}
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Loved by <span className="text-blue-400">Thousands</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Real words from real customers
        </p>
      </div>

      {/* SLIDER CONTAINER (RESERVED HEIGHT) */}
      <div className="relative mx-auto max-w-6xl h-[380px] hidden md:block">
        {reviews.map((review, i) => {
          const position =
            i === index
              ? "center"
              : i === (index + 1) % reviews.length
              ? "right"
              : "left";

          return (
            <div
              key={i}
              className={`absolute top-0 left-1/2 transition-all duration-1000 ease-in-out
                ${
                  position === "center"
                    ? "-translate-x-1/2 scale-110 opacity-100 z-20 blur-0"
                    : position === "right"
                    ? "translate-x-[180px] scale-95 opacity-40 z-10 blur-sm"
                    : "-translate-x-[540px] scale-95 opacity-40 z-10 blur-sm"
                }
              `}
            >
              <div className="relative w-[320px] bg-gray-800 rounded-3xl px-6 pt-16 pb-8 shadow-2xl text-center overflow-visible">
                {/* PROFILE */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-900 shadow-lg"
                  />
                </div>

                <StarRating count={review.rating} />

                <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                  “{review.text}”
                </p>

                <p className="mt-5 text-white font-semibold">
                  {review.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex justify-center">
        <div className="relative w-full max-w-sm bg-gray-800 rounded-3xl px-6 pt-16 pb-8 shadow-2xl text-center overflow-visible">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <img
              src={reviews[index].img}
              alt={reviews[index].name}
              className="w-20 h-20 rounded-full border-4 border-gray-900 shadow-lg"
            />
          </div>

          <StarRating count={reviews[index].rating} />

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            “{reviews[index].text}”
          </p>

          <p className="mt-5 text-white font-semibold">
            {reviews[index].name}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ratings;
