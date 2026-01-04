import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

/* ============================================================
   CHECKOUT PAGE
   ============================================================
   ✔ Address Form
   ✔ Payment Selection
   ✔ Order Summary
   ✔ Prevents wrong redirects
   ✔ Clears cart only after order
   ✔ Redirects ONLY to order-success
   ============================================================ */

function Checkout() {
  const navigate = useNavigate();
  const { cart, total, placeOrder } = useCart();

  /* ------------------------------------------------------------
     FLAG TO PREVENT WRONG REDIRECT
     (critical fix)
  ------------------------------------------------------------ */
  const isPlacingOrder = useRef(false);

  /* ------------------------------------------------------------
     ADDRESS STATE
  ------------------------------------------------------------ */
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  /* ------------------------------------------------------------
     PAYMENT STATE
  ------------------------------------------------------------ */
  const [paymentMethod, setPaymentMethod] = useState("cod");

  /* ------------------------------------------------------------
     SAFE EMPTY CART REDIRECT
     - Redirect ONLY if user manually opens checkout
     - NOT when placing order
  ------------------------------------------------------------ */
  useEffect(() => {
    if (cart.length === 0 && !isPlacingOrder.current) {
      navigate("/gifts");
    }
  }, [cart, navigate]);

  /* ------------------------------------------------------------
     INPUT HANDLER
  ------------------------------------------------------------ */
  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  /* ------------------------------------------------------------
     PLACE ORDER HANDLER
  ------------------------------------------------------------ */
  const handlePlaceOrder = () => {
    // Validate address
    if (
      !address.name ||
      !address.phone ||
      !address.address ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please fill all address fields");
      return;
    }

    // 🔒 Block cart redirect
    isPlacingOrder.current = true;

    // Save order
    placeOrder({
      address,
      paymentMethod,
    });

    // ⏳ Navigate AFTER state settles
    setTimeout(() => {
      navigate("/order-success");
    }, 0);
  };

  /* ------------------------------------------------------------
     RENDER
  ------------------------------------------------------------ */
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-16">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-10">

        {/* =====================================================
           LEFT SECTION – DELIVERY ADDRESS
        ===================================================== */}
        <div className="lg:col-span-2 bg-[#0f172a] border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-6">
            Delivery Address
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={address.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="input"
            />

            <input
              name="phone"
              value={address.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input"
            />

            <input
              name="address"
              value={address.address}
              onChange={handleChange}
              placeholder="Full Address"
              className="input md:col-span-2"
            />

            <input
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="City"
              className="input"
            />

            <input
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="input"
            />
          </div>
        </div>

        {/* =====================================================
           RIGHT SECTION – ORDER SUMMARY
        ===================================================== */}
        <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6 shadow-xl h-fit">
          <h2 className="text-xl font-semibold text-white mb-6">
            Order Summary
          </h2>

          {/* ITEMS */}
          <div className="space-y-3 mb-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-gray-300 text-sm"
              >
                <span>
                  {item.title} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 my-4" />

          {/* TOTAL */}
          <div className="flex justify-between text-white font-bold text-lg mb-6">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          {/* =================================================
             PAYMENT METHODS
          ================================================= */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">
              Payment Method
            </h3>

            <div className="space-y-3">
              {/* UPI */}
              <label
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
                ${
                  paymentMethod === "upi"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <input
                  type="radio"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                />
                <span className="text-white">
                  UPI (Google Pay / PhonePe / Paytm)
                </span>
              </label>

              {/* COD */}
              <label
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
                ${
                  paymentMethod === "cod"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <span className="text-white">
                  Cash on Delivery
                </span>
              </label>
            </div>
          </div>

          {/* PLACE ORDER */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* =====================================================
         INPUT STYLES
      ===================================================== */}
      <style>{`
        .input {
          background: #020617;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 12px;
          border-radius: 10px;
          color: white;
          outline: none;
          font-size: 14px;
        }
        .input:focus {
          border-color: #3b82f6;
        }
      `}</style>
    </section>
  );
}

export default Checkout;
