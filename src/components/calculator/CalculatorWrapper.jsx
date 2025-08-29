// src/components/calculator/CalculatorWrapper.jsx
"use client";
import { useState } from "react";

import IncomeCalculatorForm from "./IncomeCalculatorForm";
import CalculatorResults from "./CalculatorResults";

export default function CalculatorWrapper() {
  const [monthlyGoal, setMonthlyGoal] = useState(5000);
  const [niche, setNiche] = useState("");
  const [location, setLocation] = useState("");
  const [monetization, setMonetization] = useState([]);
  const [results, setResults] = useState(null);

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

    if (!selectedNiche || !selectedLocation || monetization.length === 0) {
      alert("Please fill all fields");
      return;
    }

    // CPM adjusted for niche + location
    const baseCPM = selectedNiche.cpm * selectedLocation.multiplier;

    // Total monetization multiplier
    const totalMultiplier = monetization.reduce((acc, id) => {
      const m = monetizationSources.find((src) => src.id === id);
      return acc + (m ? m.multiplier : 0);
    }, 0);

    // Required monthly views
    const requiredViews = (monthlyGoal / (baseCPM * totalMultiplier)) * 1000;

    // Mock revenue breakdown (split goal equally across chosen monetization)
    const breakdown = {};
    monetization.forEach((id) => {
      breakdown[id] = Math.round(monthlyGoal / monetization.length);
    });

    const results = {
      monthlyViews: Math.round(requiredViews),
      subscribers: Math.round(requiredViews / 30), // assumption
      uploadsPerWeek: 4,
      timeToGoal: Math.ceil(monthlyGoal / 500), // fake scale
      dailyViews: Math.round(requiredViews / 30),
      engagementRate: 4.2,
      estimatedCPM: Number(baseCPM.toFixed(2)),
      revenueBreakdown: breakdown,
    };

    setResults(results);
    // TODO: pass results to CalculatorResults component
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
      {/* Left column placeholder (form will go here) */}

      <div className="space-y-4 md:space-y-6">
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

      <div className="space-y-4 md:space-y-6">
        {results && <CalculatorResults results={results} />}
      </div>
    </div>
  );
}
