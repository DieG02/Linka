import {
  BarChart3,
  Eye,
  Copy,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";

interface Link {
  id: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: string;
}

const RecentLinks = () => {
  const links: Link[] = [
    {
      id: "1",
      originalUrl:
        "https://www.example.com/very-long-url-that-needs-shortening",
      shortUrl: "shorty.ly/abc123",
      clicks: 247,
      createdAt: "2 hours ago",
    },
    {
      id: "2",
      originalUrl: "https://www.another-example.com/another-long-url",
      shortUrl: "shorty.ly/def456",
      clicks: 89,
      createdAt: "5 hours ago",
    },
    {
      id: "3",
      originalUrl: "https://www.third-example.com/yet-another-url",
      shortUrl: "shorty.ly/ghi789",
      clicks: 156,
      createdAt: "1 day ago",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 font-sora">
          Recent Links
        </h3>
        <button className="text-primary-600 hover:text-primary-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <div
            key={link.id}
            className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600 truncate mb-1">
                  {link.originalUrl}
                </p>
                <a
                  href={`https://${link.shortUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  {link.shortUrl}
                </a>
              </div>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{link.clicks} clicks</span>
                </div>
                <span>{link.createdAt}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <BarChart3 className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Copy className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentLinks;
