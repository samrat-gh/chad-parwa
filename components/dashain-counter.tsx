"use client";

import { useEffect, useState, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";

// Devanagari digits map
const DEV_MAP = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

const toDevanagari = (input: string | number) => {
  return String(input).replace(/\d/g, (d) => DEV_MAP[Number(d)]);
};

// Simple descending counter animation
const DevnagariNumberFlow = ({
  value,
  duration = 1.0,
}: {
  value: number;
  duration?: number;
}) => {
  const [display, setDisplay] = useState<number>(value);
  const motionValue = useMotionValue(value);
  const activeAnim = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    // cancel previous animation
    if (activeAnim.current) {
      try {
        activeAnim.current.stop();
      } catch {}
      activeAnim.current = null;
    }

    // animate smoothly to new target
    activeAnim.current = animate(motionValue, value, {
      duration: duration,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad for smooth deceleration
      onUpdate: (v) => {
        setDisplay(Math.round(v));
      },
      onComplete: () => {
        setDisplay(value);
        activeAnim.current = null;
      },
    });

    return () => {
      if (activeAnim.current) activeAnim.current.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span aria-live="polite">{toDevanagari(display)}</span>;
};

const DashainCounter = () => {
  const [value, setValue] = useState<number>(45);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/now", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch time");
        const { now } = await res.json(); // destructure
        const startMs = Date.parse(now); // ms since epoch

        // Target: Oct 2, 2025 (UTC midnight)
        const endMs = Date.UTC(2025, 9, 2); // month is 0-based (9 = October)

        // Normalize both to UTC day counts, then diff
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const daysRemaining = Math.ceil((endMs - startMs) / MS_PER_DAY);

        setValue(daysRemaining);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="mt-8">
      <div className="inline-block rounded-full bg-red-600 px-8 py-3 text-lg font-medium text-white shadow-lg">
        दशैं -
        <span className="mx-2">
          <DevnagariNumberFlow value={value} />
        </span>
        दिन बाकी
      </div>
    </div>
  );
};

export default DashainCounter;
