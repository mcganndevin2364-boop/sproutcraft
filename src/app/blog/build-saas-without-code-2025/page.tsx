import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogPostPage() {
  const relatedPosts = [
    { slug: "ai-app-builder-comparison", title: "AI App Builders Compared" },
    { slug: "vibe-coding-complete-guide", title: "Vibe Coding: The Complete Guide" },
    { slug: "mvp-development-speed", title: "Build an MVP in 48 Hours" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            No-Code
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How to Build a SaaS App Without Code in 2025
          </h1>
          <div className="flex items-center gap-6 text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-medium">
                SC
              </div>
              Sarah Chen
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Dec 15, 2025
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 8 min read
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            <strong>TL;DR:</strong> Building a SaaS without code has never been easier. AI-powered tools like SproutCraft let you create production-ready applications in hours, not months.
          </p>

          <h2>What is No-Code SaaS Development?</h2>
          <p>
            No-code SaaS development refers to building software-as-a-service applications without writing traditional programming code. Instead, you use visual interfaces, drag-and-drop builders, and increasingly, AI-powered tools that generate code from natural language descriptions.
          </p>

          <h2>Why Build a SaaS Without Code?</h2>
          <ul>
            <li><strong>Speed:</strong> Launch in days instead of months</li>
            <li><strong>Cost:</strong> Save $50,000+ in development costs</li>
            <li><strong>Validation:</strong> Test your idea before investing heavily</li>
            <li><strong>Iteration:</strong> Make changes quickly based on feedback</li>
          </ul>

          <h2>The Best Tools for Building SaaS Without Code</h2>
          <ol>
            <li><strong>SproutCraft</strong> - Best balance of power and simplicity</li>
            <li><strong>Lovable</strong> - Great for React/Next.js apps</li>
            <li><strong>Bolt.new</strong> - Fast prototyping</li>
            <li><strong>Replit Agent</strong> - All-in-one platform</li>
          </ol>

          <h2>Step-by-Step: Building Your First SaaS</h2>
          
          <h3>Step 1: Define Your Core Value Proposition</h3>
          <p>Before touching any tool, clearly define what problem your SaaS solves.</p>

          <h3>Step 2: Choose Your App Type</h3>
          <p>Most SaaS apps fall into categories: Dashboard, Tool, Marketplace, Membership, or E-commerce.</p>

          <h3>Step 3: Describe Your App to the AI</h3>
          <p>Simply describe what you want in plain English and watch the AI generate your complete application.</p>

          <h3>Step 4: Customize and Refine</h3>
          <p>Generated apps are starting points. Customize branding, features, and copy.</p>

          <h3>Step 5: Launch and Iterate</h3>
          <p>With SproutCraft, deployment is one click. Collect feedback and iterate quickly.</p>

          <h2>Getting Started</h2>
          <p>
            <Link href="/signup" className="text-emerald-600 font-medium hover:text-emerald-700">
              Sign up for SproutCraft free
            </Link> and build your first app today.
          </p>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <span className="inline-flex items-center text-sm text-emerald-600">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
