import {
  ExternalLink,
  Share2,
  Calendar,
  MapPin,
  Twitter,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function ChannelHeader({ data }) {
  const [copied, setCopied] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const publishedDate = new Date(data.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const topics =
    data.topicCategories?.map((url) => {
      const name = url.split("/").pop()?.replace(/_/g, " ") || "";
      return decodeURIComponent(name);
    }) || [];

  const readableTopics =
    topics.length > 1
      ? topics.slice(0, -1).join(", ") + " & " + topics.slice(-1)
      : topics[0] || "Creator";

  const countryName = new Intl.DisplayNames(["en"], { type: "region" }).of(
    data.country
  );

  const getFlagEmoji = (code) => {
    return code
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
      );
  };
  const flag = getFlagEmoji(data.country);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Check out ${data.title}'s YouTube earnings and analytics!`;

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
    setDropdownOpen(false);
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareText} ${currentUrl}`
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setDropdownOpen(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Banner Section */}
      <div className="relative h-48 w-full bg-gradient-to-br from-slate-600 to-slate-800 md:h-56">
        {data.bannerImage && (
          <img
            src={data.bannerImage || "/placeholder.svg"}
            alt={`${data.title} banner`}
            className="h-full w-full object-cover"
          />
        )}

        {/* Profile Image */}
        <div className="absolute -bottom-16 left-8 z-10">
          <div className="relative">
            <img
              src={data.thumbnail || "/placeholder.svg"}
              alt={`${data.title} profile`}
              className="h-32 w-32 rounded-full border-4 border-white bg-white object-cover shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 rounded-full bg-red-600 p-2">
              <div className="h-3 w-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Channel Info */}
      <div className="px-8 pb-8 pt-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900">{data.title}</h2>
            <p className="mt-2 text-lg text-slate-600">
              YouTube Creator · {readableTopics}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {publishedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>
                  {flag} {countryName}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.youtube.com/${data.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Channel
            </a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 p-2 rounded-md transition-colors duration-200"
              >
                <Share2 className="h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg z-auto">
                  <div className="py-1">
                    <button
                      onClick={handleTwitterShare}
                      className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Share on Twitter
                    </button>
                    <button
                      onClick={handleWhatsAppShare}
                      className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Share on WhatsApp
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4 text-green-600" />
                          <span className="text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Link
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
              {dropdownOpen && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setDropdownOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
