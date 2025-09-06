import { useState, useEffect } from "react";
import { Menu, X, Calculator, Play, Search } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickySearch, setShowStickySearch] = useState(false);

  // Show sticky search after scrolling past hero height
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      setShowStickySearch(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm ">
      <div className="container max-w-7xl mx-auto flex px-4 h-20 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <div className="relative">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg group-hover:shadow-xl transition-all duration-200">
              <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white fill-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl text-slate-900 leading-tight">
              YouTubers Income
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
              Earnings & Analytics
            </span>
          </div>
        </a>

        {/* Sticky Search (Desktop) */}
        <div
          className={`hidden lg:flex items-center transition-all duration-500 ease-in-out ${
            showStickySearch
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-8 scale-95 pointer-events-none"
          }`}
        >
          <form method="GET" action="/" className="relative">
            <input
              type="text"
              placeholder="Search any YouTube channel..."
              name="channel"
              className="w-96 pl-10 pr-4 py-2 rounded-md border border-slate-200 focus:border-red-500 focus:ring focus:ring-red-500/20 shadow-sm focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
            >
              Search
            </button>
          </form>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 transition-all duration-500 ease-in-out">
          <a
            href="/top-youtube-channels"
            className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors duration-200 relative group"
          >
            Top Youtube Channels
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="/blog"
            className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors duration-200 relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="/calculator">
            <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-200 font-medium">
              <Calculator className="mr-2 h-4 w-4" />
              Income Calculator
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden hover:bg-slate-100 p-2 rounded-md transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container py-6 space-y-4">
            <form method="GET" action="/" className="relative mb-4">
              <input
                type="text"
                placeholder="Search any YouTube channel..."
                name="channel"
                className="w-full pl-10 pr-16 py-2 bg-white border border-slate-200 rounded-md focus:border-red-500 focus:ring focus:ring-red-500/20 focus:outline-none"
                style={{ backgroundColor: "white" }}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
              >
                Search
              </button>
            </form>
            <a
              href="/top-channels"
              className="block text-base font-medium text-slate-700 hover:text-red-600 transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Top Channels
            </a>
            <a
              href="/blog"
              className="block text-base font-medium text-slate-700 hover:text-red-600 transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="pt-4 border-t border-slate-200">
              <a
                href="/calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md shadow-lg font-medium"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Income Calculator
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
