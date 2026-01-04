function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-5 py-12">

        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="text-white text-lg font-semibold">
                CelebrationPoint
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Premium gifts curated to make every celebration unforgettable.
              Thoughtful, elegant, and delivered with care.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">
              {[
                {
                  d: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2z",
                },
                {
                  d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.09 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  d: "M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z",
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center
                             rounded-full bg-white/10 hover:bg-blue-500
                             transition-transform hover:scale-110"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path d={icon.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Gifts</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Shipping & Delivery</li>
              <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@celebrationpoint.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Mon – Sat: 9AM – 8PM</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CelebrationPoint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
