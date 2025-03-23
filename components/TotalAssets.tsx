import React from 'react';

export default function TotalAssets() {
  return (
    <div className="bg-white dark:bg-[#1c1d25] rounded-lg p-6 shadow-sm dark:shadow-none transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-900 dark:text-white text-lg font-medium transition-colors">Total Assets</h2>
        <select className="bg-transparent text-gray-600 dark:text-gray-400 text-sm border-none outline-none transition-colors">
          <option>Last Month</option>
          <option>This Month</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="text-2xl text-gray-900 dark:text-white mb-4 transition-colors">
        4,553,215
      </div>
      <div className="h-[200px] relative">
        {/* We'll implement the actual chart with a charting library */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff4b6e10] dark:from-[#ff4b6e20] to-transparent rounded transition-colors">
          <div className="w-full h-full relative">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(180deg, rgba(255,75,110,0.1) 0%, rgba(255,75,110,0) 100%)',
            }}></div>
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M0,100 C100,80 200,120 300,90 C400,60 500,100 600,85"
                stroke="#ff4b6e"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
