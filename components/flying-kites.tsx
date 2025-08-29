import ChainSwing from "./chain-swing";

export default function FlyingKites() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bottom-10 md:bottom-0">
        {/* Left Child with Kite */}
        <div className="animate-walk-left absolute bottom-6 z-5">
          {/* Child Figure - Much Smaller */}
          <div className="relative">
            <div className="mb-1 h-4 w-4 rounded-full bg-orange-400"></div>
            <div className="mx-auto h-6 w-3 rounded-sm bg-blue-500"></div>
            <div className="flex justify-center">
              <div className="mx-0.5 h-3 w-1 rounded-full bg-yellow-600"></div>
              <div className="mx-0.5 h-3 w-1 rounded-full bg-yellow-600"></div>
            </div>

            {/* Kite Handle/Controller in child's hand */}
            <div className="animate-handle-left absolute top-4 -left-1">
              <div className="bg-brown-600 h-1 w-2 rounded-sm"></div>
              <div className="mt-0.5 h-0.5 w-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Complete Kite System - String + Kite + Tail as one unit */}
          <div className="animate-kite-system-left absolute bottom-4 left-2">
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
                className="drop-shadow-lg"
              >
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
              <div className="animate-tail-wave absolute top-7 left-3">
                <div className="mb-0.5 h-4 w-1 rounded-full bg-red-400"></div>
                <div className="mb-0.5 h-4 w-1 rounded-full bg-blue-400"></div>
                <div className="mb-0.5 h-4 w-1 rounded-full bg-green-400"></div>
                <div className="mb-0.5 h-4 w-1 rounded-full bg-yellow-400"></div>
                <div className="h-4 w-1 rounded-full bg-orange-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Child with Kite */}
        <div className="animate-walk-right absolute bottom-6 z-5">
          {/* Child Figure - Much Smaller */}
          <div className="relative">
            <div className="mb-1 h-4 w-4 rounded-full bg-pink-400"></div>
            <div className="mx-auto h-6 w-3 rounded-sm bg-purple-500"></div>
            <div className="flex justify-center">
              <div
                className="mx-0.5 h-3 w-1 rounded-full"
                style={{ backgroundColor: "#8B4513" }}
              ></div>
              <div
                className="mx-0.5 h-3 w-1 rounded-full"
                style={{ backgroundColor: "#8B4513" }}
              ></div>
            </div>

            {/* Kite Handle/Controller in child's hand */}
            <div className="animate-handle-right absolute top-4 -right-1">
              <div className="bg-brown-600 h-1 w-2 rounded-sm"></div>
              <div className="mt-0.5 h-0.5 w-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Complete Kite System - String + Kite + Tail as one unit */}
          <div className="animate-kite-system-right absolute right-2 bottom-4">
            {/* Smooth Curved String */}
            <svg width="80" height="320" className="absolute right-0 bottom-0">
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
              style={{ bottom: "320px", right: "46px" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                className="drop-shadow-lg"
              >
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
              <div className="animate-tail-wave-reverse absolute top-7 left-3">
                <div className="mb-0.5 h-4 w-1 rounded-full bg-purple-400"></div>
                <div className="mb-0.5 h-4 w-1 rounded-full bg-pink-400"></div>
                <div className="mb-0.5 h-4 w-1 rounded-full bg-orange-400"></div>
                <div className="mb-0.5 h-4 w-1 rounded-full bg-cyan-400"></div>
                <div className="h-4 w-1 rounded-full bg-lime-400"></div>
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
