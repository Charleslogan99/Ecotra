import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white p-16 rounded-3xl shadow-xl">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Terms & Conditions
        </h1>

        {/* Introduction Section */}
        <section id="intro" className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our platform! By accessing or using our services, you
            agree to comply with and be bound by these Terms and Conditions.
            Please read them carefully before using our services. Your use of
            our platform indicates your acceptance of these terms.
          </p>
        </section>

        {/* User Responsibilities Section */}
        <section id="user-responsibilities" className="space-y-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            User Responsibilities
          </h2>
          <ul className="list-disc ml-8 space-y-4 text-lg text-gray-700 leading-relaxed">
            <li>
              Ensure that all information provided is accurate and up-to-date.
            </li>
            <li>Keep your account information confidential and secure.</li>
            <li>
              Comply with all applicable laws and regulations when using our
              services.
            </li>
            <li>
              Not engage in any harmful or unlawful activities through our
              platform.
            </li>
          </ul>
        </section>

        {/* Privacy Policy Section */}
        <section id="privacy-policy" className="space-y-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We respect your privacy. Our Privacy Policy outlines how we collect,
            use, and protect your personal information. By using our services,
            you consent to the collection and use of your data in accordance
            with this policy. We are committed to safeguarding your privacy.
          </p>
        </section>

        {/* Limitations of Liability Section */}
        <section id="limitations" className="space-y-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Limitations of Liability
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our liability is limited to the fullest extent permitted by law. We
            are not responsible for any indirect, incidental, or consequential
            damages resulting from the use of our services. In no event shall
            our liability exceed the amount you paid to access our platform.
          </p>
        </section>

        {/* Changes to Terms Section */}
        <section id="changes" className="space-y-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Changes to Terms
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms and Conditions at any
            time. Any changes will be posted on this page with an updated
            effective date. Please review this page periodically to stay
            informed of any updates.
          </p>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="space-y-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you have any questions or concerns about these Terms and
            Conditions, feel free to reach out to us. You can contact us via
            email at{" "}
            <a
              href="mailto:support@ecotra.com"
              className="text-green-600 hover:underline"
            >
              support@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
