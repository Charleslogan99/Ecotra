import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-800 leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          We value your privacy. Please review our privacy policy to understand how we collect, use, and protect your information.
        </p>
      </div>

      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12 mt-16 lg:mt-24">
        <div className="bg-white py-12 sm:py-16 lg:py-20 px-8 sm:px-12 lg:px-24 rounded-2xl shadow-lg">
          <div className="space-y-12">
            {/* Table of Contents */}
            <div className="text-left mb-12">
              <h2 className="text-3xl font-serif text-gray-950 mb-6">Table of Contents:</h2>
              <ul className="list-decimal ml-6 space-y-2">
                {[
                  'Introduction',
                  'Information We Collect',
                  'How We Use Your Information',
                  'Data Security',
                  'Third-Party Services',
                  'Cookies',
                  'Your Rights',
                  'Contact Us'
                ].map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-green-600 hover:text-green-800"
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <section id="introduction">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">Introduction</h2>
              <p className="mt-4 text-lg text-gray-700">
                Welcome to Ecotra! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platform and use our services.
              </p>
            </section>

            <section id="information-we-collect">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">Information We Collect</h2>
              <div className="mt-4 text-lg text-gray-700">
                We collect the following types of information:
                <ul className="list-disc ml-6 mt-2">
                  <li>Personal information you provide (e.g., name, email address, payment information).</li>
                  <li>Technical data (e.g., IP address, browser type, device information).</li>
                  <li>Usage data (e.g., how you interact with our website and services).</li>
                </ul>
              </div>
            </section>

            <section id="how-we-use-your-information">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">How We Use Your Information</h2>
              <div className="mt-4 text-lg text-gray-700">
                We use the information we collect to:
                <ul className="list-disc ml-6 mt-2">
                  <li>Provide, personalize, and improve our services.</li>
                  <li>Communicate with you regarding account updates, promotions, and support.</li>
                  <li>Analyze usage trends to enhance our platform's functionality and user experience.</li>
                </ul>
              </div>
            </section>

            <section id="data-security">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">Data Security</h2>
              <div className="mt-4 text-lg text-gray-700">
                We implement various security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
              </div>
            </section>

            <section id="third-party-services">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">Third-Party Services</h2>
              <div className="mt-4 text-lg text-gray-700">
                We may use third-party service providers to assist with certain functions of our platform. These service providers have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for other purposes.
              </div>
            </section>

            <section id="cookies">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">Cookies</h2>
              <div className="mt-4 text-lg text-gray-700">
                We use cookies to enhance your experience on our platform. Cookies are small files stored on your device to help us analyze traffic and remember your preferences. You can disable cookies through your browser settings, but this may affect some features of the platform.
              </div>
            </section>

            <section id="your-rights">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">Your Rights</h2>
              <div className="mt-4 text-lg text-gray-700">
                You have the right to:
                <ul className="list-disc ml-6 mt-2">
                  <li>Access, update, or delete your personal information.</li>
                  <li>Opt-out of marketing communications.</li>
                  <li>Request that we restrict the processing of your data.</li>
                </ul>
                To exercise your rights, please contact us using the information provided below.
              </div>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">Contact Us</h2>
              <div className="mt-4 text-lg text-gray-700">
                If you have any questions about our Privacy Policy or how we handle your personal data, please contact us at:
                <br />
                <a href="mailto:support@ecotra.com" className="text-green-600 hover:text-green-800">support@ecotra.com</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
