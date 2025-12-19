import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [profile, setProfile] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  // FETCH PROFILE
  useEffect(() => {
    axiosSecure
      .get("/profile")
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSecure]);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // SAVE PROFILE
  const handleSave = async () => {
    try {
      await axiosSecure.patch("/profile", profile);

      // Re-fetch updated data from backend
      const res = await axiosSecure.get("/profile");
      setProfile(res.data);

      setIsEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden mt-10">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-red-500 to-rose-600 p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar || user?.photoURL}
            alt="avatar"
            className="w-16 h-16 rounded-full border-4 border-white object-cover"
          />
          <div className="text-white">
            <h2 className="text-xl font-semibold">
              {profile.name || "My Profile"}
            </h2>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>

        {!isEdit ? (
          <button
            onClick={() => setIsEdit(true)}
            className="btn btn-sm bg-white text-red-600"
          >
            ✏️ Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="btn btn-sm btn-success text-white"
          >
            💾 Save
          </button>
        )}
      </div>

      {/* BODY */}
      <div className="p-6 space-y-8">
        {/* PERSONAL INFO */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b pb-2">
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={profile.name || ""}
              onChange={handleChange}
              disabled={!isEdit}
              placeholder="Name"
              className="input input-bordered w-full"
            />

            <input
              value={user?.email}
              disabled
              className="input input-bordered w-full bg-gray-100"
            />

            <select
              name="blood"
              value={profile.blood || ""}
              onChange={handleChange}
              disabled={!isEdit}
              className="select select-bordered w-full"
            >
              <option value="">Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b pb-2">Location</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="district"
              value={profile.district || ""}
              onChange={handleChange}
              disabled={!isEdit}
              placeholder="District"
              className="input input-bordered w-full"
            />

            <input
              name="upazila"
              value={profile.upazila || ""}
              onChange={handleChange}
              disabled={!isEdit}
              placeholder="Upazila"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* AVATAR */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b pb-2">
            Profile Picture
          </h3>

          <input
            name="avatar"
            value={profile.avatar || ""}
            onChange={handleChange}
            disabled={!isEdit}
            placeholder="Avatar URL"
            className="input input-bordered w-full"
          />

          {profile.avatar && (
            <div className="mt-4 flex justify-center">
              <img
                src={profile.avatar}
                alt="preview"
                className="w-28 h-28 rounded-full object-cover border shadow"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
