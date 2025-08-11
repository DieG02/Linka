import React from "react";
import { IconType } from "react-icons";

interface StatsCardProps {
  title: string;
  value: string;
  icon: IconType;
  change?: string;
  changeType?: "positive" | "negative";
  description: string;
  trend: number[];
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  changeType,
  description,
  trend,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        {change && (
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              changeType === "positive"
                ? "text-green-700 bg-green-100"
                : "text-red-700 bg-red-100"
            }`}
          >
            {change}
          </span>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-4xl font-bold text-gray-900 mb-2 font-sora group-hover:text-indigo-600 transition-colors">
          {value}
        </h3>
        <p className="text-gray-600 font-medium mb-3 text-lg">{title}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>

      {/* Enhanced trend chart */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Last 7 days</span>
          <span className="font-medium">
            Trending {changeType === "positive" ? "↗" : "↘"}
          </span>
        </div>
        <div className="flex items-end space-x-1 h-12 bg-gray-50 rounded-lg p-2">
          {trend.map((height, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-indigo-200 to-indigo-400 rounded-sm flex-1 transition-all duration-300 hover:from-indigo-300 hover:to-indigo-500"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
