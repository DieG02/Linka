import { motion } from "framer-motion";
import { FiLink, FiMousePointer, FiUsers, FiTrendingUp } from "react-icons/fi";
import StatsCard from "../components/StatsCard";

const stats = [
  {
    title: "Total Links",
    value: "1,247",
    icon: FiLink,
    change: "+12%",
    changeType: "positive",
    description: "Short links created this month with 98% uptime guarantee",
    trend: [60, 75, 85, 70, 90, 95, 100],
  },
  {
    title: "Total Clicks",
    value: "45.2K",
    icon: FiMousePointer,
    change: "+8%",
    changeType: "positive",
    description: "Clicks tracked across all links with detailed analytics",
    trend: [45, 60, 70, 85, 75, 90, 100],
  },
  {
    title: "Active Users",
    value: "892",
    icon: FiUsers,
    change: "+15%",
    changeType: "positive",
    description: "Monthly active users creating and managing links",
    trend: [30, 45, 55, 70, 80, 85, 100],
  },
  {
    title: "CTR",
    value: "23.4%",
    icon: FiTrendingUp,
    change: "+5%",
    changeType: "positive",
    description: "Average click-through rate across all shortened links",
    trend: [70, 65, 80, 75, 85, 90, 100],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StatsSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={cardVariants}>
              <StatsCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
