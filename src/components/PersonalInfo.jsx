import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{personalInfo.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">{personalInfo.title}</h2>
      <div className="space-y-2">
        <p className="text-gray-600">Phone: {personalInfo.phone}</p>
        <p className="text-gray-600">Email: {personalInfo.email}</p>
        <div className="flex items-center space-x-2">
          {Object.entries(personalInfo.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              className="text-blue-600 hover:text-blue-800 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform === 'GitHub' && <FaGithub size={20} className="mr-1" />}
              {platform === 'LinkedIn' && <FaLinkedin size={20} className="mr-1" />}
              {platform === 'LeetCode' && <SiLeetcode size={20} className="mr-1" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;