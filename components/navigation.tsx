import Link from "next/link";
import { Button } from "@/components/ui/button";
import DownloadModal from "@/components/download-modal";

export default function Navigation() {
  return (
    <header className="container mx-auto px-8 py-6 flex items-center justify-between relative">
      <Link href="/" className="flex items-center">
        <span className="text-3xl font-bold">
          <span className="text-white bg-gradient-to-r from-[#3B82F6] to-[#A855F7] px-2 rounded-xl">
            Pic
          </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-[#8B5CF6] dark:from-white/70">
            Edit.ai
            </span>
        </span>
      </Link>

      <DownloadModal
        trigger={
          <Button
            variant="default"
            className="bg-white text-black hover:bg-gray-100 flex items-center gap-2 rounded-full"
          >
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
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Try PicEdit.ai
          </Button>
        }
      />
    </header>
  );
}
