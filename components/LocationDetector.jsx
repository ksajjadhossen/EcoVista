"use client";

import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          params.set("latitude", latitude);
          params.set("longitude", longitude);
          setLoading(false);
          router.push(`/current?${params.toString()}`);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
        },
      );
    }
  }, [pathName, searchParams, router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        /* এখানে flex এবং items-center যোগ করা হয়েছে */
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            src="/location.webp"
            alt="Loading..."
            width={500}
            height={500}
            className="border rounded-md my-4 object-contain"
          />
          <p className="text-center text-xl font-medium">
            Detecting your location...
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationDetector;
