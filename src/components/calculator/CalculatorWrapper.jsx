// src/components/calculator/CalculatorWrapper.jsx
"use client";
import { useState } from "react";

import IncomeCalculatorForm from "./IncomeCalculatorForm";
import CalculatorResults from "./CalculatorResults";

export default function CalculatorWrapper() {
  // ✅ Default values
  const [monthlyGoal, setMonthlyGoal] = useState(5000);
  const [niche, setNiche] = useState("finance"); // default Finance
  const [location, setLocation] = useState("us"); // default United States
  const [monetization, setMonetization] = useState(["adsense", "sponsorships"]); // top 3 default

  // add default result state
  const [results, setResults] = useState({
    monthlyViews: 110988,
    subscribers: 3700,
    uploadsPerWeek: 4,
    timeToGoal: 10,
    dailyViews: 5602,
    engagementRate: 4.2,
    estimatedCPM: 8.5,
    revenueBreakdown: {
      adsense: { revenue: 943, sharePercent: "18.9%", viewsNeeded: 20941 },
      sponsorships: {
        revenue: 2358,
        sharePercent: "47.2%",
        viewsNeeded: 37694,
      },
    },
  });

  const niches = [
    { value: "gaming", label: "Gaming", cpm: 2.5 },
    { value: "tech", label: "Technology", cpm: 4.2 },
    { value: "finance", label: "Finance", cpm: 8.5 },
    { value: "lifestyle", label: "Lifestyle", cpm: 3.1 },
    { value: "education", label: "Education", cpm: 3.8 },
    { value: "entertainment", label: "Entertainment", cpm: 2.8 },
    { value: "fitness", label: "Fitness & Health", cpm: 4.5 },
    { value: "cooking", label: "Cooking", cpm: 3.2 },
    { value: "music", label: "Music", cpm: 1.8 },
    { value: "comedy", label: "Comedy", cpm: 2.2 },
  ];

  const locations = [
    { value: "us", label: "United States", multiplier: 1.0 },
    { value: "ca", label: "Canada", multiplier: 0.85 },
    { value: "uk", label: "United Kingdom", multiplier: 0.9 },
    { value: "au", label: "Australia", multiplier: 0.8 },
    { value: "de", label: "Germany", multiplier: 0.75 },
    { value: "global", label: "Global Audience", multiplier: 0.6 },
  ];

  const monetizationSources = [
    { id: "adsense", label: "YouTube AdSense", multiplier: 1.0 },
    { id: "sponsorships", label: "Brand Sponsorships", multiplier: 2.5 },
    { id: "merchandise", label: "Merchandise Sales", multiplier: 1.8 },
    { id: "memberships", label: "Channel Memberships", multiplier: 1.5 },
    { id: "affiliate", label: "Affiliate Marketing", multiplier: 2.0 },
    { id: "courses", label: "Online Courses", multiplier: 3.0 },
  ];

  const handleCalculate = () => {
    const selectedNiche = niches.find((n) => n.value === niche);
    const selectedLocation = locations.find((l) => l.value === location);

    if (
      !selectedNiche ||
      !selectedLocation ||
      !monetization ||
      monetization.length === 0
    ) {
      alert("Please fill all fields");
      return;
    }

    const baseCPM = selectedNiche.cpm * selectedLocation.multiplier;

    // Sum of selected monetization multipliers
    const totalMultiplier = monetization.reduce((acc, id) => {
      const m = monetizationSources.find((src) => src.id === id);
      return acc + (m ? m.multiplier : 0);
    }, 0);

    if (totalMultiplier <= 0 || baseCPM <= 0) {
      alert("Invalid input or monetization selection");
      return;
    }

    // Effective CPM across all revenue sources (dollars per 1000 views)
    const effectiveCPM = baseCPM * totalMultiplier;

    // Views needed per month to reach goal
    const requiredViews = Math.ceil((monthlyGoal / effectiveCPM) * 1000);

    // Revenue breakdown: split monthlyGoal by multiplier share
    const breakdown = {};
    monetization.forEach((id) => {
      const m = monetizationSources.find((src) => src.id === id);
      const share = m ? m.multiplier / totalMultiplier : 0;
      const revenue = Math.round(monthlyGoal * share);
      const viewsForSource = Math.round(requiredViews * share);
      breakdown[id] = {
        revenue,
        sharePercent: `${(share * 100).toFixed(1)}%`,
        viewsNeeded: viewsForSource,
      };
    });

    const results = {
      monthlyViews: requiredViews,
      subscribers: Math.round(requiredViews / 30),
      uploadsPerWeek: 4,
      timeToGoal: Math.ceil(monthlyGoal / 500),
      dailyViews: Math.round(requiredViews / 30),
      engagementRate: 4.2,
      estimatedCPM: Number(effectiveCPM.toFixed(2)),
      revenueBreakdown: breakdown,
    };

    setResults(results);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {/* Form always shown */}
      <div className="space-y-4 md:space-y-6 w-full max-w-xl">
        <IncomeCalculatorForm
          onCalculate={handleCalculate}
          monthlyGoal={monthlyGoal}
          setMonthlyGoal={setMonthlyGoal}
          niche={niche}
          setNiche={setNiche}
          location={location}
          setLocation={setLocation}
          monetization={monetization}
          setMonetization={setMonetization}
          niches={niches}
          locations={locations}
          monetizationSources={monetizationSources}
        />
      </div>

      {/* Results only appear after calculation */}
      {results && (
        <div className="space-y-4 md:space-y-6">
          <CalculatorResults results={results} />
        </div>
      )}
    </div>
  );
}
