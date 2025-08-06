import React from 'react';
import { Shield, BarChart3, Smartphone, Zap, Globe, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Detailed insights into clicks, geography, and user behavior'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect experience across all devices and platforms'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant URL shortening with global CDN distribution'
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'Use your own domain for branded short links'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share and manage links with your entire team'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sora">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features to help you manage, track, and optimize your shortened links
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="bg-gradient-to-r from-primary-100 to-purple-100 p-4 rounded-xl w-fit mb-6">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sora">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;