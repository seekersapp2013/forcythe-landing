import React, { useEffect } from 'react';

export default function ZohoChat() {
  useEffect(() => {
    // Initialize Zoho object
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      ready: function() {}
    };

    // Create and load the script
    const script = document.createElement('script');
    script.id = 'zsiqscript';
    script.src = 'https://salesiq.zohopublic.com/widget?wc=siq2a40f90cc17e22ac4573158509221c6018e394057a7c2701bbb1bcf824afd6a8';
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      const existingScript = document.getElementById('zsiqscript');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // Clean up Zoho object
      delete window.$zoho;
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything visible
} 