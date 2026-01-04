import { Link } from "react-router-dom";

function SeeMoreCard({ category }) {
  return (
    <Link
      to={`/gifts/${category.toLowerCase()}`}
      className="flex flex-col items-center justify-center
                 bg-[#0f172a] border border-white/10 rounded-xl
                 hover:border-blue-500 transition-all
                 hover:scale-[1.02] group"
    >
      <div className="w-14 h-14 rounded-full bg-blue-500/20
                      flex items-center justify-center
                      group-hover:bg-blue-500 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue-400 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>

      <p className="mt-4 text-white font-semibold">
        See More
      </p>

      <span className="text-sm text-gray-400">
        {category} Gifts
      </span>
    </Link>
  );
}

export default SeeMoreCard;
