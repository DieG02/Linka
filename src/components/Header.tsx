import React from 'react';
import { Link, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-2 rounded-xl">
              <Link className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-sora bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              ShortyLink
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Analytics
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Pricing
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;