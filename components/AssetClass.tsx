import React from 'react';

export default function AssetClass() {
  return (
    <div className="bg-white dark:bg-[#1c1d25] rounded-lg p-6 shadow-sm dark:shadow-none transition-colors">
      <h2 className="text-gray-900 dark:text-white text-lg font-medium mb-4 transition-colors">Asset Class</h2>
      <div className="relative w-[200px] h-[200px] mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#e5e7eb"
            className="dark:stroke-[#2a2b36] transition-colors"
            strokeWidth="10"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#ff4b6e"
            strokeWidth="10"
            strokeDasharray="251.2"
            strokeDashoffset="188.4"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">25%</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm transition-colors">Stocks</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff4b6e]"></div>
            <span className="text-gray-500 dark:text-gray-400 transition-colors">High Risk</span>
          </div>
          <span className="text-gray-900 dark:text-white transition-colors">36%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-[#2a2b36] transition-colors"></div>
            <span className="text-gray-500 dark:text-gray-400 transition-colors">Low Risk</span>
          </div>
          <span className="text-gray-900 dark:text-white transition-colors">18%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2a2b36]"></div>
            <span className="text-gray-400">Safe</span>
          </div>
          <span className="text-white">46%</span>
        </div>
      </div>
    </div>
  );
}
