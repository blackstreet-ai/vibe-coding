import React from 'react';

export default function ActiveUsers() {
  return (
    <div className="bg-white dark:bg-[#1c1d25] rounded-lg p-6 shadow-sm dark:shadow-none transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-900 dark:text-white text-lg font-medium transition-colors">Active Users in SF</h2>
        <div className="text-gray-500 dark:text-gray-400 text-sm transition-colors">169 Active now</div>
      </div>
      <div className="relative w-full h-[200px] bg-gray-100 dark:bg-[#15161d] rounded-lg overflow-hidden transition-colors">
        {/* Map background with glowing dots */}
        <div className="absolute inset-0">
          {/* Glowing dots */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#ff4b6e]/20 rounded-full">
            <div className="absolute inset-0 animate-ping bg-[#ff4b6e] rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#ff4b6e]/20 rounded-full">
            <div className="absolute inset-0 animate-ping bg-[#ff4b6e] rounded-full"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#ff4b6e]/20 rounded-full">
            <div className="absolute inset-0 animate-ping bg-[#ff4b6e] rounded-full"></div>
          </div>
        </div>
        {/* User avatar */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <span className="text-gray-900 dark:text-white text-sm transition-colors">Meda Hyatt</span>
        </div>
      </div>
    </div>
  );
}
