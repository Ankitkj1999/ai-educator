import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4"></div>
      <p className="text-lg font-semibold">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
