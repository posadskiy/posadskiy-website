"use client";

import { motion } from "framer-motion";

export function HeroSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-60 blur-3xl"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(197,169,255,0.45), transparent 60%)",
            "radial-gradient(circle at 80% 30%, rgba(75,243,200,0.4), transparent 55%)",
            "radial-gradient(circle at 50% 70%, rgba(197,169,255,0.35), transparent 65%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
    </div>
  );
}

