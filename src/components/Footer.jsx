import React from "react";
import { useNavigate } from "react-router"; // ✅ useNavigate, not Navigate

const Footer = () => {
  const navigate = useNavigate(); // ✅ correct usage

  return (
    <div>
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">BloodUnity</h3>
            <p>Connecting donors with patients—together we save lives.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li
                className="hover:text-white cursor-pointer"
                onClick={() => navigate("/register")} // ✅ works now
              >
                Join as Donor
              </li>
              <li
                className="hover:text-white cursor-pointer"
                onClick={() => navigate("/search")}
              >
                Search Donors
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Follow Us</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-slate-400 mt-10">
          © 2025 BloodDonate. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
