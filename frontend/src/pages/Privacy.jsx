import React from "react";
import { assets } from "../assets/assets";

const Privacy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-14 px-4 mt-28">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-gray-700">

        {/* Header */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">

            {/* Title Section (Left) */}
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We are committed to safeguarding your personal and medical
                information with the highest standards of security and
                confidentiality.
              </p>
            </div>

            {/* Logo (Right) */}
            <div className="flex justify-start sm:justify-end">
              <img
                src={assets.logo}
                alt="Hospital Logo"
                className="w-32 md:w-36 object-contain opacity-90"
              />
            </div>

          </div>
        </div>

        {/* Intro */}
        <p className="mb-8 leading-relaxed text-[15px]">
          This Privacy Policy outlines how we collect, use, store, and protect
          your personal information when you access our healthcare services,
          applications, and digital platforms.
        </p>

        {/* Section 1 */}
        <section className="mb-7">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-1 text-[15px]">
            <li>Personal identification details such as name and contact information</li>
            <li>Account credentials and authentication data</li>
            <li>Appointment, consultation, and service-related records</li>
            <li>Technical data including IP address and device information</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-7">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            2. Use of Information
          </h2>
          <ul className="list-disc list-inside space-y-1 text-[15px]">
            <li>User identity verification and account management</li>
            <li>Scheduling and administration of healthcare services</li>
            <li>Service improvement and quality assurance</li>
            <li>Communication of important updates and notifications</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-7">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            3. Data Security & Confidentiality
          </h2>
          <p className="leading-relaxed text-[15px]">
            We implement robust technical and organizational measures to protect
            your data. Access to sensitive information is restricted to
            authorized personnel and secured using encryption and monitoring
            practices.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-7">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            4. Cookies & Analytics
          </h2>
          <p className="leading-relaxed text-[15px]">
            Cookies may be used to enhance functionality, ensure secure sessions,
            and analyze system performance. You may manage cookie preferences
            through your browser settings.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-7">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            5. Third-Party Service Providers
          </h2>
          <p className="leading-relaxed text-[15px]">
            We do not sell personal data. Limited information may be shared with
            trusted service providers solely to support healthcare operations
            and system infrastructure.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-7">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            6. Patient & User Rights
          </h2>
          <p className="leading-relaxed text-[15px]">
            You have the right to request access, correction, or deletion of your
            personal data in accordance with applicable laws and regulations.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            7. Updates to This Policy
          </h2>
          <p className="leading-relaxed text-[15px]">
            This policy may be revised periodically to reflect legal or
            operational changes. Updated versions will be posted on this page.
          </p>
        </section>

        {/* Footer */}
        <div className="pt-6 border-t border-gray-200 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>

      </div>
    </div>
  );
};

export default Privacy;
