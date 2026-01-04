import { useEffect, useMemo, useState } from "react";
import gifts from "../data/gifts";
import GiftCard from "../components/GiftCard";
import GiftSkeleton from "../components/GiftSkeleton";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

function Gifts() {
  /* --------------------------------------------------
     SAFETY
  -------------------------------------------------- */
  const safeGifts = Array.isArray(gifts) ? gifts : [];

  /* --------------------------------------------------
     STATES
  -------------------------------------------------- */
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const { addToCart } = useCart();

  /* --------------------------------------------------
     CATEGORIES
  -------------------------------------------------- */
  const categories = useMemo(() => {
    return ["All", ...new Set(safeGifts.map((g) => g.category))];
  }, [safeGifts]);

  /* --------------------------------------------------
     PRICE FILTER
  -------------------------------------------------- */
  const filterByPrice = (gift) => {
    if (!gift?.price) return false;

    switch (priceRange) {
      case "under500":
        return gift.price < 500;
      case "500to1000":
        return gift.price >= 500 && gift.price <= 1000;
      case "1000to2000":
        return gift.price > 1000 && gift.price <= 2000;
      case "above2000":
        return gift.price > 2000;
      default:
        return true;
    }
  };

  /* --------------------------------------------------
     FILTERED GIFTS
  -------------------------------------------------- */
  const filteredGifts = useMemo(() => {
    return safeGifts.filter((gift) => {
      if (!gift?.id) return false;

      const categoryMatch =
        selectedCategory === "All" ||
        gift.category === selectedCategory;

      return categoryMatch && filterByPrice(gift);
    });
  }, [safeGifts, selectedCategory, priceRange]);

  /* --------------------------------------------------
     FAKE API LOADER
  -------------------------------------------------- */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  /* --------------------------------------------------
     RESET ON FILTER CHANGE
  -------------------------------------------------- */
  useEffect(() => {
    setVisibleCount(10);
  }, [selectedCategory, priceRange]);

  /* --------------------------------------------------
     INFINITE SCROLL
  -------------------------------------------------- */
  useEffect(() => {
    if (loading) return;

    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 300
      ) {
        setVisibleCount((prev) =>
          Math.min(prev + 5, filteredGifts.length)
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading, filteredGifts.length]);

  /* --------------------------------------------------
     ADD TO CART HANDLER (WITH TOAST)
  -------------------------------------------------- */
  const handleAddToCart = (gift) => {
    addToCart(gift);

    toast.success(`${gift.title} added to cart`, {
      style: {
        background: "#020617",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.1)",
      },
    });
  };

  /* --------------------------------------------------
     RENDER
  -------------------------------------------------- */
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-16">
      <div className="max-w-[1600px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Our <span className="text-blue-400">Gifts</span>
            </h1>
            <p className="text-gray-400 mt-2">
              Handpicked premium gifts for every celebration.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            {/* CATEGORY */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#0f172a] border border-white/15 text-white px-4 py-2 rounded-lg hover:border-blue-400 transition"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#0f172a]">
                  {cat}
                </option>
              ))}
            </select>

            {/* PRICE */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-[#0f172a] border border-white/15 text-white px-4 py-2 rounded-lg hover:border-blue-400 transition"
            >
              <option value="All">All Prices</option>
              <option value="under500">Under ₹500</option>
              <option value="500to1000">₹500 – ₹1000</option>
              <option value="1000to2000">₹1000 – ₹2000</option>
              <option value="above2000">Above ₹2000</option>
            </select>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {loading &&
            Array.from({ length: 10 }).map((_, i) => (
              <GiftSkeleton key={i} />
            ))}

          {!loading &&
            filteredGifts.slice(0, visibleCount).map((gift, index) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                index={index}
                onAddToCart={() => handleAddToCart(gift)}
              />
            ))}
        </div>

        {/* EMPTY STATE */}
        {!loading && filteredGifts.length === 0 && (
          <p className="text-center text-gray-400 mt-20">
            No gifts found for selected filters.
          </p>
        )}
      </div>
    </section>
  );
}

export default Gifts;
