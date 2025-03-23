import React from 'react';

interface CryptoCardProps {
  symbol: string;
  price: string;
  change: number;
  miniChart?: 'up' | 'down';
}

export default function CryptoCard({ symbol, price, change, miniChart = 'up' }: CryptoCardProps) {
  const isPositive = change > 0;
  const changeColor = isPositive ? 'text-green-500' : 'text-[#ff4b6e]';
  const changeText = `${isPositive ? '+' : ''}${change}%`;

  return (
    <div className="bg-white dark:bg-[#1c1d25] rounded-lg p-4 shadow-sm dark:shadow-none transition-colors">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-1 transition-colors">{symbol}/EUR</div>
          <div className="text-gray-900 dark:text-white text-lg font-medium transition-colors">{price}</div>
        </div>
        <div className={`${changeColor} text-sm`}>
          {changeText}
          <div className="h-[20px] mt-1">
            {miniChart === 'up' ? (
              <svg className="w-full h-full" viewBox="0 0 50 20">
                <path
                  d="M0,10 C10,8 20,12 30,6 C40,0 45,10 50,8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            ) : (
              <svg className="w-full h-full" viewBox="0 0 50 20">
                <path
                  d="M0,8 C10,10 20,6 30,12 C40,18 45,8 50,10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
