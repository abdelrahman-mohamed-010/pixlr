import Navigation from "@/components/navigation";
import Image from "next/image";

export default function DownloadPage() {
  const iosUrl = "https://apps.apple.com/app/picedit-ai"; // Replace with actual App Store URL
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.picedit.ai"; // Replace with actual Play Store URL

  return (
    <>
    <Navigation />
     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Get the PicEdit.ai App</h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        Download now and unleash your artistic potential anytime, anywhere.
        Compatible with all devices.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">iOS</h2>
          <div className="bg-white p-4 rounded-lg inline-block">
            <Image
              src={`https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=${encodeURIComponent(
                iosUrl
              )}`}
              alt="iOS App QR Code"
              width={192}
              height={192}
              className="w-48 h-48"
            />
          </div>
          <p className="mt-4">Scan the QR Code or</p>
          <a href={iosUrl} className="text-blue-400 hover:text-blue-300">
            Download from App Store
          </a>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Android</h2>
          <div className="bg-white p-4 rounded-lg inline-block">
            <Image
              src={`https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=${encodeURIComponent(
                androidUrl
              )}`}
              alt="Android App QR Code"
              width={192}
              height={192}
              className="w-48 h-48"
            />
          </div>
          <p className="mt-4">Scan the QR Code or</p>
          <a href={androidUrl} className="text-blue-400 hover:text-blue-300">
            Download from Play Store
          </a>
        </div>
      </div>
    </div> </>
  
  );
}
