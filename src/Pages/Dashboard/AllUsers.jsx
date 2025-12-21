import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers, FaUserPlus, FaBan, FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axiosSecure.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [axiosSecure]);

  const handleStatusChange = (email, currentStatus) => {
    const newStatus = currentStatus === "active" ? "blocked" : "active";

    Swal.fire({
      title: "Are you sure?",
      text: `You are about to ${newStatus} this user!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${newStatus} it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/update/user/status?email=${email}&status=${newStatus}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: `User status updated to ${newStatus}.`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
              fetchUsers();
            }
          });
      }
    });
  };

  const handleMakeVolunteer = (user) => {
    Swal.fire({
      title: "Promote to Volunteer?",
      text: `${user.name} will become a volunteer.`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Promote!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/make-volunteer/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Promoted!",
              text: `${user.name} is now a Volunteer.`,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            fetchUsers();
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="w-full mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FaUsers className="text-3xl text-primary" />
          <div>
            <h2 className="text-3xl font-bold">All Users</h2>
            <p className="text-gray-500">Manage all registered users</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl rounded-2xl border border-gray-200">
          <div className="card-body p-0">
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">

                <thead className="bg-base-200 text-base-content">
                  <tr className="text-sm uppercase">
                    <th>#</th>
                    <th>User</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((u, index) => (
                    <tr key={u._id} className="hover">
                      <td>{index + 1}</td>

                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={
                                  u.photoURL ||
                                  "https://i.ibb.co/2kRkz9n/user.png"
                                }
                                alt="user"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="font-bold">
                              {u.name || u.displayName}
                            </p>
                            <p className="text-xs text-gray-500">{u.email}</p>
                          </div>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td>
                        <span
                          className={`badge font-medium ${
                            u.role === "admin"
                              ? "badge-primary text-white"
                              : u.role === "volunteer"
                              ? "badge-secondary text-white"
                              : "badge-ghost"
                          }`}
                        >
                          {u.role || "donor"}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`badge font-medium ${
                            u.status === "blocked"
                              ? "badge-error text-white"
                              : "badge-success text-white"
                          }`}
                        >
                          {u.status || "active"}
                        </span>
                      </td>

                      {/* Action Buttons */}
                      <td className="text-center">
                        <div className="flex gap-2 justify-center flex-wrap">
                          {/* Block / Unblock Button */}
                          {u.status === "active" ? (
                            <button
                              onClick={() =>
                                handleStatusChange(u.email, u.status)
                              }
                              className="btn btn-ms btn-error text-white tooltip tooltip-top"
                              data-tip="Block User"
                            >
                              <FaBan /> Block
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleStatusChange(u.email, u.status)
                              }
                              className="btn btn-ms btn-success text-white tooltip tooltip-top"
                              data-tip="Unblock User"
                            >
                              <FaCheckCircle /> Unblock
                            </button>
                          )}

                          {/* Make Volunteer Button */}
                          {u.role === "donor" && (
                            <button
                              onClick={() => handleMakeVolunteer(u)}
                              className="btn btn-ms btn-info text-white tooltip tooltip-top"
                              data-tip="Make Volunteer"
                            >
                              <FaUserPlus /> Vol
                            </button>
                          )}

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {users.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">No users found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
