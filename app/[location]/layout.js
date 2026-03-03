import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoVista",
  description: "A web application that provides real-time environmental data.",
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      {/* Background and Overlay */}
      <img src="/images/background.png" className="bg-img" alt="background" />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {/* Location Info (Children) */}
            <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
              {children}
            </div>

            {/* Parallel Routes Sections */}

            {/* Weather Slot */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              {weather}
            </div>

            {/* AQI Slot */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-6">
              {aqi}
            </div>

            {/* Wind Slot */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              {wind}
            </div>

            {/* Temperature Slot */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              {temperature}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
