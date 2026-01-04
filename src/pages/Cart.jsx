import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQty, total } = useCart();
  const navigate = useNavigate(); // ✅ FIX

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-16">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Your <span className="text-blue-400">Cart</span>
        </h1>

        {/* EMPTY CART */}
        {cart.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg mb-6">
              Your cart is empty 🛒
            </p>
            <Link
              to="/gifts"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            >
              Browse Gifts
            </Link>
          </div>
        )}

        {/* CART CONTENT */}
        {cart.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT: ITEMS */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-blue-400 font-bold mt-1">
                      ₹{item.price}
                    </p>

                    {/* QTY + REMOVE */}
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-gray-400">Qty:</span>

                      <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-1">
                        <button
                          onClick={() =>
                            updateQty(item.id, item.qty - 1)
                          }
                          className="text-white hover:text-blue-400"
                        >
                          −
                        </button>

                        <span className="text-white">
                          {item.qty}
                        </span>

                        <button
                          onClick={() =>
                            updateQty(item.id, item.qty + 1)
                          }
                          className="text-white hover:text-blue-400"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-400 hover:text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: SUMMARY */}
            <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6 h-fit shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-400 mb-3">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between text-gray-400 mb-3">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="border-t border-white/10 my-4"></div>

              <div className="flex justify-between text-white font-bold text-lg mb-6">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              {/* ✅ FIXED BUTTON */}
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition font-semibold"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/gifts"
                className="block text-center text-blue-400 hover:underline mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
