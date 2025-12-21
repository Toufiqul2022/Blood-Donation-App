import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
  const { registerWithEmailPassword, setUser, handleGoogleSignIn } =
    useContext(AuthContext);

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/districts.json").then((res) => {
      setDistricts(res.data.districts || res.data);
    });

    axios.get("/upazila.json").then((res) => {
      setUpazilas(res.data.upazilas || res.data);
    });
  }, []);

  const handleSocialLogin = () => {
    handleGoogleSignIn()
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          blood: "",
          district: "",
          upazila: "",
          createdAt: new Date(),
        };
        setUser(result.user);
        axios.post("http://localhost:5000/users", userInfo).then(() => {
          toast.success("Google Login Successful!");
          navigate("/");
        });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const name = form.name.value;
    const blood = form.blood.value;
    const photoFile = form.PhotoUrl.files[0];

    // Password match validation
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    // Password complexity validation
    if (password.length < 6)
      return toast.warning("Password must be at least 6 characters");
    if (!/[A-Z]/.test(password))
      return toast.warning("Password must contain an uppercase letter");
    if (!/[a-z]/.test(password))
      return toast.warning("Password must contain a lowercase letter");
    if (!/[0-9]/.test(password))
      return toast.warning("Password must contain a number");

    try {
      // Upload image
      const formData = new FormData();
      formData.append("image", photoFile);

      const uploadRes = await axios.post(
        "https://api.imgbb.com/1/upload?key=08e5b231ab2fe3f893b40a2ca856d6d1",
        formData
      );

      const imgURL = uploadRes.data.data.display_url;

      // Create user
      const result = await registerWithEmailPassword(email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imgURL,
      });

      setUser({ ...result.user, displayName: name, photoURL: imgURL });

      // Save user to DB
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        photoURL: imgURL,
        blood,
        district: selectedDistrict,
        upazila: selectedUpazila,
        createdAt: new Date(),
      });

      toast.success("Account Registered Successfully!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-2xl shadow-2xl">
          <ToastContainer />
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset space-y-2">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  name="email"
                  placeholder="Email"
                  required
                />

                {/* Photo */}
                <label className="label">Photo</label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  name="PhotoUrl"
                  required
                />

                {/* Blood Group */}
                <label className="label">Blood Group</label>
                <select
                  name="blood"
                  className="select select-bordered w-full"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Blood Group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>

                {/* District */}
                <label className="label">District</label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                    setSelectedUpazila("");
                  }}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select Your District</option>
                  {districts.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>

                {/* Upazila */}
                <label className="label">Upazila</label>
                <select
                  value={selectedUpazila}
                  onChange={(e) => setSelectedUpazila(e.target.value)}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select Your Upazila</option>
                  {upazilas
                    .filter((u) => u.district_id === selectedDistrict)
                    .map((u) => (
                      <option key={u.id} value={u.name}>
                        {u.name}
                      </option>
                    ))}
                </select>

                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  name="password"
                  placeholder="Password"
                  required
                />

                {/* Confirm Password */}
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />

                {/* Submit */}
                <button className="btn btn-neutral w-full mt-6">
                  Register
                </button>
              </fieldset>
            </form>

            {/* Login Link */}
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-bold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
