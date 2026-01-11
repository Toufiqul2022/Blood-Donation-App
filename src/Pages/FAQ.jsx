// src/components/FAQ.jsx
import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      q: "Who can register as a blood donor?",
      a: "Generally, donors must be healthy, 18–65 years old, and meet local medical eligibility criteria. Always follow your doctor’s recommendations.",
    },
    {
      q: "Is donating blood safe?",
      a: "Yes. All equipment is sterile and single-use. We never reuse needles, and we strongly encourage donations only from verified, safe centers.",
    },
    {
      q: "Do you charge any fees for connecting donors and patients?",
      a: "No. Our platform is designed to help people in need. We do not charge users for finding donors or creating requests.",
    },
    {
      q: "How quickly can I find a donor for an urgent request?",
      a: "It depends on the blood group, location, and available donors. Many urgent requests get matched within minutes through our active community.",
    },
    {
      q: "How often can I donate blood?",
      a: "For whole blood donation, you usually need to wait 56 days (8 weeks) between donations to allow your body to replenish red blood cells.",
    },
    {
      q: "What should I eat before donating?",
      a: "Drink plenty of water and eat a healthy, iron-rich meal (like spinach, meat, or beans) before donating. Avoid fatty foods and alcohol 24 hours prior.",
    },
    {
      q: "Does donating blood hurt?",
      a: "You may feel a slight pinch when the needle is inserted, but the actual donation process is painless and usually takes only 10-15 minutes.",
    },
    {
      q: "Can I donate if I have a tattoo or piercing?",
      a: "It depends on your local health regulations. In many places, you must wait 3 to 12 months after getting a tattoo or piercing to ensure safety.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-red-500 mb-3">
            Common Inquiries
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Your questions answered. Learn more about the donation process,
            eligibility, and how you can make a difference.
          </p>
        </div>

        {/* FAQ Grid - Stacked */}
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Logic: Radio inputs allow only one item to be open at a time */}
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-lg font-semibold text-gray-800 py-4 pr-12">
                {item.q}
              </div>

              <div className="collapse-content text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
