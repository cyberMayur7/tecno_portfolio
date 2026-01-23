import { motion } from "framer-motion";

/* ================= MATRIX LINE ================= */
const MatrixLine = ({ delay, left }) => (
  <motion.div
    className="absolute top-0 w-[2px] h-full bg-gradient-to-b from-green-400/0 via-green-400/60 to-green-400/0"
    style={{ left }}
    initial={{ y: "-100%" }}
    animate={{ y: "100%" }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
  />
);

/* ================= BINARY COLUMN ================= */
const BinaryColumn = ({ left, delay }) => (
  <motion.div
    className="absolute top-0 text-green-400/70 text-xs font-mono whitespace-pre leading-4"
    style={{ left }}
    initial={{ y: "-100%" }}
    animate={{ y: "110%" }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
  >
    {Array.from({ length: 40 }, () =>
      Math.random() > 0.5 ? "1" : "0"
    ).join("\n")}
  </motion.div>
);

/* ================= TERMINAL CURSOR ================= */
const TerminalCursor = () => (
  <motion.span
    className="text-green-400 font-mono"
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 1, repeat: Infinity }}
  >
    _
  </motion.span>
);

/* ================= MAIN BACKGROUND ================= */
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">

      {/* Base cyber gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#020617]" />

      {/* ================= MATRIX RAIN ================= */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(18)].map((_, i) => (
          <MatrixLine
            key={`matrix-${i}`}
            delay={i * 0.4}
            left={`${i * 5.5}%`}
          />
        ))}
      </div>

      {/* ================= BINARY FLOAT ================= */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(10)].map((_, i) => (
          <BinaryColumn
            key={`binary-${i}`}
            left={`${i * 9}%`}
            delay={i * 0.8}
          />
        ))}
      </div>

      {/* ================= SCAN LINE ================= */}
      <motion.div
        className="absolute left-0 w-full h-[2px] bg-green-400/40"
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ================= GREEN GLOW ================= */}
      <motion.div
        className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ top: "15%", left: "10%" }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        animate={{ x: [0, -120, 0], y: [0, -80, 0] }}
        transition={{ duration: 24, repeat: Infinity }}
        style={{ bottom: "10%", right: "10%" }}
      />

      {/* ================= TERMINAL TEXT ================= */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2 text-green-400/80 font-mono text-sm">
        <span>$ initializing secure environment</span>
        <TerminalCursor />
      </div>
    </div>
  );
};

export default AnimatedBackground;
