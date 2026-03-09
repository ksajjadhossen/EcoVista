"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getLocationLatLonList } from "@/lib/location-info";

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocationList() {
      try {
        const list = await getLocationLatLonList();
        setLocations(list || []);
      } catch (error) {
        console.error("Error fetching location list:", error);
      }
    }
    getLocationList();
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          src="/icons/link.svg" // পাথ চেক করে নিন
          width={36}
          height={36}
          alt="link icon"
        />
      </button>

      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul role="list" className="divide-y divide-gray-100 text-black">
            {locations.length > 0 ? (
              locations.map((loc) => (
                <li
                  key={loc.city}
                  className="py-2 cursor-pointer hover:bg-gray-50"
                >
                  <Link
                    // loc.location এর বদলে loc.city ব্যবহার করা হয়েছে
                    href={`/${loc.city}?latitude=${loc.latitude}&longitude=${loc.longitude}`}
                    onClick={() => setShowLocationList(false)}
                  >
                    {loc.city}, {loc.country}
                  </Link>
                </li>
              ))
            ) : (
              <li className="py-2 text-gray-500">Loading locations...</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
