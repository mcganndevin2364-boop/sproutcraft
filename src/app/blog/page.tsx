import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const posts = [
  {
    slug: "build-saas-without-code-2025",
    title: "How to Build a SaaS App Without Code in 2025",
    excerpt: "The no-code revolution has arrived. Learn how entrepreneurs are building profitable SaaS products without writing a single line of code.",
    category: "No-Code",
    author: "Sarah Chen",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "ai-app-builder-comparison",
    title: "AI App Builders Compared: SproutCraft vs Lovable vs Bolt",
    excerpt: "We tested the top AI app builders to find out which one actually delivers production-ready code. The results might surprise you.",
    category: "Comparison",
    author: "Marcus Johnson",
    date: "Dec 12, 2025",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "vibe-coding-complete-guide",
    title: "Vibe Coding: The Complete Guide to Building Apps with AI",
    excerpt: "What is vibe coding? How do you do it effectively? This comprehensive guide covers everything from getting started to shipping production apps.",
    category: "Tutorial",
    author: "Emma Davis",
    date: "Dec 10, 2025",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "mvp-development-speed",
    title: "How to Build an MVP in 48 Hours (Real Case Study)",
    excerpt: "Follow along as we build a real SaaS MVP from idea to deployed product in just 48 hours using AI-powered development tools.",
    category: "Case Study",
    author: "Alex Kim",
    date: "Dec 8, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "full-stack-code-ownership",
    title: "Why Code Ownership Matters for Your Startup",
    excerpt: "Proprietary platforms promise speed but cost you freedom. Here's why generating real, portable code is the smarter choice for long-term success.",
    category: "Business",
    author: "Sarah Chen",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "stripe-payments-integration",
    title: "Adding Stripe Payments to Your AI-Generated App",
    excerpt: "Step-by-step guide to integrating Stripe payment processing into your SproutCraft-generated SaaS application.",
    category: "Tutorial",
    author: "Marcus Johnson",
    date: "Dec 3, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "startup-development-costs",
    title: "The True Cost of Building a SaaS in 2025",
    excerpt: "Traditional development vs AI-assisted development: A detailed cost breakdown that might change how you think about building your startup.",
    category: "Business",
    author: "Emma Davis",
    date: "Nov 30, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "landing-page-conversion",
    title: "10 Landing Page Patterns That Convert (With Examples)",
    excerpt: "Analysis of 100 high-converting SaaS landing pages reveals these patterns. Learn how to apply them to your own pages.",
    category: "Marketing",
    author: "Alex Kim",
    date: "Nov 28, 2025",
    readTime: "11 min read",
    featured: false,
  },
];

const categories = ["All", "Tutorial", "Comparison", "Business", "Case Study", "No-Code", "Marketing"];

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            SproutCraft Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights on AI development, no-code tools, and building SaaS products faster.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <span className="text-8xl">🚀</span>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" /> {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {featuredPost.readTime}
                      </span>
                    </div>
                    <Button className="w-fit bg-emerald-500 hover:bg-emerald-600">
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === "All" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-video bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-4xl">
                      {post.category === "Tutorial" ? "📚" : 
                       post.category === "Comparison" ? "⚖️" : 
                       post.category === "Business" ? "💼" : 
                       post.category === "Case Study" ? "📊" : "✨"}
                    </span>
                  </div>
                  <CardContent className="p-4">
                    <span className="inline-block px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-medium mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest articles delivered straight to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" size="lg" className="text-emerald-600">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
