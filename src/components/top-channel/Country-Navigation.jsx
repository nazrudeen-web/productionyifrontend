import { Badge } from "@/components/ui/badge";

const popularCountries = [
  { slug: "", name: "Global", flag: "🌐" },
  { slug: "united-states", name: "United States", flag: "🇺🇸" },
  { slug: "canada", name: "Canada", flag: "🇨🇦" },
  { slug: "united-kingdom", name: "United Kingdom", flag: "🇬🇧" },
  { slug: "germany", name: "Germany", flag: "🇩🇪" },
  { slug: "australia", name: "Australia", flag: "🇦🇺" },
];

export default function CountryNavigation() {
  return (
    <div className=" bg-white border-b border-slate-200 py-4">
      <div className="container max-w-7xl  mx-auto px-4">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-sm font-medium text-slate-700">
            Browse by Country:
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularCountries.map((country) => {
            const href = country.slug
              ? `/top-youtube-channels/${country.slug}`
              : "/top-youtube-channels";

            return (
              <a key={country.slug || "global"} href={href}>
                <Badge
                  variant="outline"
                  className="hover:bg-red-50 hover:text-red-700 hover:border-red-200 cursor-pointer transition-colors"
                >
                  {country.flag} {country.name}
                </Badge>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
