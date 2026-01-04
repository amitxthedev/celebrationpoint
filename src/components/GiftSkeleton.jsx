function GiftSkeleton() {
  return (
    <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-white/10 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-40 bg-gray-700" />

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-700 rounded w-1/4" />

        <div className="flex gap-2 pt-2">
          <div className="flex-1 h-9 bg-gray-700 rounded" />
          <div className="flex-1 h-9 bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
}

export default GiftSkeleton;
