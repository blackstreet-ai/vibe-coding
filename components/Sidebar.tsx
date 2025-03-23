'use client';

import Link from 'next/link';
import { Home, LayoutGrid, ImageIcon, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1024); // 1024px is Tailwind's 'lg' breakpoint
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside className={`fixed left-0 top-0 h-full ${isCollapsed ? 'w-12' : 'w-48'} bg-gray-100 dark:bg-[#1c1d25] flex flex-col py-4 transition-all duration-300`}>
      <div className="mb-8 w-full flex justify-center">
        <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">¥</span>
      </div>
      <nav className="flex flex-col gap-6 w-full px-2">
        <Link href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-2'} gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-md py-2 hover:bg-gray-200 dark:hover:bg-gray-800`} aria-label="Home">
          <Home size={20} />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Home</span>
        </Link>
        <Link href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-2'} gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-md py-2 hover:bg-gray-200 dark:hover:bg-gray-800`} aria-label="Dashboard">
          <LayoutGrid size={20} />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
        </Link>
        <Link href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-2'} gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-md py-2 hover:bg-gray-200 dark:hover:bg-gray-800`} aria-label="Media">
          <ImageIcon size={20} />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Media</span>
        </Link>
        <Link href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-2'} gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-md py-2 hover:bg-gray-200 dark:hover:bg-gray-800`} aria-label="History">
          <Clock size={20} />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>History</span>
        </Link>
        <Link href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-2'} gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-md py-2 hover:bg-gray-200 dark:hover:bg-gray-800`} aria-label="Users">
          <Users size={20} />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Users</span>
        </Link>
      </nav>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mt-auto mx-auto text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </aside>
  );
}
