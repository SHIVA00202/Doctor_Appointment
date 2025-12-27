import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);

  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="m-5 space-y-10">
        {/* ===== TOP STATS (FLEX) ===== */}
        <div className="flex flex-wrap gap-5">
          {/* Doctors */}
          <div className="flex items-center gap-4 bg-white p-5 min-w-[250px] flex-1 rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <img className="w-14" src={assets.doctor_icon} alt="" />
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                {dashData.doctors}
              </p>
              <p className="text-sm text-gray-500">Doctors</p>
            </div>
          </div>

          {/* Appointments */}
          <div className="flex items-center gap-4 bg-white p-5 min-w-[250px] flex-1 rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                {dashData.appointments}
              </p>
              <p className="text-sm text-gray-500">Appointments</p>
            </div>
          </div>

          {/* Patients */}
          <div className="flex items-center gap-4 bg-white p-5 min-w-[250px] flex-1 rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                {dashData.patients}
              </p>
              <p className="text-sm text-gray-500">Patients</p>
            </div>
          </div>
        </div>

        {/* ===== LATEST BOOKINGS ===== */}
        <div className="bg-white rounded-xl border shadow-sm">
          <div className="flex items-center gap-3 px-6 py-4 border-b bg-gray-50 rounded-t-xl">
            <img className="w-5" src={assets.list_icon} alt="" />
            <p className="font-semibold text-gray-800">Latest Bookings</p>
          </div>

          <div className="flex flex-col divide-y">
            {dashData.latestAppointments.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-6 py-4 hover:bg-gray-50 transition"
              >
                <img
                  className="w-11 h-11 rounded-full object-cover border"
                  src={item.docData.image}
                  alt=""
                />

                <div className="flex-1 ml-4">
                  <p className="font-medium text-gray-800">
                    {item.docData.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>

                {/* Status / Action */}
                {item.cancelled ? (
                  <span className="text-xs font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    Completed
                  </span>
                ) : (
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-9 p-1 rounded-full hover:bg-red-100 cursor-pointer transition"
                    src={assets.cancel_icon}
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
