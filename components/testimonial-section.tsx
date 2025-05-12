import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d2237] to-[#0a1520] text-white py-20 px-4 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[180px] animate-pulse"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 relative">
          <div className="flex justify-center">
            <Image
              src="/poeple.png"
              alt="People who use Pixlr"
              width={800}
              height={200}
              className="w-full max-w-[800px]"
            />
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
          Preferred by Millions
        </h2>

        <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300">
          People all over the world adore Pixlr for their visual content. Why?
          It's quick, simple, and consistently produces an "Wow, that's
          incredible!" outcome every time!
        </p>
      </div>
    </section>
  );
}
