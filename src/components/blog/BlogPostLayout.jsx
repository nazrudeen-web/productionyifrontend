import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, Share2, Bookmark } from "lucide-react";

export default function BlogPostLayout({ frontmatter, children }) {
  const { title, author, pubDate, description, category = "Blog", readTime = "6 min read", image = null } = frontmatter;

  return (
    <article className="space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500">
        <a href="/blog" className="hover:text-red-600">Blog</a>
        <span className="mx-2">/</span>
        <span>{category}</span>
      </nav>

      {/* Header */}
      <header className="space-y-6">
        <div className="space-y-4">
          <Badge variant="secondary" className="bg-red-100 text-red-700">{category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{title}</h1>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(pubDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
            <Bookmark className="w-4 h-4" />
            Save
          </button>
        </div>
      </header>

      {/* Featured Image */}
      {image && (
        <div className="aspect-video overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content */}
      <Card>
        <CardContent className="p-8">
          <div className="prose prose-slate max-w-none">{children}</div>
        </CardContent>
      </Card>

      {/* Author Bio */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-slate-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">{author}</h3>
              <p className="text-sm text-slate-600 mb-3">
                Passionate writer sharing insights on YouTube growth, income, and creator economy.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">YouTube Expert</Badge>
                <Badge variant="outline" className="text-xs">Blogger</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
