'use client';

import React, { useEffect, useState } from 'react';

// --- Type Declarations for Custom Element ---
// This is required to stop TypeScript/React from throwing an error 
// because 'spline-viewer' is not a standard HTML element.
interface SplineViewerProps extends React.HTMLAttributes<HTMLElement> {
  url: string;
  // Add other supported attributes here (e.g., camera, events-target)
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': SplineViewerProps;
    }
  }
}
// -------------------------------------------

const SPLINE_SCRIPT_URL = 'https://unpkg.com/@splinetool/viewer@1.10.81/build/spline-viewer.js';
const SCRIPT_ID = 'spline-viewer-script';

const SplineViewerComponent = ({ url }: { url: string }) => {
  // Use state to track if the component has mounted on the client
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // 1. Mark as mounted (client-side execution started)
    setIsMounted(true);
    
    // 2. Manually append the script tag to the document head if it hasn't been loaded yet.
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'module';
      script.src = SPLINE_SCRIPT_URL; 
      document.head.appendChild(script);
    }

    // Cleanup function is not strictly necessary for script loading but good practice
    // return () => { /* optional cleanup */ };
  }, []);

  // Show a loading state until the client-side mount effect runs
  if (!isMounted) {
    return (
      // Aesthetic loading state while waiting for the client environment to initialize
      // <div className="flex items-center justify-center w-full h-[500px] bg-gray-100 rounded-xl shadow-lg border border-gray-200">
      //   <p className="text-gray-600 font-inter text-lg animate-pulse">
      //     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      //       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      //       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      //     </svg>
      //     Loading 3D Scene...
      //   </p>
      // </div>
      <></>
    );
  }

  return (
    // The Web Component itself, rendered only after mounting
    <spline-viewer 
      url={url} 
      // Ensure the viewer takes up the full space of its parent container
      
    />
  );
};


export default SplineViewerComponent;

// --- Example Usage Guide (How you would use this in your app/page.tsx or other component) ---
/*

// Example in app/page.tsx:

import SplineViewerComponent from './components/SplineViewerComponent';

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px', backgroundColor: '#f9fafb' }}>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Next.js Spline Viewer</h1>
      
      // Crucial: Set a defined size for the container
      <div style={{ width: '90%', maxWidth: '1000px', height: '600px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <SplineViewerComponent 
          url="https://prod.spline.design/QmwB5DdOd06Qtmf8/scene.splinecode" 
        />
      </div>
      
    </div>
  );
}

*/