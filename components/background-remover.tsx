"use client";

import AIImageGeneratorSection from "./ai-image-generator-section";
import GenerativeFillSection from "./generative-fill-section";

// Configuration for the 5 generative sections
const generativeSections = [
  {
    title: "Amazing AI Generative Fill!",
    description:
      "From captivating creative ideas to making complex edits and refinements, Generative Fill can help you quickly realize your vision while giving you complete control over every creation.",
    buttonText: "Test Generative Fill",
    badgeText: "Generative Fill",
    imageLeft: "/enhance2.png",
    imageRight: "/enhance1.png",
    altLeft: "Original running person image",
    altRight: "AI enhanced running person with hat and sunglasses",
    promptText: "Hat and sunglasses",
    reverse: false,
  },
  {
    title: "Smart Object Removal",
    description:
      "Remove unwanted objects from your photos with a single click. Our AI technology seamlessly fills the space, maintaining the natural look of your image.",
    buttonText: "Try Object Removal",
    badgeText: "AI Removal",
    imageLeft: "./bg1.png",
    imageRight: "./bg2.png",
    altLeft: "Photo with unwanted objects",
    altRight: "Clean photo after object removal",
    promptText: "Remove objects",
    reverse: true,
  },
  {
    title: "Style Transfer Magic",
    description:
      "Transform your photos with artistic styles from famous paintings or custom designs. Our AI understands the essence of both your image and the style for stunning results.",
    buttonText: "Explore Style Transfer",
    badgeText: "AI Style",
    imageLeft: "./ghibli1.png",
    imageRight: "./ghibli2.png",
    altLeft: "Original portrait photo",
    altRight: "Stylized portrait with artistic effect",
    promptText: "Apply artistic style",
    reverse: false,
  },
  {
    title: "Background Replacement",
    description:
      "Instantly transport your subjects to new locations or abstract backgrounds. Perfect for product photography, portraits, or creative compositions.",
    buttonText: "Change Backgrounds",
    badgeText: "Background AI",
    imageLeft: "./suits1.png",
    imageRight: "./suits2.png",
    altLeft: "Subject with original background",
    altRight: "Subject with replaced background",
    promptText: "Replace background",
    reverse: true,
  },
  {
    title: "Smart Image Expansion",
    description:
      "Extend your canvas beyond its original borders. Our AI understands what should exist outside the frame and creates seamless extensions of your image.",
    buttonText: "Expand Your Images",
    badgeText: "AI Expansion",
    imageLeft: "./old1.png",
    imageRight: "./old2.jpg",
    altLeft: "Original cropped landscape",
    altRight: "Extended landscape image",
    promptText: "Expand image",
    reverse: false,
  },
];

export default function BackgroundRemover() {
  return (
    <main className="bg-[#0a0f20] text-white">
      <section className="min-h-screen flex flex-col justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-3">
            <span className="text-sm font-medium tracking-wider text-purple-400 uppercase">
              Limitless Artistry
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            GENERATIVE AI TOOLS
          </h1>
          <p className="max-w-3xl mx-auto text-sm text-gray-300">
            Explore Pixel's suite of Powerful Generative Tools unleashing
            limitless creative possibilities. Perfect for both beginners and
            seasoned professionals, these tools redefine artistic expression
            with intuitive AI technology, revolutionizing your creative process.
          </p>
        </div>

        <div className="mt-12">
          <AIImageGeneratorSection />
        </div>
      </section>

      {generativeSections.map((section, index) => (
        <section key={index} className="min-h-screen flex items-center py-16">
          <GenerativeFillSection
            title={section.title}
            description={section.description}
            buttonText={section.buttonText}
            badgeText={section.badgeText}
            imageLeft={section.imageLeft}
            imageRight={section.imageRight}
            altLeft={section.altLeft}
            altRight={section.altRight}
            promptText={section.promptText}
            reverse={section.reverse}
          />
        </section>
      ))}
    </main>
  );
}
