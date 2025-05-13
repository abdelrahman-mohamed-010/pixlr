import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d2237] to-[#0a1520] text-white py-20 px-4 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[180px] animate-pulse"
        ></motion.div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 relative"
        >
          <div className="flex justify-center">
            <Image
              src="/poeple.png"
              alt="People who use Pixlr"
              width={800}
              height={200}
              className="w-full max-w-[800px]"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
        >
          Preferred by Millions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300"
        >
          People all over the world adore Pixlr for their visual content. Why?
          It's quick, simple, and consistently produces an "Wow, that's
          incredible!" outcome every time!
        </motion.p>
      </div>
    </section>
  );
}
