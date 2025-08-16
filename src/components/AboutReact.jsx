import { Shield, Zap, Users, BarChart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "We don't store personal data or require registration",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds with our optimized algorithms",
  },
  {
    icon: Users,
    title: "Trusted by Creators",
    description: "Used by thousands of YouTubers and marketers worldwide",
  },
  {
    icon: BarChart,
    title: "Data-Driven",
    description: "Based on real YouTube analytics and industry insights",
  },
];

export default function AboutReact() {
  return (
    <section id="about" className="py-12 md:py-20 bg-slate-50/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
              The Most Accurate YouTube Income Estimator
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed">
              Our platform combines advanced data analytics with real-time
              YouTube metrics to provide the most accurate income estimates
              available. Whether you're a creator, marketer, or just curious
              about your favorite channels, we deliver insights you can trust.
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Built by a team of data scientists and YouTube experts, our
              algorithm continuously learns and adapts to provide increasingly
              accurate predictions as the platform evolves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="p-4 md:p-6 text-center">
                  <div className="mb-2 md:mb-3 inline-flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-red-100">
                    <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-xs md:text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
