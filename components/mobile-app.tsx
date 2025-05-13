"use client";

import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";
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
            <Button
              asChild
              className="border border-purple-500 bg-black/90 hover:bg-purple-900/20 text-white rounded-full py-8 px-8 flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(147,51,234,0.3)]"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple className="w-9 h-9" />
                <div className="flex flex-col text-left">
                  <span className="text-xs">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </div>
              </a>
            </Button>

            <Button
              asChild
              className="border border-purple-500 bg-black/90 hover:bg-purple-900/20 text-white rounded-full py-8 px-8 flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(147,51,234,0.3)]"
            >
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlay className="w-9 h-9" />
                <div className="flex flex-col text-left">
                  <span className="text-xs">Get it on</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </div>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
