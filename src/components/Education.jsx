import React from 'react';

const EducationIcon = () => (
  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5 text-white"
      fill="currentColor"
    >
      <path d="M12 3L1 9l11 6l11-6L12 3zm0 15l-8-4.4v3L12 21l8-4.4v-3L12 18z" />
    </svg>
  </div>
);

const Education = ({ education = [] }) => {
  // If no education data is provided, show a placeholder
  if (education.length === 0) {
    return (
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <EducationIcon />
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
        </div>
        <p className="ml-4 text-gray-600">No educational information available.</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <EducationIcon />
        <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
      </div>
      <div>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {edu.degree || 'Degree Not Specified'}
            </h3>
            <p className="text-base text-gray-600">
              {edu.institution || 'Institution Not Specified'}
            </p>
            {edu.location && (
              <p className="text-sm text-gray-500 italic">
                {edu.location}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;