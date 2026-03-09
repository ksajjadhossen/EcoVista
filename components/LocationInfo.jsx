import { getLocationData } from "@/lib/location-info";
import React from "react";
import LocationSwitcher from "./LocationSwitcher";

const LocationInfo = async ({ lat, lon }) => {
  const locationInfo = await getLocationData(lat, lon);

  if (!locationInfo) {
    return (
      <div className="text-white">Location information not available.</div>
    );
  }

  const { city, countryName, continentName } = locationInfo;

  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {locationInfo.continent}
          </h2>

          {/* এখানে আমরা ক্লায়েন্ট কম্পোনেন্টটি ব্যবহার করছি */}
          <LocationSwitcher />
        </div>

        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {countryName} | {city}
        </p>

        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{time}</span> <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
