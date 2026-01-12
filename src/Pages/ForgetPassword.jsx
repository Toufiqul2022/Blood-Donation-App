import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router"; // ✅ from react-router-dom
import { auth } from "../Firebase/Firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const { email } = useParams();

  const handleReset = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;

    sendPasswordResetEmail(auth, Email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-sky-500/15 overflow-hidden px-4">
      <ToastContainer position="top-right" autoClose={5000} />

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl z-10">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Reset Password
          </h2>
          <p className="text-sm text-center mb-4 text-slate-600">
            Enter your email address and we’ll send you a reset link.
          </p>
          <form onSubmit={handleReset} className="fieldset space-y-2">
            <label className="label">Email</label>
            <input
              defaultValue={email}
              type="email"
              className="input input-bordered w-full"
              name="email"
              placeholder="Email"
              required
            />
            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
