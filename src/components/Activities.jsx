import React from 'react';

const ActivitiesIcon = () => (
  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5 text-white"
      fill="currentColor"
    >
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
  </div>
);

const TimelinePoint = () => (
  <div className="absolute -left-2.5 w-5 h-5">
    <div className="w-full h-full bg-blue-600 rounded-full" />
  </div>
);

const Activities = ({ activities = [] }) => {
  // If activities is undefined or null, it will default to an empty array
  if (activities.length === 0) {
    return (
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <ActivitiesIcon />
          <h2 className="text-2xl font-semibold text-gray-800">Activities & Achievements</h2>
        </div>
        <p className="ml-4 text-gray-600">No activities to display.</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <ActivitiesIcon />
        <h2 className="text-2xl font-semibold text-gray-800">Activities & Achievements</h2>
      </div>
      <div className="ml-4">
        {activities.map((activity, index) => (
          <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200">
            <TimelinePoint />
            <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
            {activity.details && (
              <ul className="space-y-2 text-gray-600 text-sm">
                {activity.details.map((detail, idx) => (
                  <li key={idx} className="relative pl-5">
                    <span className="absolute left-0 top-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;