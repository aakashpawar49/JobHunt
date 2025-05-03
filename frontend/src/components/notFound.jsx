import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center max-w-md px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-600 mt-4">Oops! The page you’re looking for doesn’t exist.</p>
        <p className="text-sm text-gray-500 mt-2">It may have been moved or deleted, or you may have typed the wrong URL.</p>
        <div className="mt-6">
          <Link to="/">
            <button className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
