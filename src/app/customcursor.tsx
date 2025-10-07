"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // motion values for x and y
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth spring animation for smoother tracking
  const smoothX = useSpring(x, { stiffness: 300, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </motion.div>

      {/* Outer circle */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-8 h-8 rounded-full border border-gray-800"></div>
      </motion.div>
    </>
  );
}
