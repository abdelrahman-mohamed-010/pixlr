import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function MobileApp() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24 relative flex flex-col lg:flex-row items-center justify-between gap-40">
        <div className="relative w-full lg:w-1/2 h-[700px]">
          <div className="absolute left-1/2 transform -translate-x-1/2 z-30 w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src="/mob.png"
                alt="Momo app main screen"
                fill
                className="rounded-3xl object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6 rounded-3xl">
                <div className="flex justify-between items-center">
                  <div className="text-xs">9:41</div>
                  <div className="bg-black/20 px-2 py-1 rounded-full text-xs">
                    PRO
                  </div>
                  <div className="text-center font-bold">MOMO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Capturing photos has never been more effortless
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Momo mobile app is accessible on both iOS and Android, enabling you
            to generate impeccable AI photos on the fly, no matter where you are
            or when you need them.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 rounded-xl p-4 transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95 flex items-center gap-2"
            >
              <FaApple className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xs">Download on the</span>
                <span className="text-lg font-semibold">App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 rounded-xl p-4 transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95 flex items-center gap-2"
            >
              <FaGooglePlay className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-xs">Get it on</span>
                <span className="text-lg font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
