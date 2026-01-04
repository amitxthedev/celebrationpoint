import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  /* --------------------------------
     SAFETY REDIRECT
     (if user refreshes page directly)
  -------------------------------- */
  useEffect(() => {
    const order = localStorage.getItem("lastOrder");
    if (!order) {
      navigate("/");
    }
  }, [navigate]);

  const order = JSON.parse(localStorage.getItem("lastOrder") || "{}");

  if (!order || !order.items) return null;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-20">
      <div className="max-w-[900px] mx-auto text-center">

        {/* SUCCESS ICON */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center animate-pulse">
          <svg
            className="w-12 h-12 text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-400 mb-10">
          Thank you for shopping with <span className="text-blue-400">CelebrationPoint</span>
        </p>

        {/* ORDER CARD */}
        <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6 shadow-xl text-left">

          {/* ORDER INFO */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-2">Delivery Address</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {order.address.name}<br />
                {order.address.phone}<br />
                {order.address.address}<br />
                {order.address.city} – {order.address.pincode}
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Payment Method</h3>
              <p className="text-gray-400 text-sm">
                {order.paymentMethod === "upi"
                  ? "UPI Payment"
                  : "Cash on Delivery"}
              </p>
            </div>
          </div>

          {/* ITEMS */}
          <h3 className="text-white font-semibold mb-4">
            Ordered Items
          </h3>

          <div className="space-y-4 mb-6">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-[#020617] border border-white/10 rounded-lg p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <p className="text-white font-medium">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Qty: {item.qty}
                  </p>
                </div>

                <p className="text-blue-400 font-semibold">
                  ₹{item.price * item.qty}
                </p>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="border-t border-white/10 pt-4 flex justify-between text-white font-bold text-lg">
            <span>Total Paid</span>
            <span>₹{order.total}</span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/gifts"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccess;
