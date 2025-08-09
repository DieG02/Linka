import React from 'react';
import { FiLink, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaDiscord, 
  FaYoutube, 
  FaInstagram 
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaDiscord, href: '#', label: 'Discord', color: 'hover:text-indigo-400' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' }
  ];

  const footerLinks = {
    Product: [
      'Features',
      'Analytics',
      'API Documentation',
      'Integrations',
      'Mobile App',
      'Browser Extension'
    ],
    Company: [
      'About Us',
      'Careers',
      'Press Kit',
      'Contact',
      'Blog',
      'Newsletter'
    ],
    Resources: [
      'Help Center',
      'Community',
      'Tutorials',
      'Status Page',
      'Changelog',
      'Roadmap'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR',
      'Security',
      'Compliance'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-2xl">
                <FiLink className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold font-sora">LinkCraft</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              The most powerful URL shortener with advanced analytics, 
              custom domains, and team collaboration features.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-400">
                <FiMail className="h-5 w-5" />
                <span>hello@linkcraft.co</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FiPhone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FiMapPin className="h-5 w-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-lg mb-6 font-sora">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-base hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="bg-gray-800 rounded-3xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 font-sora">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest features, tips, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social media and bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400">
                © 2024 LinkCraft. All rights reserved.
              </p>
            </div>
            
            {/* Social media links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 font-medium">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`text-gray-400 ${social.color} transition-colors transform hover:scale-110 duration-200`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;