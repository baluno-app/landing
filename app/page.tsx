import Link from "next/link";
import Image from "next/image";

const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL;
const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <main className="flex w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 py-12 lg:flex-row lg:gap-16">
        {/* App Screenshot */}
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src="/screen-1.png"
              alt="Baluno App Screenshot"
              width={300}
              height={650}
              priority
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="mb-6 text-6xl font-bold tracking-tight text-gray-900 md:text-7xl">
            Baluno
          </h1>

          <p className="mb-4 max-w-md text-xl text-gray-600">
            Take a moment to center yourself before planning your day
          </p>

          <p className="mb-12 text-lg text-gray-500">
            Mindful breathing exercises for a balanced life
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            {appStoreUrl ? (
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-black px-8 py-3 transition-opacity hover:opacity-80"
                aria-label="Download on the App Store"
              >
                <svg className="h-10 w-36" viewBox="0 0 120 40" fill="none">
                  <rect width="120" height="40" rx="5" fill="black" />
                  <text
                    x="60"
                    y="13"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="Arial"
                  >
                    Download on the
                  </text>
                  <text
                    x="60"
                    y="28"
                    fontSize="14"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontWeight="bold"
                  >
                    App Store
                  </text>
                </svg>
              </a>
            ) : (
              <div className="flex items-center justify-center rounded-lg bg-black px-8 py-3 opacity-60">
                <svg className="h-10 w-36" viewBox="0 0 120 40" fill="none">
                  <rect width="120" height="40" rx="5" fill="black" />
                  <text
                    x="60"
                    y="13"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="Arial"
                  >
                    Coming Soon
                  </text>
                  <text
                    x="60"
                    y="28"
                    fontSize="14"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontWeight="bold"
                  >
                    App Store
                  </text>
                </svg>
              </div>
            )}

            <div className="flex items-center justify-center rounded-lg bg-black px-8 py-3 opacity-60">
              <div className="flex items-center gap-3">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="white">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col items-start text-white">
                  <span className="text-xs">COMING SOON</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto flex gap-6 pb-8 text-sm text-gray-400">
        <Link href="/privacy" className="hover:text-gray-600 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-gray-600 transition-colors">
          Terms of Use
        </Link>
      </footer>
    </div>
  );
}
