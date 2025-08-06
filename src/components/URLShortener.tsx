import React, { useState } from 'react';
import { Link2, Copy, Check, QrCode } from 'lucide-react';

const URLShortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShorten = async () => {
    if (!url) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setShortenedUrl('https://shorty.ly/abc123');
      setIsLoading(false);
    }, 1000);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-sora text-gray-900 mb-4">
          Shorten Your Links
        </h2>
        <p className="text-gray-600 text-lg">
          Transform long URLs into short, memorable links in seconds
        </p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Link2 className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            placeholder="Paste your long URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors text-lg font-sora"
          />
        </div>

        <button
          onClick={handleShorten}
          disabled={!url || isLoading}
          className="w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              <span>Shortening...</span>
            </div>
          ) : (
            'Shorten URL'
          )}
        </button>

        {shortenedUrl && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 font-sora">Your shortened URL:</h3>
              <button className="bg-white p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <QrCode className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-100">
              <a 
                href={shortenedUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-primary-600 font-medium hover:text-primary-700 transition-colors truncate"
              >
                {shortenedUrl}
              </a>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default URLShortener;