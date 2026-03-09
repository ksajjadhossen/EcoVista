import { getWeatherData } from "@/lib/weather-info";
import React from "react";
import Card from "@/components/Card";
import Image from "next/image";

const WeatherComponent = async ({ lat, lon }) => {
  const data = await getWeatherData(lat, lon);

  if (!data) {
    return (
      <Card title="Current Weather">
        <div className="text-white">No data available</div>
      </Card>
    );
  }

  // এপিআই থেকে মেইন কন্ডিশন (যেমন: Rain) এবং ডেসক্রিপশন (যেমন: Moderate Rain) নেওয়া হচ্ছে
  const { main, description, icon } = data;

  return (
    <Card title="Current Weather">
      <div className="feature-main">
        <Image
          className="max-w-20"
          // এখানে '/assets/icons/icon_rain.png' এর বদলে
          // আপনি চাইলে এপিআই এর ডাইনামিক আইকনও ব্যবহার করতে পারেন
          src="/icons/icon_rain.png"
          width={80}
          height={80}
          alt="weather icon"
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name text-capitalize">{description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
