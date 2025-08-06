import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  changeType?: 'positive' | 'negative';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, change, changeType }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-gradient-to-r from-primary-100 to-purple-100 p-3 rounded-xl">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        {change && (
          <span className={`text-sm font-medium ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1 font-sora">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
};

export default StatsCard;