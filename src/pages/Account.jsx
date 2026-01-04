import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Account() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const logout = () => {
    clearCart();
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-10">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[260px_1fr] gap-8">

        {/* ---------------- SIDEBAR ---------------- */}
        <aside className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-xl h-fit">

          {/* USER */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
              U
            </div>
            <div>
              <p className="text-white font-semibold">Guest User</p>
              <p className="text-gray-400 text-sm">guest@demo.com</p>
            </div>
          </div>

          {/* MENU */}
          <nav className="space-y-3 text-gray-300">

            <SidebarLink icon="user" label="Profile" />
            <SidebarLink icon="orders" label="My Orders" to="/orders" />
            <SidebarLink icon="address" label="Saved Address" />
            <SidebarLink icon="payment" label="Payment Methods" />
            <SidebarLink icon="cart" label="My Cart" to="/cart" />

            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition"
            >
              <IconLogout />
              Logout
            </button>
          </nav>
        </aside>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <main className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 shadow-xl">

          <h1 className="text-3xl font-bold text-white mb-6">
            Account <span className="text-blue-400">Overview</span>
          </h1>

          {/* INFO CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <InfoCard
              title="My Orders"
              desc="View and track your orders"
              btn="View Orders"
              to="/orders"
            />

            <InfoCard
              title="Saved Address"
              desc="Manage delivery addresses"
              btn="Manage"
            />

            <InfoCard
              title="Payment Methods"
              desc="UPI / COD preferences"
              btn="Manage"
            />
          </div>

        </main>
      </div>
    </section>
  );
}

export default Account;

/* ---------------- COMPONENTS ---------------- */

function SidebarLink({ icon, label, to = "#" }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition"
    >
      {icon === "user" && <IconUser />}
      {icon === "orders" && <IconOrders />}
      {icon === "address" && <IconAddress />}
      {icon === "payment" && <IconPayment />}
      {icon === "cart" && <IconCart />}
      <span>{label}</span>
    </Link>
  );
}

function InfoCard({ title, desc, btn, to = "#" }) {
  return (
    <div className="bg-[#020617] border border-white/10 rounded-xl p-6">
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>
      <Link
        to={to}
        className="inline-block text-blue-400 hover:underline text-sm"
      >
        {btn}
      </Link>
    </div>
  );
}

/* ---------------- ICONS ---------------- */

function IconUser() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
    </svg>
  );
}

function IconOrders() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6M4 6h16v12H4z" />
    </svg>
  );
}

function IconAddress() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
    </svg>
  );
}

function IconPayment() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 3h2l3.6 7.59a2 2 0 001.8 1.21h7.6a2 2 0 001.8-1.21L21 6H6" />
    </svg>
  );
}

function IconLogout() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12h-9m6-3l3 3-3 3" />
    </svg>
  );
}
