import React, { useState } from "react";
import { FiLink, FiCopy, FiCheck, FiExternalLink, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { shorten } from "../services/api";
import { QRCodeSVG } from "qrcode.react";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const validateUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
    if (value) {
      setIsValidUrl(validateUrl(value));
    } else {
      setIsValidUrl(true);
    }
  };

  const handleShorten = async () => {
    if (!url || !isValidUrl) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newUrl = "https://linka.co/abc123";
      setShortenedUrl(newUrl);
      setIsLoading(false);
      setUrl("");
      setShowModal(true);
    }, 1000);
  };

  const handleSubmit = async (e: any) => {
    if (!url || !isValidUrl) return;
    setIsLoading(true);
    e.preventDefault();
    try {
      const { shortUrl } = await shorten(url);
      setShortenedUrl(shortUrl);
      setIsLoading(false);
      setUrl("");
      setShowModal(true);
    } catch (err) {
      alert(err);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="w-full relative max-w-4xl mx-auto space-y-6 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-6 sm:p-8 md:p-12">
        <div className="flex gap-4 sm:gap-6 flex-col md:flex-row">
          <div className="relative flex-grow">
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
              <FiLink
                className={`h-6 w-6 transition-colors ${
                  !isValidUrl ? "text-red-400" : "text-gray-400"
                }`}
              />
            </div>
            <input
              type="url"
              placeholder="https://example.com/your-long-url"
              value={url}
              onChange={handleUrlChange}
              className={`w-full pl-16 pr-6 py-3 text-lg border-2 rounded-2xl focus:outline-none transition-all duration-200 bg-gray-50/50  placeholder-gray-400 ${
                !isValidUrl
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-200 focus:border-indigo-500"
              }`}
            />
            {!isValidUrl && url && (
              <p className="text-red-500 text-sm mt-2 ml-2">
                Please enter a valid URL
              </p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleSubmit}
            disabled={!url || !isValidUrl || isLoading}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg flex items-center justify-center"
          >
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center space-x-3"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="rounded-full h-6 w-6 border-2 border-white border-t-transparent"
                ></motion.div>
                <span>Creating short link...</span>
              </motion.div>
            ) : (
              <motion.span
                key="generate-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Generate
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed top-0 left-0 inset-0 z-50 flex items-center p-4 justify-center bg-black/50 backdrop-blur-sm h-screen w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
              >
                <FiX className="w-6 h-6" />
              </button>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 md:mb-6">
                Your Shortened URL
              </h3>

              <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 border mb-6">
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-indigo-600 font-medium hover:text-indigo-700 truncate flex items-center space-x-2"
                >
                  <span>{shortenedUrl}</span>
                  <FiExternalLink className="h-4 w-4" />
                </a>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  {copied ? (
                    <>
                      <FiCheck className="h-5 w-5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="h-5 w-5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center justify-center">
                <QRCodeSVG value={shortenedUrl} size={180} />
                <p className="mt-4 text-sm text-gray-600">Scan this QR code</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default URLShortener;
