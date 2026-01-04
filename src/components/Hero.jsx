import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
  "https://images.unsplash.com/photo-1512909006721-3d6018887383",
  "https://images.unsplash.com/photo-1607082349566-1870e4b34b0c",
];

const words = ["Birthdays", "Anniversaries", "Special Moments"];

function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [show, setShow] = useState(false);

  /* Entrance animation */
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  /* Typing effect */
  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const t = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 110);
      return () => clearTimeout(t);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1600);
      return () => clearTimeout(pause);
    }
  }, [charIndex, wordIndex]);

  /* Image slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative min-h-screen
        bg-gradient-to-b from-gray-900 via-gray-900 to-black
        flex items-center overflow-hidden
        pt-28 md:pt-36
      "
    >
      <div className="w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div
          className={`text-white transition-all duration-1000 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <br />
            <span className="text-blue-400">CelebrationPoint</span>
          </h1>

          <p className="mt-5 text-xl text-gray-300">
            Perfect gifts for{" "}
            <span className="text-white font-semibold">
              {text}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </p>

          <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
            Discover premium gifts curated to make every celebration
            unforgettable. Thoughtful, elegant, and memorable.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="/gifts"
              className="bg-blue-500 hover:bg-blue-600
                         hover:scale-105 active:scale-95
                         transition-all text-white
                         px-6 py-3 rounded-md font-semibold shadow-lg"
            >
              Explore Gifts
            </Link>

            <Link
              to="/about"
              className="border border-gray-600 hover:border-white
                         hover:scale-105 active:scale-95
                         transition-all text-white
                         px-6 py-3 rounded-md"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
          {images.map((img, i) => (
            <img
              key={i}
              src={`${img}?auto=format&fit=crop&w=900&q=80`}
              alt="Gift shop"
              className={`absolute inset-0 w-full h-full object-cover
                transition-all duration-1000 ease-in-out
                ${i === imgIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
