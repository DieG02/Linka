import React, { useState } from 'react';
import { Link, Zap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-2 rounded-xl shadow-lg">
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
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                <Zap className="h-4 w-4" />
                <span>Get Started</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-16 right-0 w-80 h-full bg-white/95 backdrop-blur-xl border-l border-gray-200 z-50 md:hidden animate-slide-in-right shadow-2xl">
            <div className="p-6 space-y-6">
              <nav className="space-y-4">
                <a href="#" className="block text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors py-2">
                  Features
                </a>
                <a href="#" className="block text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors py-2">
                  Analytics
                </a>
                <a href="#" className="block text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors py-2">
                  Pricing
                </a>
              </nav>
              
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <button className="block w-full text-left text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors py-2">
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
                  <Zap className="h-4 w-4" />
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;