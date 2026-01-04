import { useEffect, useState } from "react";

function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-gray-900 via-gray-900 to-black px-6 py-20">
      <div
        className={`max-w-5xl mx-auto text-center transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About <span className="text-blue-400">CelebrationPoint</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-300">
          Making every celebration meaningful, memorable, and magical.
        </p>

        {/* Content */}
        <div className="mt-12 text-gray-400 text-lg leading-relaxed space-y-6">
          <p>
            <span className="text-white font-semibold">CelebrationPoint</span> is
            a premium online gift store designed to help you express emotions
            through thoughtful gifting. Whether it’s a birthday, anniversary,
            festival, or a special surprise — we curate gifts that truly matter.
          </p>

          <p>
            Our mission is simple: to make gifting easy, beautiful, and
            unforgettable. Each product is handpicked with care, quality, and
            elegance in mind.
          </p>

          <p>
            We believe that a gift is not just an item — it’s a feeling, a
            memory, and a story. And we’re here to help you tell that story the
            right way.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-blue-400">5K+</h3>
            <p className="text-gray-300 mt-2">Happy Customers</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-blue-400">500+</h3>
            <p className="text-gray-300 mt-2">Curated Gifts</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
            <p className="text-gray-300 mt-2">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
