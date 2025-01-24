import React from 'react';

const ExperienceIcon = () => (
  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5 text-white"
      fill="currentColor"
    >
      <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4z" />
    </svg>
  </div>
);

const TimelinePoint = () => (
  <div className="absolute -left-2.5 w-5 h-5">
    <div className="w-full h-full bg-blue-600 rounded-full" />
  </div>
);

const Experience = ({ experiences }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-6">
      <ExperienceIcon />
      <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
    </div>
    <div className="ml-4">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200">
          <TimelinePoint />
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-base text-gray-600">{exp.company}</p>
            <div className="text-sm text-gray-500">{exp.duration}</div>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="relative pl-5">
                <span className="absolute left-0 top-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                {resp}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;