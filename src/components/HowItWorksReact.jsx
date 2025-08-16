import { Search, BarChart3, DollarSign, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Enter Channel Info",
    description: "Simply type in any YouTube channel name, handle, or URL",
  },
  {
    icon: BarChart3,
    title: "We Analyze Data",
    description:
      "Our algorithm processes views, subscribers, and engagement metrics",
  },
  {
    icon: DollarSign,
    title: "Get Income Estimate",
    description: "Receive detailed monthly and yearly revenue projections",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "All calculations happen in real-time with up-to-date data",
  },
];

export default function HowItWorksReact() {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-slate-50/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Our advanced algorithm analyzes multiple data points to provide
            accurate income estimates
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center relative bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="p-4 md:p-6">
                <div className="mb-3 md:mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-red-100">
                  <step.icon className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
