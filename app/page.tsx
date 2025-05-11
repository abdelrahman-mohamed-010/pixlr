import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import QuickLinks from "@/components/quick-links";
import BackgroundRemover from "@/components/background-remover";

export default function Home() {
  return (
    <div className="min-h-screen   text-white">
      <div className="bg-gradient-to-b from-[#0a1520] to-[#0d2237] relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[160px] animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[160px] animate-pulse delay-700"></div>
        </div>
        <Navigation />
        <Hero />
      </div>
      <QuickLinks />
      <BackgroundRemover />
    </div>
  );
}
