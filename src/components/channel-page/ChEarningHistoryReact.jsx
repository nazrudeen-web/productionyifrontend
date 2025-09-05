import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, TrendingDown } from "lucide-react";

export default function ChannelEarningsHistory({ data }) {
  // Generate mock earnings data for the last 14 days
  const generateEarningsData = () => {
    const today = new Date();
    const earnings = [];

    for (let i = 13; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      // Simulate daily earnings with some variation
      const baseEarnings = data.avgDailyViews * (data.finalCPM / 1000);
      const variation = 0.8 + Math.random() * 0.4; // ±20% variation
      const dailyEarnings = Math.round(baseEarnings * variation);

      earnings.push({
        date: date.toISOString().slice(0, 10),
        earnings: dailyEarnings,
        formatted: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
      });
    }

    return earnings;
  };

  const earningsData = generateEarningsData();
  const totalEarnings = earningsData.reduce(
    (sum, day) => sum + day.earnings,
    0
  );
  const avgDailyEarnings = totalEarnings / earningsData.length;
  const maxEarnings = Math.max(...earningsData.map((d) => d.earnings));
  const minEarnings = Math.min(...earningsData.map((d) => d.earnings));

  // Calculate growth (mock comparison with previous period)
  const growthRate = 12.5; // Mock growth rate
  const isPositiveGrowth = growthRate > 0;

  const formatNumber = (n) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1,
    }).format(n);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Earnings History (Last 14 Days)
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge
            variant={isPositiveGrowth ? "default" : "destructive"}
            className="flex items-center gap-1"
          >
            {isPositiveGrowth ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {Math.abs(growthRate)}% vs previous period
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6 grid grid-cols-3 gap-4 rounded-lg bg-slate-50 p-4">
          <div className="text-center">
            <p className="text-lg font-bold text-slate-900">
              ${formatNumber(totalEarnings)}
            </p>
            <p className="text-sm text-slate-600">Total (14 days)</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-slate-900">
              ${formatNumber(avgDailyEarnings)}
            </p>
            <p className="text-sm text-slate-600">Daily Average</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-slate-900">
              ${formatNumber(maxEarnings)}
            </p>
            <p className="text-sm text-slate-600">Highest Day</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-slate-800">Daily Breakdown</h4>
          <div className="max-h-64 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-white">
                <tr className="border-b">
                  <th className="py-2 text-left font-medium text-slate-600">
                    Date
                  </th>
                  <th className="py-2 text-right font-medium text-slate-600">
                    Earnings
                  </th>
                  <th className="py-2 text-right font-medium text-slate-600">
                    Bar
                  </th>
                </tr>
              </thead>
              <tbody>
                {earningsData.map((day, index) => {
                  const percentage = (day.earnings / maxEarnings) * 100;
                  return (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="py-2 text-slate-700">{day.formatted}</td>
                      <td className="py-2 text-right font-medium text-slate-900">
                        ${formatNumber(day.earnings)}
                      </td>
                      <td className="py-2 text-right">
                        <div className="flex justify-end">
                          <div className="w-20 bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
