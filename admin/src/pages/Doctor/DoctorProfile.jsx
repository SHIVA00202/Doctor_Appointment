import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } =
    useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };

      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updateData,
        { headers: { dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dToken) getProfileData();
  }, [dToken]);

  return (
    profileData && (
      <div className="w-full bg-[#f9fafb] p-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              className="w-full md:w-64 rounded-xl border border-gray-200 bg-indigo-50 object-cover"
              src={profileData.image}
              alt="Doctor"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8">

            {/* Name */}
            <h2 className="text-2xl font-semibold text-gray-900">
              {profileData.name}
            </h2>

            {/* Degree / Speciality */}
            <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
              <p>
                {profileData.degree} · {profileData.speciality}
              </p>
              <span className="px-2 py-0.5 border rounded-full text-xs text-gray-500">
                {profileData.experience}
              </span>
            </div>

            {/* About */}
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-800">About</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                {profileData.about}
              </p>
            </div>

            {/* Fees */}
            <div className="mt-5 text-sm text-gray-600">
              <span className="font-medium">Appointment Fee:</span>{" "}
              <span className="text-gray-800">
                {currency}{" "}
                {isEdit ? (
                  <input
                    type="number"
                    className="ml-2 w-24 border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    value={profileData.fees}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        fees: e.target.value,
                      }))
                    }
                  />
                ) : (
                  profileData.fees
                )}
              </span>
            </div>

            {/* Address */}
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-medium">Address</p>
              <div className="mt-1 space-y-1">
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      className="w-full border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      value={profileData.address.line1}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line1: e.target.value },
                        }))
                      }
                    />
                    <input
                      type="text"
                      className="w-full border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      value={profileData.address.line2}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line2: e.target.value },
                        }))
                      }
                    />
                  </>
                ) : (
                  <>
                    <p>{profileData.address.line1}</p>
                    <p>{profileData.address.line2}</p>
                  </>
                )}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 mt-4 text-sm">
              <input
                type="checkbox"
                checked={profileData.available}
                onChange={() =>
                  isEdit &&
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
                className="accent-indigo-600"
              />
              <label className="text-gray-700">Available for appointments</label>
            </div>

            {/* Action Button */}
            <div className="mt-6">
              {isEdit ? (
                <button
                  onClick={updateProfile}
                  className="px-5 py-2 text-sm rounded-lg bg-primary text-white hover:opacity-90 transition"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="px-5 py-2 text-sm rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
                >
                  Edit Profile
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
