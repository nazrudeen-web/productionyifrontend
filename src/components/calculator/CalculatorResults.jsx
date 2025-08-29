"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Users, Upload, TrendingUp, Clock } from "lucide-react";

export default function CalculatorResults({ results }) {
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
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
              <Eye className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
              <span className="text-xs md:text-sm font-medium text-blue-900">
                Monthly Views
              </span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-blue-900">
              {(results.monthlyViews / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-blue-600">
              {results.dailyViews.toLocaleString()} daily
            </div>
          </div>

          <div className="bg-green-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
              <Users className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
              <span className="text-xs md:text-sm font-medium text-green-900">
                Subscribers
              </span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-green-900">
              {(results.subscribers / 1000).toFixed(0)}K
            </div>
            <div className="text-xs text-green-600">Target audience size</div>
          </div>

          <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
              <Upload className="h-3 w-3 md:h-4 md:w-4 text-purple-600" />
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
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
              <Clock className="h-3 w-3 md:h-4 md:w-4 text-orange-600" />
              <span className="text-xs md:text-sm font-medium text-orange-900">
                Time to Goal
              </span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-orange-900">
              {results.timeToGoal}
            </div>
            <div className="text-xs text-orange-600">Months estimated</div>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="space-y-2 md:space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm md:text-base">
            Revenue Breakdown
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm text-slate-600">
                YouTube AdSense
              </span>
              <div className="flex items-center gap-2">
                {/* <Progress value={64} className="w-16 md:w-20 h-2" /> */}
                <span className="text-xs md:text-sm font-medium">
                  ${results.revenueBreakdown.adsense}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm text-slate-600">
                Brand Sponsorships
              </span>
              <div className="flex items-center gap-2">
                {/* <Progress value={30} className="w-16 md:w-20 h-2" /> */}
                <span className="text-xs md:text-sm font-medium">
                  ${results.revenueBreakdown.sponsorships}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm text-slate-600">
                Merchandise
              </span>
              <div className="flex items-center gap-2">
                {/* <Progress value={6} className="w-16 md:w-20 h-2" /> */}
                <span className="text-xs md:text-sm font-medium">
                  ${results.revenueBreakdown.merchandise}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Milestones */}
        <div className="space-y-2 md:space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm md:text-base">
            Growth Milestones
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 md:p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 text-xs"
                >
                  Month 6
                </Badge>
                <span className="text-xs md:text-sm">10K Subscribers</span>
              </div>
              <span className="text-xs md:text-sm text-green-600 font-medium">
                $800/month
              </span>
            </div>
            <div className="flex items-center justify-between p-2 md:p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 text-xs"
                >
                  Month 12
                </Badge>
                <span className="text-xs md:text-sm">50K Subscribers</span>
              </div>
              <span className="text-xs md:text-sm text-blue-600 font-medium">
                $2,500/month
              </span>
            </div>
            <div className="flex items-center justify-between p-2 md:p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 text-xs"
                >
                  Month 18
                </Badge>
                <span className="text-xs md:text-sm">85K Subscribers</span>
              </div>
              <span className="text-xs md:text-sm text-purple-600 font-medium">
                $5,000/month
              </span>
            </div>
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
            <li>• Consider diversifying revenue streams early</li>
            <li>• Consistency is key - stick to your upload schedule</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
