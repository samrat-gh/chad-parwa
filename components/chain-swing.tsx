const ChainSwing = () => {
  return (
    <>
      <div
        className="absolute top-0 left-1/2 z-5 -translate-x-1/2 transform"
        style={{ perspective: "800px" }}
      >
        {/* Static branch (does not animate) */}
        <div className="absolute top-0 left-0 h-2 w-16 -translate-x-1/2 transform rounded-full border border-amber-900 bg-amber-800"></div>

        {/* Animated group: chains + seat + child (single transform so they stay attached) */}
        <div
          className="animate-swing-3d absolute top-1 left-0 h-[140px] w-[140px] -translate-x-1/2 transform"
          style={{ transformOrigin: "50% 0%", transformStyle: "preserve-3d" }}
        >
          {/* Chains */}
          <svg
            width="140"
            height="140"
            className="absolute inset-0 left-[50%]"
            style={{ pointerEvents: "none" }}
          >
            <line
              x1="70"
              y1="0"
              x2="38"
              y2="108"
              stroke="#8B4513"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="70"
              y1="0"
              x2="102"
              y2="108"
              stroke="#8B4513"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Seat & child at chain endpoints */}
          <div
            className="absolute"
            style={{ top: 108, left: "100%", transform: "translateX(-50%)" }}
          >
            <div className="relative">
              <div className="h-1 w-16 rounded border border-amber-800 bg-amber-700 shadow-md"></div>
              <div className="absolute -top-0.5 -left-0 h-1.5 w-1.5 rounded-full border border-gray-800 bg-gray-600"></div>
              <div className="absolute -top-0.5 right-0 h-1.5 w-1.5 rounded-full border border-gray-800 bg-gray-600"></div>
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 transform">
                <div className="mx-auto mb-0.5 h-3.5 w-3.5 rounded-full border border-rose-500 bg-rose-400"></div>
                <div className="mx-auto h-4 w-3 rounded-sm border border-indigo-600 bg-indigo-500"></div>
              </div>
              <div className="absolute -top-5 left-0 h-3 w-1 rotate-20 transform rounded-full bg-yellow-500"></div>
              <div className="absolute -top-5 right-0 h-3 w-1 -rotate-20 transform rounded-full bg-yellow-500"></div>
              <div className="absolute top-0.5 left-5 h-5 w-0.5 rounded-full bg-blue-600"></div>
              <div className="absolute top-0.5 right-5 h-5 w-0.5 rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes swing-3d {
          0%,
          100% {
            transform: translateX(-50%) rotateX(0deg) scale(1);
          }
          25% {
            transform: translateX(-50%) rotateX(-15deg) scale(0.97);
          }
          50% {
            transform: translateX(-50%) rotateX(-28deg) scale(0.94);
          }
          75% {
            transform: translateX(-50%) rotateX(-15deg) scale(0.97);
          }
        }

        .animate-swing-3d {
          animation: swing-3d 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ChainSwing;
