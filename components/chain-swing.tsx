const ChainSwing = () => {
  return (
    <>
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-5"
        style={{ perspective: "800px" }}>
        {/* Static branch (does not animate) */}
        <div className="absolute top-0 left-0 transform -translate-x-1/2 w-16 h-2 bg-amber-800 rounded-full border border-amber-900"></div>

        {/* Animated group: chains + seat + child (single transform so they stay attached) */}
        <div
          className="absolute top-1 left-0 w-[140px] h-[140px] transform -translate-x-1/2 animate-swing-3d"
          style={{ transformOrigin: "50% 0%", transformStyle: "preserve-3d" }}>
          {/* Chains */}
          <svg
            width="140"
            height="140"
            className="absolute inset-0 left-[50%]"
            style={{ pointerEvents: "none" }}>
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
            style={{ top: 108, left: "100%", transform: "translateX(-50%)" }}>
            <div className="relative">
              <div className="w-16 h-1 bg-amber-700 rounded border border-amber-800 shadow-md"></div>
              <div className="absolute -top-0.5 -left-0 w-1.5 h-1.5 bg-gray-600 rounded-full border border-gray-800"></div>
              <div className="absolute -top-0.5 right-0 w-1.5 h-1.5 bg-gray-600 rounded-full border border-gray-800"></div>
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                <div className="w-3.5 h-3.5 bg-rose-400 rounded-full mb-0.5 mx-auto border border-rose-500"></div>
                <div className="w-3 h-4 bg-indigo-500 rounded-sm mx-auto border border-indigo-600"></div>
              </div>
              <div className="absolute -top-5 left-0 w-1 h-3 bg-yellow-500 rounded-full transform rotate-20"></div>
              <div className="absolute -top-5 right-0 w-1 h-3 bg-yellow-500 rounded-full transform -rotate-20"></div>
              <div className="absolute top-0.5 left-5 w-0.5 h-5 bg-blue-600 rounded-full"></div>
              <div className="absolute top-0.5 right-5 w-0.5 h-5 bg-blue-600 rounded-full"></div>
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
