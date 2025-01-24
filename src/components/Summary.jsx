import React from 'react';

const Summary = ({ summary }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Summary</h2>
    <p className="text-gray-700 leading-relaxed">{summary}</p>
  </div>
);

export default Summary;