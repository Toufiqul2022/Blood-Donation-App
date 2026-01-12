// src/components/Highlights.jsx
import React from "react";

const HighlightsSection = () => {
  const highlights = [
    {
      title: "24/7 Request Support",
      desc: "Create urgent blood requests anytime and reach donors even during late-night emergencies.",
      badge: "Always On",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Location-Based Matching",
      desc: "We prioritize donors who are closest to the hospital or patient’s area to reduce time and travel.",
      badge: "Smart Match",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
      ),
    },
    {
      title: "Transparent Status Tracking",
      desc: "Track every request from “Created” to “Completed” so families always know what’s happening.",
      badge: "Clear Updates",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Community-Driven Impact",
      desc: "Volunteers, donors, and hospitals work together to build a trusted life-saving network.",
      badge: "Community",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-sky-500/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:flex items-end justify-between gap-10 mb-12">
          {/* Header Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-8 bg-teal-500"></span>
              <p className="text-sm font-bold tracking-widest uppercase text-teal-600">
                Key Highlights
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
                Real Emergencies
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              BloodUnity is built with real-world situations in mind—traffic,
              busy cities, late-night emergencies, and urgent hospital calls.
            </p>
          </div>

          {/* Stat Card */}
          <div className="hidden md:block">
            <div className="stats shadow-xl border border-teal-100 bg-white">
              <div className="stat px-8 py-6">
                <div className="stat-figure text-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title font-semibold text-gray-500">
                  Requests Resolved
                </div>
                <div className="stat-value text-teal-600 text-4xl">92%</div>
                <div className="stat-desc text-emerald-500 font-medium">
                  Within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                {h.icon}
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                  {h.title}
                </h3>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {h.desc}
              </p>

              {/* Badge */}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
                {h.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
