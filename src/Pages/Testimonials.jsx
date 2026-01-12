// src/components/Testimonials.jsx
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahim Uddin",
      role: "Blood Donor • Dhaka",
      message:
        "I received a request notification on my phone, reached the hospital in 20 minutes, and we successfully helped a critical patient. The process was smooth and clear.",
    },
    {
      name: "Nasrin Akter",
      role: "Patient’s Sister • Chattogram",
      message:
        "We were struggling to find O- blood. Within half an hour of posting a request, two donors responded through this platform. It truly saved my brother’s life.",
    },
    {
      name: "Dr. Farhana Ahmed",
      role: "Consultant • Private Hospital",
      message:
        "This platform reduces pressure on hospital staff and connects us quickly with verified donors. It has made a real difference in emergency cases.",
    },
  ];

  return (
    <section className="py-20 bg-sky-500/15">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            Community Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
            Voices from our <span className="text-emerald-600">Community</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Donors, families, and doctors share how our platform helped them in
            real moments of need.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl shadow-teal-900/5 hover:-translate-y-2 transition-all duration-300 border border-white/50 group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-teal-600"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-teal-700 font-bold text-xl">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{t.name}</h3>
                  <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-600 leading-relaxed italic relative z-10">
                "{t.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
