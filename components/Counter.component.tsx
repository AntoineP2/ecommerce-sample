"use client"
import { useAppStore } from '@/lib/appStore';
import React from 'react';

const Counter: React.FC = () => {
  const { count, increase, decrease, theme, toggleTheme } = useAppStore();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        <div className="flex space-x-4">
          <button onClick={increase} className="px-4 py-2 bg-blue-500 text-white rounded">
            Increase
          </button>
          <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded">
            Decrease
          </button>
        </div>
        <div>
          <button className="btn btn.primary" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;