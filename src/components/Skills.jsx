import React from 'react';

const SkillsIcon = () => (
  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5 text-white"
      fill="currentColor"
    >
      <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L19.93 12H18v7h-4v-6H9v6H5v-7H3.07L12 4.84z" />
    </svg>
  </div>
);

const SkillLevel = ({ level }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((value) => (
      <div
        key={value}
        className={`w-3 h-3 rounded-full ${
          value <= level ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      />
    ))}
  </div>
);

const Skills = ({ skills }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-6">
      <SkillsIcon />
      <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
    </div>
    <div className="space-y-4">
      {Object.entries(skills).map(([skill, level]) => (
        <div key={skill} className="flex items-center justify-between">
          <span className="text-gray-700">{skill}</span>
          <SkillLevel level={level} />
        </div>
      ))}
    </div>
  </div>
);

export default Skills;