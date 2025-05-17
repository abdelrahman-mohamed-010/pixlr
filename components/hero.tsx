"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create parallax effects based on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
    floating: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
      },
    },
  };

  // Split title into individual letters for animation
  const titleText = "AI PHOTO EDITOR";
  const titleLetters = titleText.split("");

  return (
    <main
      ref={ref}
      className="min-h-screen pt-24 flex flex-col items-center container mx-auto text-center relative"
    >
      <motion.div style={{ y, opacity, scale }} className="space-y-8 ">
        <motion.div
          className="mb-6 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-0">
            <Image
              src="/laurel.png"
              alt="Laurel decoration left"
              width={40}
              height={40}
              className="transform scale-x-[-1] -translate-y-2 -mr-1"
            />

            <div className="flex flex-col items-center">
              <div className="flex flex-col">
                <span className="block text-white font-bold text-2xl tracking-tighter">
                  ONE MILLION +
                </span>
                <span className="text-sm -mt-0.5 block text-white font-base">
                  PHOTOS EDITED
                </span>
              </div>

              <motion.div
                className="flex justify-center gap-1 mb-4 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      delay: 0.7 + i * 0.1,
                    }}
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <Image
              src="/laurel.png"
              alt="Laurel decoration right"
              width={40}
              height={40}
              className="-ml-1 -translate-y-2 "
            />
          </div>
        </motion.div>
        <motion.div
          className="text-6xl md:text-8xl font-extrabold mb-4"
          initial="hidden"
          animate={["visible", "floating"]}
          variants={titleContainerVariants}
        >
          <span className="bg-gradient-to-r max-sm:text-4xl from-purple-500 to-blue-400 bg-clip-text text-transparent inline-block">
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-2xl mb-4 text-gray-300"
        >
          AI Image Generator and AI Video Generator
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl max-sm:text-xs mx-auto text-sm text-gray-300 mb-6"
        >
          Edit photos, generate images, and design freely with Pixlr's powerful
          AI tools – right in your browser, on mobile, or desktop. Try 100%
          free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          className="mt-8"
        >
          {/* Add a CTA button here if needed */}
        </motion.div>
      </motion.div>

      {/* Background floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-purple-500/10 z-0"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-60 right-10 w-32 h-32 rounded-full bg-blue-500/10 z-0"
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-28 h-28 rounded-full bg-cyan-500/10 z-0"
        animate={{
          y: [0, 25, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </main>
  );
}
