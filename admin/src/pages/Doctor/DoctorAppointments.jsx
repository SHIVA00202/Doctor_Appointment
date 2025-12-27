import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-6 px-4">
      <p className="mb-4 text-xl font-semibold text-gray-800">
        All Appointments
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm text-sm max-h-[80vh] min-h-[50vh] overflow-y-auto">
        {/* Header */}
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-2 py-4 px-6 border-b bg-gray-50 font-medium text-gray-600">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p className="text-center">Action</p>
        </div>

        {appointments
          .slice()
          
          .reverse()
          .map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center gap-2 px-6 py-4 border-b last:border-none text-gray-600 hover:bg-gray-50 transition"
            >
              <p className="max-sm:hidden font-medium text-gray-500">
                {index + 1}
              </p>

              {/* Patient */}
              <div className="flex items-center gap-3">
                <img
                  className="w-9 h-9 rounded-full object-cover border"
                  src={item.userData.image}
                  alt=""
                />
                <p className="font-medium text-gray-800">
                  {item.userData.name}
                </p>
              </div>

              {/* Payment */}
              <p
                className={`text-xs font-medium px-3 py-1 rounded-full w-fit ${
                  item.payment
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {item.payment ? "ONLINE" : "CASH"}
              </p>

              <p className="max-sm:hidden">
                {calculateAge(item.userData.dob)}
              </p>

              <p className="text-gray-700">
                {slotDateFormat(item.slotDate)}, {item.slotTime}
              </p>

              <p className="font-semibold text-gray-800">
                {currency}
                {item.amount}
              </p>

              {/* Action */}
              <div className="flex justify-center items-center gap-2">
                {item.cancelled ? (
                  <span className="text-xs font-semibold text-red-500">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className="text-xs font-semibold text-green-600">
                    Completed
                  </span>
                ) : (
                  <>
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-9 p-1 rounded-full hover:bg-red-100 cursor-pointer transition"
                      src={assets.cancel_icon}
                      alt=""
                    />
                    <img
                      onClick={() => completeAppointment(item._id)}
                      className="w-9 p-1 rounded-full hover:bg-green-100 cursor-pointer transition"
                      src={assets.tick_icon}
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
