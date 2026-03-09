import React from "react";
import Link from "next/link";

const NoLocationInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full p-10 bg-white shadow-xl rounded-3xl border border-slate-100">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-red-500 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Location Not Found
          </h2>
          <p className="mt-3 text-slate-500 leading-relaxed">
            We could not retrieve your current coordinates. Please enter your
            location manually below to check the air quality.
          </p>
        </div>

        {/* Manual Input Form - Uses Native GET Method */}
        <form action="/" method="GET" className="space-y-5">
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-slate-700 mb-2 ml-1"
            >
              City or Region
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="e.g. New York, London"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg shadow-slate-200 transition-all active:scale-[0.98]"
          >
            Check Air Quality
          </button>
        </form>

        {/* Navigation Link - No Buttons used here to keep it Server-Side */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline decoration-2 underline-offset-8 transition-all"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoLocationInfo;
