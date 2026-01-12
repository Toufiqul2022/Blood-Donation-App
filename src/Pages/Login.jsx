import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // ✅
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { setUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!password) {
      return toast.warning("Please enter your password");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!", { autoClose: 1500 });

        setTimeout(() => {
          navigate(location.state || "/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      return toast.warning("Please enter your email first.");
    }
    // go to reset page with email param
    navigate(`/forget/${encodeURIComponent(email)}`);
  };

  return (
    <div className="hero bg-sky-500/15 min-h-screen">
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="input input-bordered"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label className="label mt-2">Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div className="mt-2">
                  <button
                    type="button" // ✅ not submitting form
                    onClick={handleForgotPassword} // ✅ navigate to reset page
                    className="link link-hover text-sm"
                  >
                    Forgot password?
                  </button>
                </div>
                <Link to="/register" className="block mt-2 text-center text-sm">
                  New in our Website?{" "}
                  <span className="text-blue-600 font-bold">Register</span>
                </Link>
                <button type="submit" className="btn btn-neutral mt-4 w-full">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
