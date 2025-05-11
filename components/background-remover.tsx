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
    imageLeft: "/noglass.webp",
    imageRight: "/glass.webp",
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
    imageLeft: "./photo1.jpeg",
    imageRight: "./photo2.jpeg",
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
    imageLeft: "./photo3.jpeg",
    imageRight: "./photo4.jpeg",
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
    imageLeft: "./photo5.jpeg",
    imageRight: "./photo6.jpeg",
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
    imageLeft: "./photo7.jpeg",
    imageRight: "./photo8.jpeg",
    altLeft: "Original cropped landscape",
    altRight: "Extended landscape image",
    promptText: "Expand image",
    reverse: false,
  },
];

export default function BackgroundRemover() {
  return (
    <main className="min-h-screen bg-[#0a0f20] text-white pb-12">
      <section className="container mx-auto px-4 py-20 text-center">
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
          seasoned professionals, these tools redefine artistic expression with
          intuitive AI technology, revolutionizing your creative process.
        </p>
      </section>

      <AIImageGeneratorSection />

      {generativeSections.map((section, index) => (
        <GenerativeFillSection
          key={index}
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
      ))}
    </main>
  );
}
