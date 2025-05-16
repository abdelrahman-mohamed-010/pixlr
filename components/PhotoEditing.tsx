"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import DownloadModal from "./download-modal";

const PhotoEditing = () => {
  return (
    <div
      className="min-h-screen w-full h-full pb-12 py-16 flex flex-col justify-center"
      style={{
        backgroundColor: "#0a1920",
        backgroundImage: `
        radial-gradient(ellipse 120% 100% at 50% -10%, #00a8e0a6, #4775ff00),
        radial-gradient(ellipse 50% 100% at 50% -30%, #ffffff70, #ffffff00)
      `,
      }}
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <div className="mb-3">
          <span className="text-sm font-medium tracking-wider text-white bg-yellow-500 p-2 uppercase">
            Best in class
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl uppercase font-bold mb-4">
          Photo Editing and Design
        </h1>
        <p className="max-w-3xl mx-auto text-sm text-gray-300">
          Over the last 15 years, Pixlr has maintained its position as the top
          photo editing service on the web. Our commitment to pioneering
          innovation in online capabilities remains unwavering, ensuring the
          delivery of excellent retouching, drawing, filter, and effect tools!
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/2">
          <div className="mb-2">
            <span className="text-xs font-medium tracking-wider text-yellow-400 uppercase">
              Generative AI
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            AI Image Generator magic!
          </h2>
          <p className="text-xs text-gray-300 mb-6">
            Elevate your creative with the world's most fun to use AI image
            generator, revolutionizing the way you convert simple text into
            visually captivating artwork. Unleash your imagination and craft
            breathtaking, AI-generated masterpieces that are bound to captivate
            and inspire your audience.
          </p>
          <Link
            href="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-500 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5),0_0_40px_rgba(234,179,8,0.3)]"
          >
            Test Image Generator
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex justify-end">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
            <div className="absolute top-0 right-0 w-full h-full rounded-2xl overflow-hidden z-20">
              <Image
                src="/black.webp"
                alt="AI generated fox character"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 66.66%"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 pb-24 flex flex-col-reverse md:flex-row items-center gap-8"
      >
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative h-[400px] w-full max-w-[800px] group">
            <div className="absolute top-0 left-[5%] sm:left-[10%] w-[70%] sm:w-[65%] h-[70%] sm:h-[80%] md:h-[100%] rounded-2xl overflow-hidden bg-[#f8f3e9] transform z-10 transition-transform duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-4">
              <Image
                src="/shoes1.webp"
                alt="Turquoise sneaker with floral design on teal background"
                fill
                sizes="(max-width: 768px) 90vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-[25%] right-[5%] sm:right-0 w-[70%] sm:w-[65%] h-[70%] sm:h-[80%] md:h-[100%] rounded-2xl overflow-hidden bg-[#f8f3e9] z-20 transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:translate-y-4 shadow-md">
              <Image
                src="/shoes2.webp"
                alt="Turquoise sneaker with floral design on orange background"
                fill
                sizes="(max-width: 768px) 90vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute shadow-lg border-white/20 border-2 bottom-[5%] left-[20%] right-[20%] flex items-center justify-between bg-white/30 backdrop-blur-md px-2 py-2 rounded-full z-30">
              <span className="text-base text-white ml-3">
                Generate floral sneaker design...
              </span>
              <button className="bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300">
                Generate
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="mb-2">
            <span className="text-xs font-medium tracking-wider text-yellow-400 uppercase">
              AI Design
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Transform Your Sneaker Designs
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Create stunning floral sneaker designs with our AI-powered
            generative fill tool. Turn your basic sneaker concepts into vibrant,
            nature-inspired masterpieces with just a few clicks.
          </p>
          <Link
            href="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-500 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5),0_0_40px_rgba(234,179,8,0.3)]"
          >
            Try Generative Fill
          </Link>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/2">
          <div className="mb-2">
            <span className="text-xs font-medium tracking-wider text-yellow-400 uppercase">
              Generative AI
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            AI Image Generator magic!
          </h2>
          <p className="text-xs text-gray-300 mb-6">
            Elevate your creative with the world's most fun to use AI image
            generator, revolutionizing the way you convert simple text into
            visually captivating artwork. Unleash your imagination and craft
            breathtaking, AI-generated masterpieces that are bound to captivate
            and inspire your audience.
          </p>
          <Link
            href="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-500 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5),0_0_40px_rgba(234,179,8,0.3)]"
          >
            Test Image Generator
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full flex gap-0 group">
            <div className="absolute top-0 left-0 w-[45%] h-full rounded-2xl overflow-hidden z-20  transition-all">
              <Image
                src="/cubes.jpg"
                alt="AI generated fox character"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 45vw, 18.33%"
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute top-[5%] group-hover:translate-y-16 group-hover:translate-x-4 transition-all right-[25%] w-[35%] h-[80%] rounded-2xl overflow-hidden z-20">
              <Image
                src="/effect.webp"
                alt="AI generated image"
                fill
                sizes="(max-width: 640px) 35vw, (max-width: 768px) 35vw, 14.33%"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PhotoEditing;
