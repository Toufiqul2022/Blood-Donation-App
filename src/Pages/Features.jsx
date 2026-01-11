import React from "react";
import Card1 from "../assets/Card_1.jpg";
import Card2 from "../assets/Card_2.jpg";
import Card3 from "../assets/Card_3.png";
import Card4 from "../assets/card-4.png";
import Card5 from "../assets/card-5.png";
import Card6 from "../assets/card-6.png";

const FeaturesSection = () => {
  const features = [
    {
      img: Card1,
      title: "Smart Matching",
      desc: "We intelligently match patients with the nearest compatible donor to reduce waiting time.",
      tag: "Real-time",
    },
    {
      img: Card2,
      title: "Verified Donors",
      desc: "All donors are verified with medical and identity checks to ensure a safe donation.",
      tag: "Trusted",
    },
    {
      img: Card3,
      title: "Live Campaigns",
      desc: "Track active blood donation campaigns and drives across Bangladesh in one place.",
      tag: "Community",
    },
    {
      img: Card4, // Reusing card image for demo
      title: "Instant Alerts",
      desc: "Get notified immediately via SMS or app notifications when a matching blood request is posted near you.",
      tag: "Speed",
    },
    {
      img: Card5, // Reusing card image for demo
      title: "Privacy First",
      desc: "Your personal contact details are kept secure and only shared with verified requestors when you accept.",
      tag: "Security",
    },
    {
      img: Card6, // Reusing card image for demo
      title: "Donor Rewards",
      desc: "Earn digital badges and certificates for your contributions, celebrating your journey as a life-saver.",
      tag: "Rewards",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            Platform Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Save Lives
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            BloodUnity connects donors and patients with a smooth, modern
            experience—designed for speed, safety, and trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-50">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-100 mb-4 self-start">
                  {f.tag}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {f.title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-4 flex-1">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
