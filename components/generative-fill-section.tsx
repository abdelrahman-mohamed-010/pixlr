import Image from "next/image";
import Link from "next/link";

export default function GenerativeFillSection() {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="md:w-1/2 flex justify-center">
        <div className="relative h-[300px] w-full max-w-[400px]">
          <div className="absolute top-[10%] left-[10%] w-[40%] h-[80%] rounded-lg overflow-hidden bg-[#f8f3e9] transform rotate-[-5deg] z-10">
            <Image
              src="/placeholder.svg?height=400&width=200"
              alt="Original running person image"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 left-[30%] w-[60%] h-[100%] rounded-lg overflow-hidden bg-[#f8f3e9] z-20">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="AI enhanced running person with hat and sunglasses"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/70 px-4 py-2">
              <span className="text-xs text-white">Hat and sunglasses</span>
              <button className="bg-white text-black text-xs px-3 py-1 rounded-full">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="mb-2">
          <span className="text-xs font-medium tracking-wider text-purple-400 uppercase">
            Generative Fill
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Amazing AI Generative Fill!
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          From captivating creative ideas to making complex edits and
          refinements, Generative Fill can help you quickly realize your vision
          while giving you complete control over every creation.
        </p>
        <Link
          href="#"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
        >
          Test Generative Fill
        </Link>
      </div>
    </section>
  );
}
