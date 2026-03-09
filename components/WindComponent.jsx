import { getWindData } from "@/lib/weather-info";
import React from "react";
import Card from "@/components/Card";
import Image from "next/image";

const WindComponent = async ({ lat, lon }) => {
  const data = await getWindData(lat, lon);

  if (!data) {
    return (
      <Card title="Wind">
        <div className="text-white">No data available</div>
      </Card>
    );
  }

  const { speed, deg } = data;

  return (
    <Card title="Wind">
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_wind.png" // পাথ ঠিক করা হয়েছে
          width={80}
          height={80}
          alt="wind icon"
        />
        {/* বাতাসের গতিবেগ */}
        <h3 className="feature-title">{speed} m/s</h3>

        {/* বাতাসের দিক (ডিগ্রি) */}
        <span className="feature-name">Direction: {deg}° Degrees</span>
      </div>
    </Card>
  );
};

export default WindComponent;
