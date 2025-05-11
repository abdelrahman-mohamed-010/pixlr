import Link from "next/link"

interface ProductCardProps {
  letter: string
  color: string
  title: string
  subtitle: string
}

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string }> = {
    teal: { bg: "bg-teal-500", text: "text-teal-500" },
    blue: { bg: "bg-blue-500", text: "text-blue-500" },
    purple: { bg: "bg-purple-500", text: "text-purple-500" },
    pink: { bg: "bg-pink-600", text: "text-pink-600" },
    amber: { bg: "bg-amber-500", text: "text-amber-500" },
  }

  return colorMap[color] || { bg: "bg-gray-500", text: "text-gray-500" }
}

export default function ProductCard({ letter, color, title, subtitle }: ProductCardProps) {
  const colorClasses = getColorClasses(color)

  return (
    <Link href="#" className="group">
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300">
          <div className={`absolute inset-0 ${colorClasses.bg} opacity-20`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-4xl md:text-5xl font-bold ${colorClasses.text}`}>{letter}</span>
          </div>
        </div>
        <h3 className="font-medium text-center">{title}</h3>
        <p className="text-xs text-gray-400 text-center">{subtitle}</p>
      </div>
    </Link>
  )
}
