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
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-purple-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-primary-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary-200/50 mb-8 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">✨ Now with AI-powered analytics</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 font-sora leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Transform Links Into
              <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-primary-600 bg-clip-text text-transparent block animate-gradient-x">
                Made Simple
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Create <span className="font-semibold text-primary-600">intelligent short links</span> with real-time analytics, 
              custom branding, and <span className="font-semibold text-purple-600">AI-powered insights</span> that grow your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <button className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-xl">
                <Zap className="h-5 w-5" />
                <span>Start Shortening Free</span>
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Setup in 30 seconds</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <URLShortener />
          </div>
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