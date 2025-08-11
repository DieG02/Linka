import React from 'react';
import { 
  FiShield, 
  FiSmartphone, 
  FiZap, 
  FiGlobe, 
  FiUsers, 
  FiCode, 
  FiSettings,
  FiTrendingUp,
  FiLock,
  FiClock,
  FiTarget
} from 'react-icons/fi';
import { BarChart3 } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get detailed insights with real-time click tracking, geographic data, device information, and referrer analysis.',
      features: ['Real-time tracking', 'Geographic insights', 'Device analytics', 'Referrer data']
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption with SSL certificates, fraud protection, and compliance with international security standards.',
      features: ['SSL encryption', 'Fraud protection', 'GDPR compliant', 'SOC 2 certified']
    },
    {
      icon: FiGlobe,
      title: 'Custom Domains',
      description: 'Use your own branded domain for professional short links that build trust and enhance your brand recognition.',
      features: ['Custom branding', 'SSL certificates', 'DNS management', 'Subdomain support']
    }
  ];

  const additionalFeatures = [
    { icon: FiZap, title: 'Lightning Speed', desc: 'Global CDN with <100ms redirects' },
    { icon: FiSmartphone, title: 'Mobile Optimized', desc: 'Perfect experience on all devices' },
    { icon: FiUsers, title: 'Team Collaboration', desc: 'Share and manage links together' },
    { icon: FiCode, title: 'Developer API', desc: 'RESTful API with full documentation' },
    { icon: FiSettings, title: 'Advanced Controls', desc: 'Password protection & expiration' },
    { icon: FiTrendingUp, title: 'Growth Insights', desc: 'AI-powered performance analytics' },
    { icon: FiLock, title: 'Privacy First', desc: 'GDPR compliant data handling' },
    { icon: FiClock, title: 'Link Scheduling', desc: 'Schedule links for future activation' },
    { icon: FiTarget, title: 'A/B Testing', desc: 'Test different destinations' }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-indigo-700">✨ Powerful Features</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 font-sora">
            Everything You Need to
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent block">
              Succeed Online
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From basic link shortening to advanced analytics and team collaboration, 
            we've got all the tools you need to optimize your online presence.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sora">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 font-sora">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;