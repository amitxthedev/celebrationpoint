import { Link } from "react-router-dom";

function Orders() {
  // TEMP DATA (later connect with backend / context)
  const orders = [
    {
      id: "ORD123456",
      date: "12 Sep 2025",
      total: 2498,
      status: "Delivered",
      items: [
        {
          title: "Premium Gift Hamper",
          image:
            "https://images.unsplash.com/photo-1607344645866-009c320b63e0",
        },
        {
          title: "Birthday Mug & Card Set",
          image:
            "https://images.unsplash.com/photo-1523293836413-4a3a6d6d7c0d",
        },
      ],
    },
    {
      id: "ORD123457",
      date: "25 Sep 2025",
      total: 999,
      status: "Processing",
      items: [
        {
          title: "Luxury Chocolate Box",
          image:
            "https://images.unsplash.com/photo-1542826438-8b6c8f6e3e02",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-16">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-blue-400">Orders</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Track, view, and manage your recent orders
          </p>
        </div>

        {/* EMPTY STATE */}
        {orders.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg mb-6">
              You haven’t placed any orders yet.
            </p>
            <Link
              to="/gifts"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {/* ORDERS LIST */}
        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="
                bg-[#0f172a]
                border border-white/10
                rounded-2xl
                p-6
                shadow-xl
                transition
                hover:shadow-2xl
              "
            >
              {/* ORDER HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-gray-400 text-sm">
                    Order ID
                  </p>
                  <p className="text-white font-semibold">
                    {order.id}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Order Date
                  </p>
                  <p className="text-white">
                    {order.date}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Total Amount
                  </p>
                  <p className="text-blue-400 font-bold">
                    ₹{order.total}
                  </p>
                </div>

                <div>
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium
                      ${
                        order.status === "Delivered"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* ORDER ITEMS */}
              <div className="flex flex-wrap gap-4 mb-6">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex items-center gap-4
                      bg-[#020617]
                      border border-white/10
                      rounded-xl
                      p-3
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <p className="text-white text-sm font-medium line-clamp-2 max-w-[180px]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/orders/${order.id}`}
                  className="
                    px-5 py-2.5
                    rounded-lg
                    bg-blue-500
                    hover:bg-blue-600
                    text-white
                    text-sm
                    font-medium
                    transition
                  "
                >
                  View Details
                </Link>

                <button
                  className="
                    px-5 py-2.5
                    rounded-lg
                    border border-white/20
                    text-white
                    text-sm
                    hover:border-white/40
                    hover:bg-white/5
                    transition
                  "
                >
                  Download Invoice
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Orders;
