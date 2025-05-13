"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  // Advanced text animation variants with floating effect
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

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
  const titleText = "PHOTO EDITOR";
  const titleLetters = titleText.split("");

  return (
    <main
      ref={ref}
      className="min-h-screen pt-24 flex flex-col items-center container mx-auto px-4 text-center relative"
    >
      <motion.div style={{ y, opacity, scale }} className="space-y-8 max-w-4xl">
        <motion.div
          className="mb-6 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-0">
            <svg
              className="w-12 h-6 text-purple-500 transform scale-x-[-1]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 8C18.4 8.8 17.1 10.3 16.2 11.6C15.3 12.9 14.8 14.2 14.5 15.5C14.2 16.8 14.1 18.1 14.2 19.4C13.5 18.9 12.8 18.4 12 18.1C11.2 17.8 10.4 17.6 9.5 17.6C8.6 17.6 7.7 17.7 6.8 18.1C5.9 18.5 5 19.1 4 20C4.3 18.7 4.8 17.4 5.5 16.2C6.2 15 7.1 13.9 8.2 13C9.3 12.1 10.6 11.4 12 11C13.4 10.6 14.9 10.5 16.5 10.7C15.1 9.9 13.5 9.3 11.9 9C10.3 8.7 8.6 8.7 7 9C7.9 8.2 8.9 7.5 10 7C11.1 6.5 12.3 6.2 13.5 6.1C14.7 6 16 6.1 17.2 6.5C18.4 6.9 19.4 7.5 20 8Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm tracking-widest text-gray-400 font-medium">
              CREATIVE STUDIO
            </span>
            <svg
              className="w-12 h-6 text-purple-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 8C18.4 8.8 17.1 10.3 16.2 11.6C15.3 12.9 14.8 14.2 14.5 15.5C14.2 16.8 14.1 18.1 14.2 19.4C13.5 18.9 12.8 18.4 12 18.1C11.2 17.8 10.4 17.6 9.5 17.6C8.6 17.6 7.7 17.7 6.8 18.1C5.9 18.5 5 19.1 4 20C4.3 18.7 4.8 17.4 5.5 16.2C6.2 15 7.1 13.9 8.2 13C9.3 12.1 10.6 11.4 12 11C13.4 10.6 14.9 10.5 16.5 10.7C15.1 9.9 13.5 9.3 11.9 9C10.3 8.7 8.6 8.7 7 9C7.9 8.2 8.9 7.5 10 7C11.1 6.5 12.3 6.2 13.5 6.1C14.7 6 16 6.1 17.2 6.5C18.4 6.9 19.4 7.5 20 8Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <motion.div
            className="flex justify-center gap-1 mb-4"
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
        </motion.div>

        <motion.div
          className="text-6xl md:text-8xl font-extrabold mb-4"
          initial="hidden"
          animate={["visible", "floating"]}
          variants={titleContainerVariants}
        >
          <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent inline-block">
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
          className="text-xl md:text-2xl mb-4 text-gray-300"
        >
          AI Image Generator and AI Video Generator
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-sm text-gray-300 mb-6"
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
        className="absolute top-40 left-20 w-20 h-20 rounded-full bg-purple-500/10 z-0"
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
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-blue-500/10 z-0"
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
    </main>
  );
}
