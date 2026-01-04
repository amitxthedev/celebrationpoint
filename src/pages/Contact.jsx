import { useEffect, useState } from "react";

function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-gray-900 via-gray-900 to-black px-6 py-20">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Get in <span className="text-blue-400">Touch</span>
        </h1>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Have a question, feedback, or need help choosing the perfect gift?
          We’re here for you.
        </p>

        {/* Content Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT INFO */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">
                Customer Support
              </h3>
              <p className="text-gray-400 mt-2">
                Our support team is available 24/7 to help you with your orders.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">
                Email
              </h3>
              <p className="text-gray-400 mt-2">
                support@celebrationpoint.com
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">
                Phone
              </h3>
              <p className="text-gray-400 mt-2">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="bg-gray-800 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-gray-200 outline-none focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-gray-200 outline-none focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-gray-200 outline-none focus:border-blue-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] active:scale-95 transition-all text-white font-semibold py-3 rounded-md shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
