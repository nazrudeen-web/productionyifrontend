import { Button } from "@/components/ui/button";
import { Youtube, Twitter, Mail, Play, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg">
                  <Play className="h-5 w-5 text-white fill-white" />
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-slate-900"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">
                  YouTubers Income
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Analytics & Insights
                </span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              The most accurate YouTube income estimator. Discover how much any
              channel makes with our advanced analytics platform.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Tools</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/calculator"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  Income Calculator
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  Channel Analytics
                </a>
              </li>
              <li>
                <a
                  href="/top-youtube-channels"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  Top Youtube Channels
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Trending Videos
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/blog"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  FAQ
                </a>
              </li>
              {/* <li>
                <a
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  About Us
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              If you have feedback or questions, please reach out to us at{" "}
              <span className="text-white font-medium">
                dev@youtubersincome.com
              </span>
              .
            </p>
            <div className="space-y-4">
              <div className="flex gap-2">
                <a
                  href="mailto:dev@youtubersincome.com"
                  className="bg-red-600 hover:bg-red-700 text-white shadow-lg px-4 py-2 rounded-md inline-block text-center"
                >
                  Send Email
                </a>
              </div>
              <p className="text-xs text-slate-400">
                We will respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">
            © 2025 YouTubers Income. All rights reserved.
          </p>
          <div className="flex space-x-8 text-slate-400 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/about"
              className="hover:text-white transition-colors duration-200"
            >
              About Us
            </a>
            {/* <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
