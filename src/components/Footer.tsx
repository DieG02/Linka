import { FiLink, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaTwitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: FaLinkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaGithub,
      href: "#",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: FaDiscord,
      href: "#",
      label: "Discord",
      color: "hover:text-indigo-400",
    },
    {
      icon: FaYoutube,
      href: "#",
      label: "YouTube",
      color: "hover:text-red-500",
    },
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
  ];

  const footerLinks = {
    Product: [
      "Features",
      "Analytics",
      "API Documentation",
      "Integrations",
      "Mobile App",
    ],
    Company: ["About Us", "Careers", "Contact", "Newsletter"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl">
                <FiLink className="h-5 w-5 text-white" />
              </div>
              <span className="text-3xl font-bold">Linka</span>
            </div>

            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-md">
              The most powerful URL shortener with advanced analytics, custom
              domains, and team collaboration features.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-3">
                <FiMail className="h-4 w-4" />
                <span>hello@linka.co</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-lg mb-4">
                {category}
              </h4>
              <ul className="space-y-3 text-sm">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors hover:underline"
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
        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-5 text-sm sm:text-base">
              Get the latest features, tips, and insights delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-xl font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Social media */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2024 Linka. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`text-gray-400 ${social.color}`}
                whileHover={{ rotate: 10, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
