import Image from "next/image";
import Link from "next/link";

export default function AIImageGeneratorSection() {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/3">
        <div className="mb-2">
          <span className="text-xs font-medium tracking-wider text-blue-400 uppercase">
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
          className="inline-block bg-[#5463bf] hover:bg-[#5463bf] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(147,51,234,0.3)]"
        >
          Test Image Generator
        </Link>
      </div>
      <div className="md:w-2/3 w-full flex justify-center">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full group">
          {/* Gradient white shadow behind left image */}
          <div className="absolute top-[5%] left-[5%] sm:left-[10%] w-[40%] h-[90%] rounded-[40px] bg-gradient-to-br from-white/30 to-transparent blur-2xl z-0"></div>
          <div className="absolute top-[10%] left-[5%] sm:left-[15%] w-[30%] h-[80%] rounded-2xl overflow-hidden z-10 transition-all duration-300 group-hover:left-[10%]">
            <Image
              src="/flowers.webp"
              alt="AI generated portrait with orange floral elements"
              fill
              sizes="(max-width: 640px) 30vw, (max-width: 768px) 25vw, 30%"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Gradient white shadow behind center image */}
          <div className="absolute top-0 left-[35%] sm:left-[30%] w-[30%] sm:w-[40%] h-[100%] rounded-2xl overflow-hidden z-20">
            <Image
              src="/singap.webp"
              alt="AI generated fox character"
              fill
              sizes="(max-width: 640px) 30vw, (max-width: 768px) 40vw, 40%"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Gradient white shadow behind right image */}
          <div className="absolute top-[5%] right-[5%] sm:right-[10%] w-[40%] h-[90%] rounded-[40px] bg-gradient-to-br from-white/30 to-transparent blur-2xl z-0"></div>
          <div className="absolute top-[10%] right-[5%] sm:right-[15%] w-[30%] h-[80%] rounded-2xl overflow-hidden z-10 transition-all duration-300 group-hover:right-[10%]">
            <Image
              src="/boma.webp"
              alt="AI generated owl creature"
              fill
              sizes="(max-width: 640px) 30vw, (max-width: 768px) 25vw, 30%"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
