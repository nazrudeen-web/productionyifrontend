"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Users, Upload, TrendingUp, Clock } from "lucide-react";

export default function CalculatorResults({ results }) {
  if (!results) return null;

  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-4 md:pb-6">
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
          Your YouTube Success Roadmap
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6 pt-0">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <Eye className="h-4 w-4 text-blue-600" />
              <span className="text-xs md:text-sm font-medium text-blue-900">
                Monthly Views
              </span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-blue-900">
              {results.monthlyViews.toLocaleString()}
            </div>
            <div className="text-xs text-blue-600">
              {results.dailyViews.toLocaleString()} daily
            </div>
          </div>

          <div className="bg-green-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <Users className="h-4 w-4 text-green-600" />
              <span className="text-xs md:text-sm font-medium text-green-900">
                Subscribers
              </span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-green-900">
              {results.subscribers.toLocaleString()}
            </div>
            <div className="text-xs text-green-600">Target audience size</div>
          </div>

          <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <Upload className="h-4 w-4 text-purple-600" />
              <span className="text-xs md:text-sm font-medium text-purple-900">
                Upload Frequency
              </span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-purple-900">
              {results.uploadsPerWeek}x
            </div>
            <div className="text-xs text-purple-600">Videos per week</div>
          </div>

          <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <Clock className="h-4 w-4 text-orange-600" />
              <span className="text-xs md:text-sm font-medium text-orange-900">
                Time to Goal
              </span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-orange-900">
              {results.timeToGoal} months
            </div>
            <div className="text-xs text-orange-600">Estimated</div>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="space-y-2 md:space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm md:text-base">
            Revenue Breakdown
          </h4>
          <div className="space-y-2">
            {Object.entries(results.revenueBreakdown).map(([key, data]) => (
              <div
                key={key}
                className="flex justify-between items-center p-2 bg-slate-50 rounded-md"
              >
                <span className="text-xs md:text-sm text-slate-700 capitalize">
                  {key}
                </span>
                <div className="text-right">
                  <div className="text-xs md:text-sm font-medium text-slate-900">
                    ${data.revenue.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {data.sharePercent} • {data.viewsNeeded.toLocaleString()}{" "}
                    views
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
          <h4 className="font-semibold text-slate-900 mb-2 text-sm md:text-base">
            Key Insights
          </h4>
          <ul className="text-xs md:text-sm text-slate-600 space-y-1">
            <li>• Focus on high-CPM content in your niche</li>
            <li>• Maintain {results.engagementRate}%+ engagement rate</li>
            <li>• Diversify revenue streams early</li>
            <li>• Stay consistent with uploads</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
