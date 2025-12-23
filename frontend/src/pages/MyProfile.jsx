import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="min-h-screen bg-gray-50 flex justify-center px-4 mt-28">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">

          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
            {isEdit ? (
              <label htmlFor="image" className="relative cursor-pointer">
                <img
                className="w-36 rounded opacity-75"
                src={image ? URL.createObjectURL(image) : userData.image}
                alt=""
              />
              <img
                className="w-10 absolute bottom-12 right-12"
                src={image ? "" : assets.upload_icon}
                alt=""
              />
                <input
                  type="file"
                  hidden
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            ) : (
              <img
                className="w-32 h-32 rounded-full object-cover"
                src={userData.image}
                alt="Profile"
              />
            )}

            <div className="text-center sm:text-left">
              {isEdit ? (
                <input
                  className="text-2xl font-semibold bg-gray-100 px-3 py-1 rounded-md"
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              ) : (
                <h2 className="text-2xl font-semibold text-gray-900">
                  {userData.name}
                </h2>
              )}
              <p className="text-gray-500 mt-1">{userData.email}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold  text-gray-500 uppercase underline mt-3 mb-4">
              Contact Information
            </h3>

            <div className="grid grid-cols-[120px_1fr] gap-y-4 text-sm">
              <p className="font-medium text-gray-700">Phone</p>
              {isEdit ? (
                <input
                  className="bg-gray-100 px-3 py-2 rounded-md"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-600">{userData.phone}</p>
              )}

              <p className="font-medium text-gray-700">Address</p>
              {isEdit ? (
                <div className="space-y-2">
                  <input
                    className="bg-gray-100 px-3 py-2 rounded-md w-full"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <input
                    className="bg-gray-100 px-3 py-2 rounded-md w-full"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                  />
                </div>
              ) : (
                <p className="text-gray-600">
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>

          {/* Basic Info */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold underline mt-3 text-gray-500 uppercase mb-4">
              Basic Information
            </h3>

            <div className="grid grid-cols-[120px_1fr] gap-y-4 text-sm">
              <p className="font-medium text-gray-700">Gender</p>
              {isEdit ? (
                <select
                  className="bg-gray-100 px-3 py-2 rounded-md w-32"
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-gray-600">{userData.gender}</p>
              )}

              <p className="font-medium text-gray-700">Date of Birth</p>
              {isEdit ? (
                <input
                  type="date"
                  className="bg-gray-100 px-3 py-2 rounded-md w-40"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-600">{userData.dob}</p>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10 flex justify-end">
            {isEdit ? (
              <button
                onClick={updateUserProfileData}
                className="bg-primary text-white px-8 py-2 rounded-full hover:opacity-90 transition"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="border border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfile;
