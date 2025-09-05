import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calendar, Banknote } from "lucide-react";

export default function ChannelEarnings({ data }) {
  const formatUSD = (amount) => {
    if (amount < 1000) {
      return "$" + amount.toString();
    } else if (amount < 1000000) {
      return (
        "$" +
        new Intl.NumberFormat("en", {
          maximumFractionDigits: 0,
        }).format(amount)
      );
    } else if (amount < 1000000000) {
      const millionAmount = amount / 1000000;
      const rounded = Math.round(millionAmount * 10) / 10;
      return (
        "$" +
        (Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(1)) +
        " million"
      );
    } else {
      const billionAmount = amount / 1000000000;
      const rounded = Math.round(billionAmount * 10) / 10;
      return (
        "$" +
        (Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(1)) +
        " billion"
      );
    }
  };

  const earnings = [
    {
      period: "Daily",
      amount: formatUSD(data.dailyIncome),
      icon: Calendar,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      period: "Monthly",
      amount: formatUSD(data.monthlyIncome),
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      period: "Yearly",
      amount: formatUSD(data.yearlyIncome),
      icon: Banknote,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Estimated YouTube Earnings
        </CardTitle>
        <p className="text-sm text-slate-600">
          Based on average CPM rates and view counts. Actual earnings may vary
          significantly.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {earnings.map((earning, index) => (
            <div
              key={index}
              className={`rounded-xl border-2 p-6 ${earning.bgColor} ${earning.borderColor}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    {earning.period} Earnings
                  </p>
                  <p className={`text-2xl font-bold ${earning.color}`}>
                    {earning.amount}
                  </p>
                </div>
                <earning.icon className={`h-8 w-8 ${earning.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-slate-50 p-4">
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> These estimates are based on YouTube ad
            revenue only and don't include sponsorships, merchandise, or other
            income sources. Actual earnings depend on CPM rates, audience
            location, and monetization strategies.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
