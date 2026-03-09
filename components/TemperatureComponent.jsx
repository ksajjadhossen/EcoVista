import { getTemperatureData } from "@/lib/weather-info";
import Card from "@/components/Card";
import Image from "next/image";
import React from "react";

const TemperatureComponent = async ({ lat, lon }) => {
  const data = await getTemperatureData(lat, lon);

  if (!data) {
    return (
      <Card title="Current Temperature">
        <div className="text-white">No data available</div>
      </Card>
    );
  }

  const { temp, feels_like } = data;

  return (
    <Card title="Current Temperature">
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_tempareture.png" // পাথ ঠিক করা হয়েছে
          width={80}
          height={80}
          alt="temperature icon"
        />
        {/* এখানে .toFixed(2) ব্যবহার করা হয়েছে যাতে ডেসিমাল সুন্দর দেখায় */}
        <h3 className="feature-title">{temp.toFixed(2)}°C</h3>

        <span className="feature-name">
          Feels Like {feels_like.toFixed(2)}°C
        </span>
      </div>
    </Card>
  );
};

export default TemperatureComponent;
