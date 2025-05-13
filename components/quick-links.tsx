import React from "react";
import FeatureCard from "./feature-card";
import { motion } from "framer-motion";
import {
  Wand2,
  UserRound,
  Scissors,
  MousePointerClick,
  LayoutGrid,
  Crop,
  Paintbrush,
  Expand,
  Maximize,
  Brush,
  LayoutTemplate,
} from "lucide-react";

export default function QuickLinks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-16"
      style={{ backgroundImage: "linear-gradient(120deg, #8750ad, #7785d9)" }}
    >
      <div className="container mx-auto px-8">
        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-[#7e3299] bg-opacity-90 px-4 py-1 rounded mb-4 relative z-50"
          >
            <h2 className=" font-extrabold tracking-wider text-white">
              QUICK LINKS
            </h2>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl font-extrabold mb-6 text-white relative z-50"
          >
            JUMP RIGHT IN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm"
          >
            Here we collected the most used Generative AI and Photo Editing
            features people are looking for!
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {/* Row 1 */}
          <FeatureCard icon={<Wand2 size={24} />} title="AI Image Generator" />
          <FeatureCard icon={<UserRound size={24} />} title="AI Face Swap" />
          <FeatureCard
            icon={<Scissors size={24} />}
            title="AI Remove Background"
          />
          <FeatureCard
            icon={<MousePointerClick size={24} />}
            title="AI Remove Object"
          />

          {/* Row 2 */}
          <FeatureCard
            icon={<LayoutGrid size={24} />}
            title="Photo Collage Maker"
          />
          <FeatureCard icon={<Crop size={24} />} title="Crop Image" />
          <FeatureCard
            icon={<Paintbrush size={24} />}
            title="AI Generative Fill"
          />
          <FeatureCard icon={<Expand size={24} />} title="Generative Expand" />

          {/* Row 3 */}
          <FeatureCard icon={<Maximize size={24} />} title="Resize Image" />
          <FeatureCard icon={<Brush size={24} />} title="Touch-up" />
          <FeatureCard
            icon={<LayoutTemplate size={24} />}
            title="Design Templates"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
