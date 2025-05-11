import Image from "next/image";
import Link from "next/link";

interface GenerativeFillSectionProps {
  title: string;
  description: string;
  buttonText: string;
  badgeText: string;
  imageLeft: string;
  imageRight: string;
  altLeft: string;
  altRight: string;
  promptText: string;
  reverse?: boolean;
  yellow?: boolean;
}

export default function GenerativeFillSection({
  title,
  description,
  buttonText,
  badgeText,
  imageLeft,
  imageRight,
  altLeft,
  altRight,
  promptText,
  reverse = false,
  yellow = false,
}: GenerativeFillSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-8">
      <div
        className={`w-full md:w-1/2 flex justify-center ${
          reverse ? "md:order-last" : ""
        }`}
      >
        <div className="relative h-[400px] w-full max-w-[600px] group">
          <div className="absolute top-0 left-[5%] sm:left-[15%] w-[60%] sm:w-[55%] h-[70%] sm:h-[80%] md:h-[100%] rounded-2xl overflow-hidden bg-[#f8f3e9] transform z-10 transition-transform duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-4">
            <Image
              src={imageLeft}
              alt={altLeft}
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute top-[15%] right-[5%] sm:right-0 w-[60%] sm:w-[55%] h-[70%] sm:h-[80%] md:h-[100%] rounded-2xl overflow-hidden bg-[#f8f3e9] z-20 transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:translate-y-4 shadow-md">
            <Image
              src={imageRight}
              alt={altRight}
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute shadow-lg border-white/20 border-2 bottom-[5%] left-[10%] right-[20%] flex items-center justify-between bg-white/30 backdrop-blur-md px-2 py-2 rounded-full z-30">
            <span className="text-base text-white ml-3">{promptText}</span>
            <button className="bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300">
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className={`md:w-1/2 ${reverse ? "md:order-first" : ""}`}>
        <div className="mb-2">
          <span
            className={`text-xs font-medium tracking-wider uppercase ${
              yellow ? "text-yellow-400" : "text-[#5463bf]"
            }`}
          >
            {badgeText}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-sm text-gray-300 mb-6">{description}</p>
        <Link
          href="#"
          className={`inline-block font-medium py-2 px-6 rounded-full transition-all duration-300 ${
            yellow
              ? "bg-yellow-500 hover:bg-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.5),0_0_40px_rgba(234,179,8,0.3)]"
              : "bg-[#5463bf] hover:bg-[#5463bf] hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(147,51,234,0.3)]"
          } text-white`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
