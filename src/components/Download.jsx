import React from 'react';

const DownloadButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-8 right-8 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-colors duration-200 font-medium"
  >
    <svg 
      className="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
    <span>Download Resume</span>
  </button>
);

export default DownloadButton;