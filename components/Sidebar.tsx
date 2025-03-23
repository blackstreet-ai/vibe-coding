import Link from 'next/link';
import { Home, LayoutGrid, ImageIcon, Clock, Users } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-gray-100 dark:bg-[#1c1d25] flex flex-col items-center py-4 transition-colors">
      <div className="mb-8">
        <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">¥</span>
      </div>
      <nav className="flex flex-col gap-6">
        <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Home">
          <Home size={20} />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Dashboard">
          <LayoutGrid size={20} />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Media">
          <ImageIcon size={20} />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="History">
          <Clock size={20} />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Users">
          <Users size={20} />
        </Link>
      </nav>
    </aside>
  );
}
