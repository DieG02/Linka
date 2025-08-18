import Header from "./components/Header";
import RecentLinks from "./components/RecentLinks";
import Footer from "./components/Footer";
import HeroSection from "./views/HeroSection";
import StatsSection from "./views/StatsSection";
import Features from "./views/Features";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

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
