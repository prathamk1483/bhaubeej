import React from "react";
import { motion } from "framer-motion";
import kitty from "../images/thankyou.gif"; // Hello Kitty gif

type Props = {
  onBack?: () => void;
};

export default function ThankYouPage({ onBack }: Props) {
  return (
    <div className="relative w-full h-[100dvh] flex items-center justify-center bg-transparent overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F7B5CF] opacity-30"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
            }}
            animate={{
              y: [-150, -400, -600],
              x: `calc(${Math.random() * 100}vw - 40px)`,
              opacity: [0.3, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ fontSize: `${Math.random() * 16 + 14}px` }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[620px] max-h-[82dvh] bg-[#FFF9FB] rounded-2xl shadow-xl border border-[#f3dbe1] px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-between items-center text-center backdrop-blur-sm overflow-hidden"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* Header Tag */}
        <div className="text-xs sm:text-sm text-[#444] uppercase tracking-wider mb-3 font-medium">
          ✦ from your bhai, with love ✦
        </div>

        {/* Title */}
        <div className="flex-1 flex flex-col items-center justify-center px-2">
          <motion.h1
            className="text-[#F47E9C] text-[clamp(2.2rem,8vw,4.5rem)] italic font-semibold leading-none mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Thank You
          </motion.h1>

          <motion.h2
            className="text-[#2c2c2c] text-[clamp(1.3rem,4vw,2.2rem)] font-extrabold uppercase tracking-tight mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            for always being there💖
          </motion.h2>

          <motion.p
            className="text-[#4b4b4b] text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed max-w-[440px]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            You make every small thing brighter and happier.  
            I’m lucky to have you — thanks for being the sweetest part of my days. 🍫✨
          </motion.p>
        </div>

        {/* Kitty Sticker */}
        <motion.img
          src={kitty}
          alt="Hello Kitty"
          className="absolute right-3 bottom-3 sm:right-5 sm:bottom-4 w-[110px] sm:w-[150px] md:w-[190px] select-none drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        />

        {/* Footer line */}
        <div className="text-center text-xs sm:text-sm mt-4 text-[#2c2c2c]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            made with 💗, chocolates & sparkles — always your bhai ✨
          </motion.p>
        </div>
      </motion.div>

      {/* Back button */}
      {onBack && (
        <motion.button
          onClick={onBack}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-3 left-3 text-gray-700 bg-[#E0ECFA] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#C6DBF3] transition-all"
          style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
        >
          ← Back
        </motion.button>
      )}
    </div>
  );
}
