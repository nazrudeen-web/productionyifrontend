import { Search, ArrowRight, Sparkles } from "lucide-react";

export default function HeroReact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-50 py-6 sm:py-8 md:py-10">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container relative px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-4 sm:mb-6">
            <div className="mb-2 sm:mb-3 inline-flex items-center rounded-full border border-red-200 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm shadow-lg">
              <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
              <span className="font-semibold text-slate-700">
                Free YouTube Income Estimator
              </span>
              <span className="ml-1.5 sm:ml-2 rounded-full bg-red-100 px-1.5 sm:px-2 py-0.5 text-xs font-medium text-red-700">
                100% Free
              </span>
            </div>

            <h1 className="mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Discover Top Performing{" "}
              <span className="relative">
                <span className="text-red-600">YouTube Channels</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-red-200"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C50 2 100 2 150 4C200 6 250 3 298 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mb-4 sm:mb-5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto px-4 sm:px-0">
              Get instant earnings estimates and analytics for any YouTube
              channel
            </p>
          </div>

          <div className="mb-3 sm:mb-4 mx-auto max-w-2xl px-4 sm:px-0">
            <form method="get" className="mb-2 sm:mb-3">
              <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
                <div className="relative flex-1">
                  <Search className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="channel"
                    placeholder="Enter channel name or @handle"
                    className="pl-10 sm:pl-12 h-10 sm:h-12 border-0 bg-transparent focus:outline-none focus:ring-0 placeholder:text-slate-400 font-medium text-sm sm:text-base w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-10 sm:h-12 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto inline-flex items-center justify-center"
                >
                  Analyze
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </form>

            <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 px-2">
              <span className="text-xs text-slate-500">Try:</span>
              {["@MrBeast", "@PewDiePie", "@T-Series"].map((channel) => (
                <button
                  key={channel}
                  className="px-2 sm:px-3 py-1 text-xs bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors duration-200 font-medium"
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 px-4">
              Trusted by{" "}
              <span className="font-semibold text-slate-700">10,000+</span>{" "}
              content creators worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
