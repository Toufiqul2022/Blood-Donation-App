import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../Provider/AuthProvider";

const Donate = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);

  const handleCheckOut = (e) => {
    e.preventDefault();
    const donateAmount = e.target.donateAmount.value;
    const donateEmail = user?.email;
    const donateName = user?.displayName;

    const formData = {
      donateAmount,
      donateEmail,
      donateName,
    };

    axiosInstance.post("/create-payment-checkout", formData).then((res) => {
      console.log(res.data);
      window.location.href = res.data.url;
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-500/15  px-4 py-10">
      <div className="card w-full max-w-md bg-base-100/90 backdrop-blur-md shadow-2xl border border-white/50">
        <div className="card-body items-center text-center p-8">
          {/* Decorative Icon Header */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            Support Our Cause
          </h2>
          <p className="text-gray-500 mt-2 mb-6 max-w-xs">
            Your generous donation helps us continue our mission to save lives.
          </p>

          <form onSubmit={handleCheckOut} className="w-full space-y-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Donation Amount
                </span>
              </label>
              {/* Input with Currency Icon */}
              <label className="input input-bordered flex items-center gap-2 w-full focus-within:ring-2 ring-primary/20 transition-all">
                <span className="text-gray-500 font-bold">$</span>
                <input
                  name="donateAmount"
                  type="number"
                  className="grow font-semibold text-gray-700 placeholder:font-normal"
                  placeholder="0.00"
                  required
                  min="1"
                />
              </label>
            </div>

            <button className="btn btn-primary w-full text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-0.5">
              Donate Now
            </button>
          </form>

          {user && (
            <div className="mt-6 flex items-center justify-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-6">
                  <span className="text-xs">{user.displayName?.charAt(0)}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Logged in as{" "}
                <span className="font-semibold text-gray-700">
                  {user.displayName}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donate;
