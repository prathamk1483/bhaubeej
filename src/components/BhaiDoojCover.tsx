import React from "react";
import { motion } from "framer-motion";
import coverImg from "../images/intro.gif";

type Props = {
  name?: string;
  onNext?: () => void;
};

export default function BhaiDoojCover({ name = "SIS", onNext }: Props) {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-[#FFF9F5] text-center">

      {/* --- HEADER --- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="flex flex-col items-center mt-6 sm:mt-10 z-10"
      >
        <h1
          className="tracking-[0.25em] text-gray-700 uppercase font-medium"
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
          }}
        >
          For my lovely
        </h1>
        <h2
          className="text-[#F47E9C] uppercase font-black leading-none mt-1 drop-shadow-sm"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            letterSpacing: "0.05em",
          }}
        >
          S I S T E R ✦
        </h2>
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 space-y-3 sm:space-y-4 z-10">
        {/* Title Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="relative leading-none"
        >
          <h1
            className="text-[#F47E9C] italic font-semibold drop-shadow-sm"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(3rem, 10vw, 5.5rem)",
              lineHeight: "1",
            }}
          >
            Happy
          </h1>

          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 bg-[#FDE2E4] px-3 py-[2px] rounded-md rotate-[-6deg] shadow-sm border border-[#F7B5CF]/60">
            <span
              className="text-[clamp(11px,1.8vw,14px)] tracking-wide"
              style={{
                fontFamily: "Montserrat, system-ui, sans-serif",
                color: "#2b2b2b",
              }}
            >
              Bhai Dooj
            </span>
          </div>
        </motion.div>

        {/* Greeting Text */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="text-[#1f1f1f] uppercase font-extrabold"
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "clamp(2rem, 7vw, 4rem)",
            lineHeight: "1",
          }}
        >
          Dear {name}
        </motion.h2>

        {/* Message */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="text-[clamp(12px,1.5vw,15px)] text-gray-700 leading-relaxed max-w-[360px]"
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
          }}
        >
          You’ve always been my biggest supporter, my secret keeper, and my
          forever partner-in-crime 💫  
          On this{" "}
          <span className="text-[#F47E9C] font-semibold">Bhai Dooj</span>, I
          just want you to know how lucky I am to have you as my sister.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="text-[#F47E9C] text-[clamp(16px,2vw,22px)]"
        >
          ✦ ✦ ✦
        </motion.div>

        {/* Illustration */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="w-[65%] sm:w-[38%] max-w-[240px] mt-1"
        >
          <img
            src={coverImg}
            alt="Brother and sister illustration"
            className="w-full h-auto object-contain rounded-xl shadow-lg border border-[#FDE2E4]/60"
          />
        </motion.div>
      </div>

      {/* --- NEXT BUTTON --- */}
      {onNext && (
        <motion.button
          onClick={onNext}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mb-5 sm:mb-7 text-gray-700 bg-[#FDE2E4] px-8 py-2.5 rounded-full text-sm sm:text-base shadow-md hover:bg-[#F7B5CF] hover:shadow-lg transition-all duration-300 z-10"
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
          }}
        >
          Next →
        </motion.button>
      )}
    </div>
  );
}
