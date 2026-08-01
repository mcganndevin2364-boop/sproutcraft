import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  Star,
  Play,
  Code,
  Database,
  Rocket,
  Shield,
  Palette,
  Users,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Code,
      title: "AI-Powered Development",
      description:
        "Describe what you want in plain English. Our AI generates production-ready code with React, Next.js, and Tailwind CSS.",
    },
    {
      icon: Database,
      title: "Full-Stack Ready",
      description:
        "Built-in authentication, database schemas, API routes, and payment integrations. Everything you need, nothing you don't.",
    },
    {
      icon: Rocket,
      title: "One-Click Deploy",
      description:
        "Deploy to the edge in seconds. Your app is automatically optimized, cached, and scaled globally.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "SOC 2 compliant. Role-based access control. End-to-end encryption. Security that grows with you.",
    },
    {
      icon: Palette,
      title: "Beautiful by Default",
      description:
        "Every generated app looks professionally designed. Customize everything with our visual editor or code.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Real-time collaboration, version control, and shared component libraries. Build together, ship faster.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder at TechStart",
      avatar: "SC",
      content:
        "SproutCraft helped us ship our MVP in 3 days instead of 3 weeks. The code quality is impressive.",
    },
    {
      name: "Marcus Johnson",
      role: "CTO at ScaleUp",
      avatar: "MJ",
      content:
        "We migrated our internal tools to SproutCraft. Our developers love it because they can customize everything.",
    },
    {
      name: "Emma Davis",
      role: "Product Lead at GrowthCo",
      avatar: "ED",
      content:
        "The best investment we made this year. Our non-technical team can now build their own tools.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Apps Built" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "10x", label: "Faster Development" },
    { value: "$2M+", label: "Saved in Dev Costs" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Powered by Advanced AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Build Full-Stack Apps
              <br />
              <span className="text-emerald-500">10x Faster with AI</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Transform your ideas into production-ready applications. Describe what you
              want, and watch SproutCraft build it—instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/builder">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-lg px-8"
                >
                  Start Building Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8"
              >
                <Play className="mr-2 w-5 h-5" /> Watch Demo
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Free forever plan available. No credit card required.
            </p>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm">
                <p className="text-gray-400 mb-2">// Describe your app in plain English</p>
                <p className="text-emerald-400">
                  &quot;I want a SaaS dashboard with user authentication,
                </p>
                <p className="text-emerald-400">
                  {" "}project management, and Stripe payments&quot;
                </p>
                <p className="text-gray-400 mt-4 mb-2">// SproutCraft generates...</p>
                <p className="text-gray-300">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-yellow-400">project</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-blue-300">await</span>{" "}
                  <span className="text-emerald-400">sproutcraft</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-300">build</span>
                  <span className="text-white">()</span>
                </p>
                <p className="text-gray-500 mt-2">
                  ✓ Auth &nbsp;✓ Database &nbsp;✓ API &nbsp;✓ Payments &nbsp;✓ Deploy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-y bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by builders at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["Acme Corp", "TechFlow", "DataPro", "CloudFirst", "NextGen", "StartupX"].map(
              (company) => (
                <span
                  key={company}
                  className="text-lg font-semibold text-gray-400"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Build Fast
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From idea to production in record time. SproutCraft handles the complexity
              so you can focus on what matters—your product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Build in Three Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No coding required. No complex setup. Just describe what you want and watch
              it come to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Describe Your Vision",
                description:
                  "Tell us what you want to build in plain English. No technical jargon needed.",
              },
              {
                step: "02",
                title: "AI Generates Your App",
                description:
                  "Our AI creates a complete, production-ready application with all the features you need.",
              },
              {
                step: "03",
                title: "Customize & Deploy",
                description:
                  "Fine-tune every detail with our visual editor or code. Deploy with one click.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-emerald-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by Builders Worldwide
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join thousands of founders, developers, and teams who ship faster with
              SproutCraft.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Faster?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 50,000+ builders who ship products 10x faster with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                variant="secondary"
                className="text-emerald-600 hover:text-emerald-700"
              >
                Start for Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
