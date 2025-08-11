import { useState } from "react";
import { FiLink, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-xl shadow-lg">
                <FiLink className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                LinkCraft
              </span>
            </div>

            <nav className="hidden md:flex space-x-12 font-semibold text-md">
              <a
                href="#"
                className="relative text-gray-700 hover:text-indigo-600 transition-colors group py-2"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
              <a
                href="#"
                className="relative text-gray-700 hover:text-indigo-600 transition-colors group py-2"
              >
                Analytics
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
              <a
                href="#"
                className="relative text-gray-700 hover:text-indigo-600 transition-colors group py-2"
              >
                API
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
              <a
                href="#"
                className="relative text-gray-700 hover:text-indigo-600 transition-colors group py-2"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6 text-gray-600" />
              ) : (
                <FiMenu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer menu */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className="fixed top-16 right-0 w-80 h-full bg-white/95 backdrop-blur-xl border-l border-gray-200 z-50 md:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8 space-y-8">
                <nav className="space-y-6">
                  <a
                    href="#"
                    className="block text-xl font-medium text-gray-700 hover:text-indigo-600 transition-colors py-3 border-b border-gray-100"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="block text-xl font-medium text-gray-700 hover:text-indigo-600 transition-colors py-3 border-b border-gray-100"
                  >
                    Analytics
                  </a>
                  <a
                    href="#"
                    className="block text-xl font-medium text-gray-700 hover:text-indigo-600 transition-colors py-3 border-b border-gray-100"
                  >
                    API
                  </a>
                  <a
                    href="#"
                    className="block text-xl font-medium text-gray-700 hover:text-indigo-600 transition-colors py-3 border-b border-gray-100"
                  >
                    Pricing
                  </a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
