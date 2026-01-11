import React from "react";
import { Link } from "react-router";

const EmergencyRequests = () => {
  // 🔴 Demo data – replace with real data later if you want
  const emergencies = [
    {
      id: "1",
      bloodGroup: "O-",
      patientName: "Rahim Uddin",
      hospital: "Dhaka Medical College Hospital",
      upazila: "Shahbag",
      district: "Dhaka",
      neededWithin: "2 hours",
      units: 3,
      status: "critical",
      note: "Patient in ICU after road accident, urgent need of O- blood.",
    },
    {
      id: "2",
      bloodGroup: "A+",
      patientName: "Nasrin Akter",
      hospital: "Chattogram General Hospital",
      upazila: "Anderkilla",
      district: "Chattogram",
      neededWithin: "Today",
      units: 2,
      status: "urgent",
      note: "Scheduled surgery, donor did not show up. Need replacement donors.",
    },
    {
      id: "3",
      bloodGroup: "B+",
      patientName: "Mohammad Ali",
      hospital: "Sylhet MAG Osmani Medical College",
      upazila: "Sylhet Sadar",
      district: "Sylhet",
      neededWithin: "4 hours",
      units: 1,
      status: "critical",
      note: "Child patient with severe anemia, needs transfusion immediately.",
    },
    {
      id: "4",
      bloodGroup: "AB-",
      patientName: "Shila Khatun",
      hospital: "Rajshahi Medical College Hospital",
      upazila: "Rajshahi Sadar",
      district: "Rajshahi",
      neededWithin: "6 hours",
      units: 2,
      status: "urgent",
      note: "Complications during delivery, doctors urgently requested AB- donors.",
    },
    {
      id: "5",
      bloodGroup: "O+",
      patientName: "Kamrul Hasan",
      hospital: "Bangabandhu Sheikh Mujib Medical University",
      upazila: "Dhanmondi",
      district: "Dhaka",
      neededWithin: "Tonight",
      units: 4,
      status: "critical",
      note: "Major surgery scheduled, multiple units of O+ required before operation.",
    },
  ];

  const getBadgeClass = (status) => {
    if (status === "critical") return "badge badge-error";
    if (status === "urgent") return "badge badge-warning";
    return "badge badge-neutral";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-red-500 mb-2">
              Emergency Requests
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Critical blood requests that need attention now.
            </h2>
            <p className="text-slate-600 max-w-2xl">
              These are high-priority requests from patients and hospitals
              across Bangladesh. If you are a matching donor, your immediate
              response can save a life today.
            </p>
          </div>

          <div className="md:text-right">
            {/* 🔗 Change route if your path is different */}
            <Link
              to="/requests"
              className="btn btn-outline border-red-500 text-red-600 hover:bg-red-500 hover:text-white"
            >
              View All Requests
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencies.map((req) => (
            <div
              key={req.id}
              className="card bg-base-100 shadow-lg border border-rose-100 hover:border-red-400 hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="card-body space-y-3">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Blood Group
                    </p>
                    <h3 className="text-2xl font-extrabold text-red-600">
                      {req.bloodGroup}
                    </h3>
                  </div>
                  <span className={getBadgeClass(req.status)}>
                    {req.status === "critical"
                      ? "Critical"
                      : req.status === "urgent"
                      ? "Urgent"
                      : "Normal"}
                  </span>
                </div>

                {/* Patient & hospital */}
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-semibold">Patient:</span>{" "}
                    {req.patientName}
                  </p>
                  <p>
                    <span className="font-semibold">Hospital:</span>{" "}
                    {req.hospital}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {req.upazila}, {req.district}
                  </p>
                  <p>
                    <span className="font-semibold">Units Needed:</span>{" "}
                    {req.units} bag{req.units > 1 && "s"}
                  </p>
                  <p className="text-red-600 font-semibold">
                    Needed within: {req.neededWithin}
                  </p>
                </div>

                {/* Note */}
                <div className="bg-rose-50 border border-rose-100 p-3 rounded-lg">
                  <p className="text-xs text-slate-700 italic">“{req.note}”</p>
                </div>

                {/* CTA */}
                <div className="pt-2 flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    If you match this group, please respond quickly.
                  </p>

                  {/* 🔗 Change route if your details page is different */}
                  <Link
                    to="/search-requests"
                    className="btn btn-error btn-sm normal-case"
                  >
                    Help Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small note */}
        <p className="mt-6 text-xs text-slate-500 text-center">
          * This is a highlighted view. For more filters and details, visit the
          full requests page.
        </p>
      </div>
    </section>
  );
};

export default EmergencyRequests;
