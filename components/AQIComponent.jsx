import { getAQIData } from "@/lib/weather-info";
import React from "react";
import Card from "@/components/Card";
import Image from "next/image";

const AQIComponent = async ({ lat, lon }) => {
  const data = await getAQIData(lat, lon);

  if (!data) {
    return (
      <Card title="Air Pollution & Quality">
        <div className="text-white">No data available</div>
      </Card>
    );
  }

  const { main, components } = data;

  // AQI ইনডেক্সকে টেক্সটে রূপান্তর করার ফাংশন
  const getAQIRating = (index) => {
    const ratings = [
      "Unknown",
      "Good",
      "Fair",
      "Moderate",
      "Poor",
      "Very Poor",
    ];
    return ratings[index] || "Unknown";
  };

  // ডাটা লিস্ট (HTML অনুযায়ী সাজানো)
  const aqiItems = [
    { label: "Air Quality Index", value: getAQIRating(main.aqi), unit: "" },
    { label: "Carbon Monoxide", value: components.co, unit: "µg/m³" },
    {
      label: "Nitric Oxide",
      value: (components.no || 0).toFixed(5),
      unit: "ppm",
    },
    { label: "Nitrogen Dioxide", value: components.no2, unit: "ppm" },
    { label: "Ozone", value: components.o3, unit: "µg/m³" },
    { label: "Sulfur Dioxide", value: components.so2, unit: "ppm" },
    { label: "PM2.5", value: components.pm2_5, unit: "µg/m³" },
  ];

  return (
    <Card title="Air Pollution & Quality">
      <div className="mt-3 space-y-2 lg:space-y-3">
        {aqiItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                src="/icons/icon_air_element.png"
                width={18}
                height={18}
                alt="icon"
                className="max-w-[18px]"
              />
              {item.label}
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {item.value} {item.unit}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AQIComponent;
