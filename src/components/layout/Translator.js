'use client'
import React, { useEffect } from 'react';

const Translator = () => {
  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      if (!document.querySelector('#google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en' }, 
            'google_translate_element'
          );
        } catch (error) {
          console.error('Google Translate initialization error:', error);
        }
      };
    };

    loadGoogleTranslateScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      className="bg-black text-white p-1 z-50 shadow-md"
    ></div>
  );
};

export default Translator;
