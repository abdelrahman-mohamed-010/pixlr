import Link from "next/link";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header className="container mx-auto px-8 py-6 flex items-center justify-between relative">
      <Link href="/" className="flex items-center">
        <img
          src="/pixlr-logo.svg"
          alt="Pixlr Logo"
          className="w-40 h-12 object-contain"
        />
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/pricing"
          className="hidden md:block hover:text-purple-300 z-20 transition text-sm font-semibold"
        >
          Pricing
        </Link>
        <div className="hidden md:flex items-center z-20  gap-2">
          <Link
            href="/login"
            className="hover:text-purple-300 transition text-sm font-semibold"
          >
            Sign up / Log in
          </Link>
        </div>
        <Button
          variant="ghost"
          className="hidden z-20  md:flex items-center gap-2 text-yellow-400 hover:text-yellow-300 hover:bg-transparent text-sm font-semibold py-6"
        >
          <span className="text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
            </svg>
          </span>
          Try premium
        </Button>
        <div className=" flex gap-0">
          {" "}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 z-20 hover:bg-transparent hover:text-white w-12 h-12"
          >
            <Bell className=""  />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300  z-20  hover:bg-transparent hover:text-white w-12 h-12"
          >
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
