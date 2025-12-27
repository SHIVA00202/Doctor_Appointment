import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";

const Home = () => {
  const { dToken, profileData, getProfileData } = useContext(DoctorContext);

  useEffect(() => {
    if (dToken) getProfileData();
  }, [dToken]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] w-full bg-[#f8fafc]">
      <div className="text-center select-none flex flex-col items-center max-w-2xl w-full px-4 py-12" style={{ marginTop: '-48px', marginLeft: '-48px' }}>

        {/* Plus Icon */}
        <div className="flex justify-center items-center mb-6">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50">
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#6366f1"
            >
              <path
                d="M12 5v14M5 12h14"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[26px] font-semibold text-gray-900 tracking-tight">
          Prescripto Doctor Panel
        </h1>

        {/* Welcome Badge */}
        <div className="mt-4 mb-3">
          <span className="inline-block text-[18px] font-semibold text-indigo-600 bg-indigo-50 px-8 py-2 rounded-full border border-indigo-200">
            {`Welcome, ${profileData?.name}`}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-[15px] text-gray-500">
          Doctor management workspace
        </p>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-indigo-500 mx-auto my-6 rounded-full" />

        {/* Description */}
        <p className="text-[15px] text-gray-600 leading-relaxed max-w-xl">
          Use the navigation panel to manage appointments, update your profile,
          and monitor your daily schedule efficiently.
        </p>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-8">
          You are logged in with doctor access
        </p>

      </div>
    </div>
  );
};

export default Home;
