import Header from "./components/Header";
import URLShortener from "./components/URLShortener";
import StatsCard from "./components/StatsCard";
import RecentLinks from "./components/RecentLinks";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { FiTrendingUp, FiMousePointer, FiLink, FiUsers } from "react-icons/fi";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sora">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-primary-200/30 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative z-10">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary-200/50 mb-8 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  ✨ Now with AI-powered analytics
                </span>
              </div>
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-sora leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Shorten Links,
              <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-primary-600 bg-clip-text text-transparent block animate-gradient-x">
                Amplify Results
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Transform long URLs into powerful short links with{" "}
              <span className="font-semibold text-primary-600">
                real-time analytics
              </span>
              , custom domains, and{" "}
              <span className="font-semibold text-purple-600">
                detailed insights
              </span>{" "}
              to track your success.
            </p>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
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
              icon={FiLink}
              change="+12%"
              changeType="positive"
              description="Short links created this month with 98% uptime guarantee"
              trend={[60, 75, 85, 70, 90, 95, 100]}
            />
            <StatsCard
              title="Total Clicks"
              value="45.2K"
              icon={FiMousePointer}
              change="+8%"
              changeType="positive"
              description="Clicks tracked across all links with detailed analytics"
              trend={[45, 60, 70, 85, 75, 90, 100]}
            />
            <StatsCard
              title="Active Users"
              value="892"
              icon={FiUsers}
              change="+15%"
              changeType="positive"
              description="Monthly active users creating and managing links"
              trend={[30, 45, 55, 70, 80, 85, 100]}
            />
            <StatsCard
              title="CTR"
              value="23.4%"
              icon={FiTrendingUp}
              change="+5%"
              changeType="positive"
              description="Average click-through rate across all shortened links"
              trend={[70, 65, 80, 75, 85, 90, 100]}
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

      <Footer />
    </div>
  );
}

export default App;
