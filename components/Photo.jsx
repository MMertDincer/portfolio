"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] relative overflow-hidden rounded-full"
        >
          {/* Yuvarlak Resim */}
          <Image
            src="/assets/photo.png"
            quality={100}
            fill
            alt="Profile"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Ring */}
        <motion.svg
          className="absolute w-[320px] h-[320px] xl:w-[520px] xl:h-[520px]"
          fill="transparent"
          viewBox="0 0 520 520" // ViewBox değerini ayarladık
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="260"
            cy="260"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
