import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function Hero() {
  return (
    <main className="h-[calc(100vh-80px)] flex flex-col items-center container mx-auto px-4 text-center relative pt-20">
      <div className="space-y-8 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
          PHOTO EDITOR
        </h1>
        <h2 className="text-xl md:text-2xl mb-4 text-gray-300">
          AI Image Generator and AI Video Generator
        </h2>
        <p className="max-w-3xl mx-auto text-sm text-gray-300 mb-6">
          Edit photos, generate images, and design freely with Pixlr's powerful
          AI tools – right in your browser, on mobile, or desktop. Try 100%
          free.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Button className="border border-purple-500 bg-black/90 hover:bg-purple-900/20 text-white rounded-full py-7 px-12 flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(147,51,234,0.3)]">
            <Upload size={20} />
            Open AI Photo Editor
          </Button>
          <Button className="bg-black/90 border border-purple-500 hover:bg-purple-900/20 text-white rounded-full py-7 px-12 flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(147,51,234,0.3)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            AI Image Generator
          </Button>
        </div>

        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full py-6 px-12 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_50px_rgba(168,85,247,0.4)]">
          START 7 DAY TRIAL
        </Button>
      </div>
    </main>
  );
}
