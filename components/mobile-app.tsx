"use client";

import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MobileApp() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0a1520] to-[#0d2237] text-white flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[160px] animate-pulse delay-700"></div>
      </div>
      <div className="container mx-auto px-4 relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:w-1/2 h-[600px]"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 z-30 w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src="/mob.png"
                alt="Pixlr app main screen"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 text-center lg:text-left z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl line-clamp-3 md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
          >
            Capturing photos has never been more effortless
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Pixlr mobile app is accessible on both iOS and Android, enabling you
            to generate impeccable AI photos on the fly, no matter where you are
            or when you need them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 bg-black/90 hover:bg-purple-900/20 text-white rounded-full py-3 px-8 flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(147,51,234,0.3)]"
            >
              <FaApple className="w-9 h-9 -translate-y-1" />
              <div className="flex flex-col text-left">
                <span className="text-xs">Download on the</span>
                <span className="text-lg font-semibold">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 bg-black/90 hover:bg-purple-900/20 text-white rounded-full px-8 flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(147,51,234,0.3)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-9 h-9"
              >
                <linearGradient
                  id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1"
                  x1="18.102"
                  x2="25.297"
                  y1="3.244"
                  y2="34.74"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#35ab4a"></stop>
                  <stop offset=".297" stopColor="#31a145"></stop>
                  <stop offset=".798" stopColor="#288739"></stop>
                  <stop offset="1" stopColor="#237a33"></stop>
                </linearGradient>
                <path
                  fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)"
                  d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"
                ></path>
                <linearGradient
                  id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2"
                  x1="19.158"
                  x2="21.194"
                  y1="23.862"
                  y2="66.931"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#f14e5d"></stop>
                  <stop offset=".499" stopColor="#ea3d4f"></stop>
                  <stop offset="1" stopColor="#e12138"></stop>
                </linearGradient>
                <path
                  fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)"
                  d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"
                ></path>
                <linearGradient
                  id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3"
                  x1="32.943"
                  x2="36.541"
                  y1="14.899"
                  y2="43.612"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ffd844"></stop>
                  <stop offset=".519" stopColor="#ffc63f"></stop>
                  <stop offset="1" stopColor="#ffb03a"></stop>
                </linearGradient>
                <path
                  fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)"
                  d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"
                ></path>
                <linearGradient
                  id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4"
                  x1="13.853"
                  x2="15.572"
                  y1="5.901"
                  y2="42.811"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".003" stopColor="#0090e6"></stop>
                  <stop offset="1" stopColor="#0065a0"></stop>
                </linearGradient>
                <path
                  fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)"
                  d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"
                ></path>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-xs">Get it on</span>
                <span className="text-lg font-semibold">Google Play</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
