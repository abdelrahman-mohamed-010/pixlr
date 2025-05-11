import AIImageGeneratorSection from "./ai-image-generator-section";
import GenerativeFillSection from "./generative-fill-section";

export default function BackgroundRemover() {
  return (
    <main className="min-h-screen bg-[#0a0f20] text-white">
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
      {/* <GenerativeFillSection /> */}
    </main>
  );
}
