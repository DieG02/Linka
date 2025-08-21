import { motion } from "framer-motion";
import URLShortener from "../components/URLShortener";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-purple-50 overflow-hidden h-svh flex">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-300/30 to-purple-300/30 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-300/30 to-primary-300/30 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-200/20 to-purple-200/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="text-center mb-12 relative">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-300/15 backdrop-blur-sm rounded-full border border-primary-200/50 mb-8 shadow-md">
              <span className="text-sm font-semibold text-indigo-500">
                ✨ Now with AI-powered analytics
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            Shorten Links,
            <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-primary-600 bg-clip-text text-transparent block pb-2">
              Amplify Results
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
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
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <URLShortener />
        </motion.div>
      </div>
    </section>
  );
}
