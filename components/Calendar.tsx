import React from 'react';

export default function Calendar() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white dark:bg-[#1c1d25] rounded-lg p-4 sm:p-6 shadow-sm dark:shadow-none transition-colors">
      <h2 className="text-gray-900 dark:text-white text-lg font-medium mb-4 transition-colors">February, 2018</h2>
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {days.map((day) => (
          <div key={day} className="text-center text-gray-500 dark:text-gray-400 text-sm transition-colors">
            {day[0]}
          </div>
        ))}
        {dates.map((date) => (
          <div
            key={date}
            className={`text-center py-1 text-sm transition-colors ${
              date === 7
                ? 'bg-[#ff4b6e] text-white rounded'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}
