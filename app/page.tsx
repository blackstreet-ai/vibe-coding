import Sidebar from '../components/Sidebar';
import TotalAssets from '../components/TotalAssets';
import AssetClass from '../components/AssetClass';
import CryptoCard from '../components/CryptoCard';
import RecentDocuments from '../components/RecentDocuments';
import ActiveUsers from '../components/ActiveUsers';
import Calendar from '../components/Calendar';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#15161d] text-gray-900 dark:text-white transition-colors">
      <Sidebar />
      <div className={`ml-12 lg:ml-48 p-4 sm:p-6 transition-all duration-300`}>
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
          <div className="relative">
            <input
              type="search"
              placeholder="search"
              className="bg-gray-100 dark:bg-[#1c1d25] rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-400 focus:outline-none w-full sm:w-64 transition-colors"
            />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">John Smith</span>
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Total Assets Chart */}
          <div className="col-span-1 sm:col-span-6 lg:col-span-8">
            <div className="h-full">
              <TotalAssets />
            </div>
          </div>

          {/* Asset Class */}
          <div className="col-span-1 sm:col-span-6 lg:col-span-4">
            <div className="h-full">
              <AssetClass />
            </div>
          </div>

          {/* Crypto Cards */}
          <div className="col-span-1 sm:col-span-6 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <CryptoCard symbol="DASH" price="0.083 EUR" change={-1.93} miniChart="down" />
            <CryptoCard symbol="ETH" price="1,091 EUR" change={-1.14} miniChart="down" />
            <CryptoCard symbol="LTC" price="197.48 EUR" change={-0.44} miniChart="down" />
            <CryptoCard symbol="BTC" price="11,145.1 EUR" change={1.75} miniChart="up" />
          </div>

          {/* Bottom Row */}
          <div className="col-span-1 sm:col-span-6 lg:col-span-4 transition-colors">
            <RecentDocuments />
          </div>
          <div className="col-span-1 sm:col-span-6 lg:col-span-4 transition-colors">
            <ActiveUsers />
          </div>
          <div className="col-span-1 sm:col-span-6 lg:col-span-4 transition-colors">
            <Calendar />
          </div>
        </main>
      </div>
    </div>
  );
}
