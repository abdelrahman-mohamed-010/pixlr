"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

export default function DownloadModal({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const iosUrl = "https://apps.apple.com/app/picedit-ai"; // Replace with actual App Store URL
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.picedit.ai"; // Replace with actual Play Store URL

  return (
    <Dialog>
      {" "}
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:w-auto md:min-w-[70vw] lg:min-w-[60vw] bg-black text-white border-gray-800 max-w-4xl p-4 sm:p-6 md:h-auto h-[85vh] overflow-y-auto sm:overflow-y-auto md:overflow-visible flex flex-col">
        {" "}
        <DialogHeader className="space-y-2 sm:space-y-4 flex-shrink-0">
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-center">
            Get the PicEdit.ai App
          </DialogTitle>
          <DialogDescription className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8 text-center max-w-2xl mx-auto text-gray-300">
            Download now and unleash your artistic potential anytime, anywhere.
            Compatible with all devices.
          </DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 overflow-y-auto flex-grow">
          {" "}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">iOS</h2>
            <div className="bg-white p-2 sm:p-4 rounded-lg inline-block">
              <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=${encodeURIComponent(
                  iosUrl
                )}`}
                alt="iOS App QR Code"
                width={192}
                height={192}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48"
              />
            </div>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300">
              Scan the QR Code or
            </p>
            <a
              href={iosUrl}
              className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium py-3 my-2 block"
            >
              Download from App Store
            </a>
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              Android
            </h2>
            <div className="bg-white p-2 sm:p-4 rounded-lg inline-block">
              <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=${encodeURIComponent(
                  androidUrl
                )}`}
                alt="Android App QR Code"
                width={192}
                height={192}
                className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48"
              />
            </div>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300">
              Scan the QR Code or
            </p>
            <a
              href={androidUrl}
              className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium py-2 block"
            >
              Download from Play Store
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
