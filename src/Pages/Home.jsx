import React from "react";
import { Link, useNavigate } from "react-router";
import Donate from "../assets/Donate.jpg";
import Card1 from "../assets/Card_1.jpg";
import Card2 from "../assets/Card_2.jpg";
import Card3 from "../assets/Card_3.png";

const Home = ({ user }) => {
  const navigate = useNavigate();

  const features = [
    {
      img: Card1,
      title: "Support Campaigns",
      desc: "Discover and participate in donation drives and special initiatives that save lives.",
    },
    {
      img: Card2,
      title: "Blood Donation Facts",
      desc: "Learn blood types, eligibility, and how a single donation can help multiple patients.",
    },
    {
      img: Card3,
      title: "Success Stories",
      desc: "Real stories from donors and recipients—see the impact you can make today.",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-sky-500/15">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)), url(${Donate})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Donate Blood, Save Lives
          </h1>
          <p className="text-lg md:text-xl text-rose-100 max-w-2xl mx-auto mb-10">
            Join a trusted community connecting blood donors with patients in
            need—fast, safe, and impactful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-3 rounded-xl bg-white text-red-600 font-semibold shadow-lg hover:shadow-xl transition"
            >
              Join as a Donor
            </button>
            <button
              onClick={() => navigate("/search")}
              className="px-8 py-3 rounded-xl border border-white/60 bg-white/10 text-white font-semibold hover:bg-white/20 transition"
            >
              Search Donors
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-500/15">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-14">
            Our Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition p-6 text-center"
              >
                <div className="mx-auto mb-5 h-40 flex items-center justify-center">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition">
                  {f.title}
                </h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/features"
              className="inline-block rounded-md bg-red-600 px-8 py-3 text-base font-semibold text-white hover:bg-red-700 transition"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-12 bg-sky-500/15">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Donate Blood?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Save Lives",
                desc: "Every donation can save up to three lives—your help truly matters.",
              },
              {
                title: "Healthy & Safe",
                desc: "Donating blood is safe and beneficial when done responsibly.",
              },
              {
                title: "Community Impact",
                desc: "Be part of a growing movement supporting patients across the country.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-red-600">
                  {c.title}
                </h3>
                <p className="text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section – blue background with glass card */}
      <section className="py-20 bg-sky-500/15">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Glassy form card */}
          <form className="rounded-3xl bg-slate-900/40 backdrop-blur-xl shadow-2xl p-8 md:p-10 space-y-5 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-4">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Last Name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Email"
              />
              <input
                type="tel"
                className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Phone"
              />
            </div>

            <input
              type="text"
              className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Address"
            />

            <textarea
              className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[110px]"
              placeholder="Your Message"
            />

            <button className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition">
              Send Message
            </button>
          </form>

          {/* Contact info, bright text on blue */}
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-3xl font-bold">Contact Us</h3>
            <p >
              Want to make a difference? Reach out to find donation events near
              you.
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              info@bloodbridge.com
            </p>
            <p>
              <span className="font-semibold">Support:</span> (+880) 123 456 586
            </p>
            <p>
              <span className="font-semibold">Address:</span> Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
