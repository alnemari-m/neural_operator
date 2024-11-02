import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-white mb-4">
          Neural Operator Workshop
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore the fundamentals of neural operators and their applications in scientific computing
        </p>

        <button 
          onClick={() => console.log('Navigate to start')}
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg 
                     shadow-lg transform transition hover:scale-105 text-lg"
        >
          Get Started
        </button>
      </div>

      <div className="absolute bottom-8 text-gray-400 text-sm">
        © 2024 Mohammed Alnemari - Neural Operator Workshop. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;
