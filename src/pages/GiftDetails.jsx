import { useParams, useNavigate } from "react-router-dom";
import gifts from "../data/gifts";
import GiftCard from "../components/GiftCard";
import { useState } from "react";

function GiftDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const product = gifts.find((g) => g.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Product not found
      </div>
    );
  }

  const related = gifts.filter(
    (g) => g.category === product.category && g.id !== product.id
  );

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black min-h-screen px-4 py-16">
      <div className="max-w-[1400px] mx-auto">

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-400 mb-6 hover:underline"
        >
          ← Back to Gifts
        </button>

        {/* PRODUCT */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-24">

          {/* IMAGE (NO EMPTY SPACE GUARANTEED) */}
          <div className="rounded-2xl overflow-hidden bg-black shadow-2xl self-start">
            <img
              src={product.image}
              alt={product.title}
              className="
                w-full
                object-contain
                max-h-[520px]
                bg-black
              "
            />
          </div>

          {/* DETAILS */}
          <div className="self-start">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {product.title}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-gray-400 text-sm">
                4.5 (2,431 ratings)
              </span>
            </div>

            {/* PRICE */}
            <div className="flex items-center gap-4 mt-5">
              <span className="text-blue-400 text-3xl font-bold">
                ₹{product.price}
              </span>
              <span className="line-through text-gray-500">
                ₹{product.price + 500}
              </span>
              <span className="text-green-400 font-medium">
                Save ₹500
              </span>
            </div>

            {/* STOCK */}
            <p className="mt-4 text-green-400 font-medium flex items-center gap-2">
              ✔ In Stock
            </p>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-400 leading-relaxed">
              This premium {product.category.toLowerCase()} gift is crafted to
              make your moments unforgettable. Elegant, meaningful, and
              carefully curated for special occasions.
            </p>

            {/* FEATURES */}
            <ul className="mt-6 space-y-2 text-gray-300">
              <li>• Premium quality packaging</li>
              <li>• Perfect for gifting</li>
              <li>• Carefully curated items</li>
              <li>• 100% satisfaction guarantee</li>
            </ul>

            {/* QTY */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-white">Qty:</span>
              <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-white hover:bg-white/10"
                >
                  −
                </button>
                <span className="px-4 text-white">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-2 text-white hover:bg-white/10"
                >
                  +
                </button>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium">
                Buy Now
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-xl">
                Add to Cart
              </button>
              <button className="border border-pink-500/40 text-pink-400 px-6 py-3 rounded-xl">
                ♥ Wishlist
              </button>
            </div>

            {/* DELIVERY */}
            <div className="mt-6 space-y-2 text-gray-400 text-sm">
              <p>🚚 Free delivery within 3–5 days</p>
              <p>🔒 Secure payment guaranteed</p>
            </div>
          </div>
        </div>

        {/* RELATED */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Related <span className="text-blue-400">{product.category}</span> Gifts
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
            {related.map((gift, index) => (
              <GiftCard key={gift.id} gift={gift} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiftDetails;
