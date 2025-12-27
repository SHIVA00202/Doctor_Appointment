const AdminHome = () => {
  return (
    <div
      className="flex items-center justify-center min-h-[calc(100vh-80px)] w-full bg-[#f8fafc]"
    >
      <div
        className="rounded-3xl px-12 py-16 max-w-lg w-full text-center select-none flex flex-col items-center"
        style={{ marginTop: "-96px", marginLeft: "-96px" }}
      >
        {/* Icon */}
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
          Prescripto Administration
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] text-gray-500 mt-2">
          Internal management workspace
        </p>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-indigo-500 mx-auto my-6 rounded-full" />

        {/* Description */}
        <p className="text-[15px] text-gray-600 leading-relaxed max-w-md">
          Use the navigation panel to manage doctors, review appointments,
          and control platform operations.
        </p>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-8">
         Welcome, Admin! Your actions help keep Prescripto running smoothly.
        </p>
      </div>
    </div>
  );
};

export default AdminHome;
