import React from "react";
import FeatureCard from "./feature-card";
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
  return (
    <div
      className="min-h-screen flex items-center py-16"
      style={{ backgroundImage: "linear-gradient(120deg, #8750ad, #7785d9)" }}
    >
      <div className="container mx-auto px-8">
        {/* Quick Links Section */}
        <div className="text-center mb-12 mt-8">
          <div className="inline-block bg-[#7e3299] bg-opacity-90 px-4 py-1 rounded mb-4 relative z-50">
            <h2 className=" font-extrabold tracking-wider text-white">
              QUICK LINKS
            </h2>
          </div>
          <h1 className="text-5xl font-extrabold mb-6 text-white relative z-50">
            JUMP RIGHT IN
          </h1>
          <p className="text-sm">
            Here we collected the most used Generative AI and Photo Editing
            features people are looking for!
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        </div>
      </div>
    </div>
  );
}
