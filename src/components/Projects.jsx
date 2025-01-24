import React from 'react';

const ProjectsIcon = () => (
  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5 text-white"
      fill="currentColor"
    >
      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
    </svg>
  </div>
);

const TimelinePoint = () => (
  <div className="absolute -left-2.5 w-5 h-5">
    <div className="w-full h-full bg-blue-600 rounded-full" />
  </div>
);

const Projects = ({ projects }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-6">
      <ProjectsIcon />
      <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
    </div>
    <div className="ml-4">
      {projects.map((project, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200">
          <TimelinePoint />
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.tech}</p>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
            {project.details.map((detail, idx) => (
              <li key={idx} className="relative pl-5">
                <span className="absolute left-0 top-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;