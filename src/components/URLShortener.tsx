import React, { useState } from "react";
import { FiLink, FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";
import { BiQrScan } from "react-icons/bi";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(true);

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
      setShortenedUrl("https://linkcraft.co/abc123");
      setIsLoading(false);
    }, 1000);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sora">
            Shorten Your URL
          </h2>
          <p className="text-gray-600 text-lg">
            Transform long URLs into short, shareable links with our custom
            domain
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
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
              className={`w-full pl-16 pr-6 py-6 text-lg border-2 rounded-2xl focus:outline-none transition-all duration-200 bg-gray-50/50 font-sora placeholder-gray-400 ${
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

          <button
            onClick={handleShorten}
            disabled={!url || !isValidUrl || isLoading}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-6 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                <span>Creating short link...</span>
              </div>
            ) : (
              "Generate Short Link"
            )}
          </button>

          {shortenedUrl && (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200/50 rounded-2xl p-8 animate-slide-up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900 font-sora text-lg">
                  Your shortened URL:
                </h3>
                <button className="bg-white p-3 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                  <BiQrScan className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="flex items-center space-x-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-indigo-600 font-medium hover:text-indigo-700 transition-colors truncate text-lg flex items-center space-x-2"
                >
                  <span>{shortenedUrl}</span>
                  <FiExternalLink className="h-4 w-4" />
                </a>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 bg-indigo-500 text-white px-6 py-3 rounded-xl hover:bg-indigo-600 transition-colors shadow-sm"
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default URLShortener;
