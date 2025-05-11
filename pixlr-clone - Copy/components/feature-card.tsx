import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-center bg-white/10 backdrop-blur-sm rounded-xl p-2 transition-all hover:bg-white/20 cursor-pointer ",
        className
      )}
    >
      <div className="bg-opacity-50 rounded-full p-2 mr-1">
        {icon}
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  );
}
