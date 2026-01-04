import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function GiftCard({ gift, index = 0 }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [visible, setVisible] = useState(false);

  /* --------------------------------------------------
     SAFETY GUARD
     Prevents blank / white page crashes
  -------------------------------------------------- */
  if (
    !gift ||
    typeof gift !== "object" ||
    !gift.id ||
    !gift.title ||
    typeof gift.price !== "number" ||
    !gift.image
  ) {
    return null;
  }

  /* --------------------------------------------------
     STAGGERED PREMIUM ENTRANCE
  -------------------------------------------------- */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 70);
    return () => clearTimeout(t);
  }, [index]);

  /* --------------------------------------------------
     HANDLERS
  -------------------------------------------------- */
  const goToDetails = () => {
    navigate(`/gifts/${gift.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(gift);
  };

  /* --------------------------------------------------
     RENDER
  -------------------------------------------------- */
  return (
    <div
      onClick={goToDetails}
      className={`
        group
        relative
        cursor-pointer
        rounded-2xl
        overflow-hidden

        bg-gradient-to-b
        from-[#0f172a]
        to-[#020617]

        border border-white/10
        shadow-[0_14px_45px_rgba(0,0,0,0.65)]

        transition-all
        duration-700
        ease-out

        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}

        hover:-translate-y-2
        hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)]
      `}
    >
      {/* --------------------------------------------------
         IMAGE (FIXED RATIO – NO BLACK GAP EVER)
      -------------------------------------------------- */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={gift.image}
          alt={gift.title}
          loading="lazy"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Image overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/70
          via-black/30
          to-transparent
        " />
      </div>

      {/* --------------------------------------------------
         CONTENT
      -------------------------------------------------- */}
      <div className="p-4">
        {/* TITLE */}
        <h3 className="
          text-white
          font-semibold
          text-[15px]
          md:text-base
          leading-snug
          line-clamp-2
        ">
          {gift.title}
        </h3>

        {/* PRICE */}
        <p className="
          mt-1
          text-blue-400
          font-bold
          text-lg
        ">
          ₹{gift.price}
        </p>

        {/* RATING (UI READY) */}
        <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
          ★★★★☆
          <span className="text-gray-400 ml-1 text-xs">(4.5)</span>
        </div>

        {/* ACTIONS */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToDetails();
            }}
            className="
              flex-1
              rounded-lg
              bg-blue-500
              hover:bg-blue-600
              text-white
              text-sm
              py-2
              font-medium
              shadow-md
              transition
            "
          >
            View
          </button>

          <button
            onClick={handleAddToCart}
            className="
              flex-1
              rounded-lg
              border border-white/15
              text-white
              text-sm
              py-2
              font-medium
              transition
              hover:border-white/40
              hover:bg-white/5
            "
          >
            Add
          </button>
        </div>
      </div>

      {/* --------------------------------------------------
         PREMIUM HOVER GLOW
      -------------------------------------------------- */}
      <div className="
        pointer-events-none
        absolute inset-0
        opacity-0
        group-hover:opacity-100
        transition
      ">
        <div className="
          absolute inset-0
          bg-gradient-to-r
          from-blue-500/10
          via-transparent
          to-blue-500/10
        " />
      </div>
    </div>
  );
}

export default GiftCard;
