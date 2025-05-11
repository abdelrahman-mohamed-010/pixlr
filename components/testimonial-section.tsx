import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 relative">
          <div className="flex justify-center">
            <Image
              src="/poeple.png"
              alt="People who use Momo"
              width={800}
              height={200}
              className="w-full max-w-[800px]"
            />
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-8">Preferred by Millions</h2>

        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          People all over the world adore Momo for their visual content. Why?
          It's quick, simple, and consistently produces an "Wow, that's
          incredible!" outcome every time!
        </p>
      </div>
    </section>
  );
}
