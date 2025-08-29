import { DollarSign, MapPin, Video, Users, ChevronDown } from "lucide-react";

export default function IncomeCalculatorForm({
  onCalculate,
  monthlyGoal,
  setMonthlyGoal,
  setNiche,
  niche,
  setLocation,
  location,
  setMonetization,
  monetization,
  niches,
  locations,
  monetizationSources,
}) {
  const handleMonetizationChange = (sourceId, checked) => {
    if (checked) {
      setMonetization([...monetization, sourceId]);
    } else {
      setMonetization(monetization.filter((id) => id !== sourceId));
    }
  };
  return (
    <div className="shadow-lg bg-white rounded-xl border border-slate-200 flex flex-col">
      <div className="pb-4 md:pb-6 px-4 md:px-6 pt-6">
        <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold">
          <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
          Income Calculator Settings
        </h3>
      </div>
      <div className="space-y-4 md:space-y-6 p-4 md:p-6 pt-0">
        {/* Monthly Income Goal */}
        <div className="space-y-2 md:space-y-3">
          <label className="text-sm md:text-base font-medium block">
            Monthly Income Goal
          </label>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-sm text-slate-600">$1,000</span>
              <span className="text-base md:text-lg font-bold text-green-600">
                ${monthlyGoal.toLocaleString()}
              </span>
              <span className="text-xs md:text-sm text-slate-600">$50,000</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={monthlyGoal}
                onChange={(e) => setMonthlyGoal(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <style jsx>{`
                .slider::-webkit-slider-thumb {
                  appearance: none;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #059669;
                  cursor: pointer;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                .slider::-moz-range-thumb {
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #059669;
                  cursor: pointer;
                  border: none;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Content Niche */}
        <div className="space-y-2">
          <label className="text-sm md:text-base font-medium flex items-center gap-2">
            <Video className="h-3 w-3 md:h-4 md:w-4 text-red-600" />
            Content Niche
          </label>
          <div className="relative">
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-3 py-2 text-sm md:text-base border border-slate-200 rounded-md bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none appearance-none pr-10"
            >
              <option value="">Select your content niche</option>
              {niches.map((n) => (
                <option key={n.value} value={n.value}>
                  {n.label} (${n.cpm} CPM)
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Audience Location */}
        <div className="space-y-2">
          <label className="text-sm md:text-base font-medium flex items-center gap-2">
            <MapPin className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
            Primary Audience Location
          </label>
          <div className="relative">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 text-sm md:text-base border border-slate-200 rounded-md bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none appearance-none pr-10"
            >
              <option value="">Select audience location</option>
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Monetization Sources */}
        <div className="space-y-2 md:space-y-3">
          <label className="text-sm md:text-base font-medium flex items-center gap-2">
            <Users className="h-3 w-3 md:h-4 md:w-4 text-purple-600" />
            Monetization Sources
          </label>
          <div className="grid grid-cols-1 gap-2 md:gap-3">
            {monetizationSources.map((source) => (
              <div key={source.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={source.id}
                  checked={monetization.includes(source.id)}
                  onChange={(e) =>
                    handleMonetizationChange(source.id, e.target.checked)
                  }
                  className="w-4 h-4 text-purple-600 bg-white border-slate-300 rounded focus:ring-purple-500 focus:ring-2"
                />
                <label
                  htmlFor={source.id}
                  className="text-xs md:text-sm font-normal cursor-pointer"
                >
                  {source.label}
                  <span className="text-xs text-slate-500 ml-1">
                    ({source.multiplier}x boost)
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Button */}
        <button
          onClick={onCalculate}
          className="w-full bg-blue-600 text-white rounded-lg py-2 mt-3 hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
