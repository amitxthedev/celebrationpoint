import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  /* 🔹 CART CONTEXT */
  const { cart } = useCart();

  /* 🔹 REAL-TIME CART COUNT */
  const cartCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  /* 🔹 ACTIVE LINK STYLE */
  const navLinkClass = (path) =>
    `hover:text-white transition ${
      location.pathname === path
        ? "text-white"
        : "text-gray-300"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur border-b border-gray-800">
      {/* TOP BAR */}
      <div className="w-full px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="text-white font-semibold text-lg">
            CelebrationPoint
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/" className={navLinkClass("/")}>Home</Link>
          <Link to="/gifts" className={navLinkClass("/gifts")}>Gifts</Link>
          <Link to="/about" className={navLinkClass("/about")}>About</Link>
          <Link to="/contact" className={navLinkClass("/contact")}>Contact</Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-md px-3 py-1.5">
            <input
              type="text"
              placeholder="Search gifts..."
              className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500 w-40"
            />
          </div>

          {/* CART ICON */}
          <Link
            to="/cart"
            className="relative bg-gray-800 hover:bg-gray-700 p-2 rounded-md text-gray-300 hover:text-white transition"
          >
            {/* BADGE */}
            {cartCount > 0 && (
              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  min-w-[18px]
                  h-[18px]
                  px-1
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-500
                  text-white
                  text-[11px]
                  font-bold
                "
              >
                {cartCount}
              </span>
            )}

            {/* ICON */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386a.75.75 0 01.728.568L5.25 7.5m0 0h13.5l-1.35 6.75a.75.75 0 01-.728.6H7.125a.75.75 0 01-.728-.6L5.25 7.5zm2.25 11.25a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>
          </Link>

          {/* ACCOUNT */}
          <Link
            to="/account"
            className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
              />
            </svg>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-4 text-gray-300">
          <Link to="/" onClick={() => setOpen(false)} className="block text-lg hover:text-white">Home</Link>
          <Link to="/gifts" onClick={() => setOpen(false)} className="block text-lg hover:text-white">Gifts</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block text-lg hover:text-white">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-lg hover:text-white">Contact</Link>
          <Link to="/cart" onClick={() => setOpen(false)} className="block text-lg hover:text-white">Cart</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
