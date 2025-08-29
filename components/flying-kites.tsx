import ChainSwing from "./chain-swing";

export default function FlyingKites() {
  return (
    <>
      <div className="absolute inset-0 bottom-10 md:bottom-0 pointer-events-none">
        {/* Left Child with Kite */}
        <div className="absolute bottom-6 z-5 animate-walk-left">
          {/* Child Figure - Much Smaller */}
          <div className="relative">
            <div className="w-4 h-4 bg-orange-400 rounded-full mb-1"></div>
            <div className="w-3 h-6 bg-blue-500 rounded-sm mx-auto"></div>
            <div className="flex justify-center">
              <div className="w-1 h-3 bg-yellow-600 rounded-full mx-0.5"></div>
              <div className="w-1 h-3 bg-yellow-600 rounded-full mx-0.5"></div>
            </div>

            {/* Kite Handle/Controller in child's hand */}
            <div className="absolute top-4 -left-1 animate-handle-left">
              <div className="w-2 h-1 bg-brown-600 rounded-sm"></div>
              <div className="w-2 h-0.5 bg-gray-300 rounded-full mt-0.5"></div>
            </div>
          </div>

          {/* Complete Kite System - String + Kite + Tail as one unit */}
          <div className="absolute bottom-4 left-2 animate-kite-system-left">
            {/* Smooth Curved String */}
            <svg width="80" height="320" className="absolute bottom-0 left-0">
              <path
                d="M 2 320 Q 12 280 18 240 Q 22 200 28 160 Q 32 120 38 80 Q 42 40 48 0"
                stroke="rgba(156, 163, 175, 0.7)"
                strokeWidth="0.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Kite at the end of string */}
            <div className="absolute" style={{ bottom: "320px", left: "46px" }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                className="drop-shadow-lg">
                <polygon
                  points="20,2 35,20 20,35 5,20"
                  fill="red"
                  stroke="darkred"
                  strokeWidth="2"
                />
                <polygon points="20,2 35,20 20,20" fill="yellow" />
                <polygon points="5,20 20,20 20,35" fill="blue" />
                <polygon points="20,20 35,20 20,35" fill="green" />
              </svg>

              {/* Kite Tail attached to kite */}
              <div className="absolute top-7 left-3 animate-tail-wave">
                <div className="w-1 h-4 bg-red-400 mb-0.5 rounded-full"></div>
                <div className="w-1 h-4 bg-blue-400 mb-0.5 rounded-full"></div>
                <div className="w-1 h-4 bg-green-400 mb-0.5 rounded-full"></div>
                <div className="w-1 h-4 bg-yellow-400 mb-0.5 rounded-full"></div>
                <div className="w-1 h-4 bg-orange-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Child with Kite */}
        <div className="absolute bottom-6 z-5 animate-walk-right">
          {/* Child Figure - Much Smaller */}
          <div className="relative">
            <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
            <div className="w-3 h-6 bg-purple-500 rounded-sm mx-auto"></div>
            <div className="flex justify-center">
              <div
                className="w-1 h-3 rounded-full mx-0.5"
                style={{ backgroundColor: "#8B4513" }}></div>
              <div
                className="w-1 h-3 rounded-full mx-0.5"
                style={{ backgroundColor: "#8B4513" }}></div>
            </div>

            {/* Kite Handle/Controller in child's hand */}
            <div className="absolute top-4 -right-1 animate-handle-right">
              <div className="w-2 h-1 bg-brown-600 rounded-sm"></div>
              <div className="w-2 h-0.5 bg-gray-300 rounded-full mt-0.5"></div>
            </div>
          </div>

          {/* Complete Kite System - String + Kite + Tail as one unit */}
          <div className="absolute bottom-4 right-2 animate-kite-system-right">
            {/* Smooth Curved String */}
            <svg width="80" height="320" className="absolute bottom-0 right-0">
              <path
                d="M 78 320 Q 68 280 62 240 Q 58 200 52 160 Q 48 120 42 80 Q 38 40 32 0"
                stroke="rgba(156, 163, 175, 0.7)"
                strokeWidth="0.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Kite at the end of string */}
            <div
              className="absolute"
              style={{ bottom: "320px", right: "46px" }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                className="drop-shadow-lg">
                <polygon
                  points="20,2 35,20 20,35 5,20"
                  fill="purple"
                  stroke="darkviolet"
                  strokeWidth="2"
                />
                <polygon points="20,2 35,20 20,20" fill="orange" />
                <polygon points="5,20 20,20 20,35" fill="pink" />
                <polygon points="20,20 35,20 20,35" fill="cyan" />
              </svg>

              {/* Kite Tail attached to kite */}
              <div className="absolute top-7 left-3 animate-tail-wave-reverse">
                <div className="w-1 h-4 bg-purple-400 mb-0.5 rounded-full"></div>
                <div className="w-1 h-4 bg-pink-400 mb-0.5 rounded-full"></div>
                <div className="w-1 h-4 bg-orange-400 mb-0.5 rounded-full"></div>
                <div className="w-1 h-4 bg-cyan-400 mb-0.5 rounded-full"></div>
                <div className="w-1 h-4 bg-lime-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chain Swing attached to top of screen */}
        <ChainSwing />
      </div>

      <style jsx>{`
        @keyframes handle-left {
          0%,
          100% {
            transform: rotate(-5deg);
          }
          25% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(-8deg);
          }
          75% {
            transform: rotate(-3deg);
          }
        }

        @keyframes handle-right {
          0%,
          100% {
            transform: rotate(5deg);
          }
          25% {
            transform: rotate(2deg);
          }
          50% {
            transform: rotate(8deg);
          }
          75% {
            transform: rotate(3deg);
          }
        }

        @keyframes kite-system-left {
          0%,
          100% {
            transform: rotate(1deg) translateX(0px) translateY(0px);
          }
          25% {
            transform: rotate(4deg) translateX(-2px) translateY(-1px);
          }
          50% {
            transform: rotate(-1deg) translateX(1px) translateY(-3px);
          }
          75% {
            transform: rotate(2deg) translateX(-1px) translateY(-1px);
          }
        }

        @keyframes kite-system-right {
          0%,
          100% {
            transform: rotate(-1deg) translateX(0px) translateY(0px);
          }
          25% {
            transform: rotate(-4deg) translateX(2px) translateY(-1px);
          }
          50% {
            transform: rotate(1deg) translateX(-1px) translateY(-3px);
          }
          75% {
            transform: rotate(-2deg) translateX(1px) translateY(-1px);
          }
        }

        @keyframes walk-left {
          0% {
            left: 2rem;
          }
          50% {
            left: 20vw;
          }
          100% {
            left: 2rem;
          }
        }

        @keyframes walk-right {
          0% {
            right: 2rem;
          }
          50% {
            right: 20vw;
          }
          100% {
            right: 2rem;
          }
        }

        @keyframes tail-wave {
          0%,
          100% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(3px) rotate(5deg);
          }
          50% {
            transform: translateX(-1px) rotate(-3deg);
          }
          75% {
            transform: translateX(2px) rotate(2deg);
          }
        }

        @keyframes tail-wave-reverse {
          0%,
          100% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(-3px) rotate(-5deg);
          }
          50% {
            transform: translateX(1px) rotate(3deg);
          }
          75% {
            transform: translateX(-2px) rotate(-2deg);
          }
        }

        .animate-handle-left {
          animation: handle-left 4s ease-in-out infinite;
        }

        .animate-handle-right {
          animation: handle-right 4s ease-in-out infinite;
        }

        .animate-kite-system-left {
          animation: kite-system-left 4s ease-in-out infinite;
        }

        .animate-kite-system-right {
          animation: kite-system-right 4s ease-in-out infinite;
        }

        .animate-walk-left {
          animation: walk-left 12s ease-in-out infinite;
        }

        .animate-walk-right {
          animation: walk-right 14s ease-in-out infinite;
        }

        .animate-tail-wave {
          animation: tail-wave 2s ease-in-out infinite;
        }

        .animate-tail-wave-reverse {
          animation: tail-wave-reverse 2.2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
