import React from 'react';
import Header from './components/Header';
import URLShortener from './components/URLShortener';
import StatsCard from './components/StatsCard';
import RecentLinks from './components/RecentLinks';
import Features from './components/Features';
import { BarChart3, MousePointer, Link, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sora">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-sora leading-tight">
              Smart URL Shortening
              <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent block">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create short, memorable links with powerful analytics. Track performance, 
              customize your URLs, and grow your audience with intelligent insights.
            </p>
          </div>
          
          <URLShortener />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Links"
              value="1,247"
              icon={Link}
              change="+12%"
              changeType="positive"
            />
            <StatsCard
              title="Total Clicks"
              value="45.2K"
              icon={MousePointer}
              change="+8%"
              changeType="positive"
            />
            <StatsCard
              title="Active Users"
              value="892"
              icon={Users}
              change="+15%"
              changeType="positive"
            />
            <StatsCard
              title="CTR"
              value="23.4%"
              icon={BarChart3}
              change="+5%"
              changeType="positive"
            />
          </div>
        </div>
      </section>

      {/* Recent Links Section */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RecentLinks />
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-2 rounded-xl">
                <Link className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-sora">ShortyLink</span>
            </div>
            <p className="text-gray-400 mb-8">
              The smart way to shorten, track, and optimize your links.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 ShortyLink. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;