import React from 'react';
import { File } from 'lucide-react';

export default function RecentDocuments() {
  const documents = [
    { name: 'Booking Revenue', date: 'March 28, 2017' },
    { name: 'Opportunity Status', date: 'March 21, 2017' },
    { name: 'Average Sales Revenue', date: 'February 18, 2017' },
    { name: 'Average Sales Revenue', date: 'February 18, 2017' },
  ];

  return (
    <div className="bg-white dark:bg-[#1c1d25] rounded-lg p-6 shadow-sm dark:shadow-none transition-colors">
      <h2 className="text-gray-900 dark:text-white text-lg font-medium mb-4 transition-colors">Recent Documents</h2>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#ff4b6e]/10 flex items-center justify-center">
              <File size={16} className="text-[#ff4b6e]" />
            </div>
            <div>
              <div className="text-gray-900 dark:text-white text-sm transition-colors">{doc.name}</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs transition-colors">{doc.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
