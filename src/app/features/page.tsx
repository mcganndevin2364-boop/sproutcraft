import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Database,
  Rocket,
  Shield,
  Palette,
  Users,
  Zap,
  Globe,
  GitBranch,
  Layers,
  Monitor,
  Smartphone,
  Lock,
  Cpu,
  Cloud,
  FileCode,
  TestTube,
  GitMerge,
  Container,
  Activity,
  BarChart3,
  Mail,
  MessageSquare,
  Bell,
  Settings,
  UserCheck,
  CreditCard,
  ShoppingCart,
  FileUp,
  Search,
  Accessibility,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Code,
      title: "AI-Powered Code Generation",
      description:
        "Describe your app in plain English and watch as our AI transforms your ideas into production-ready React, Next.js, and Tailwind CSS code.",
      details: [
        "Natural language to code conversion",
        "Smart context understanding",
        "Best practice implementations",
        "TypeScript type safety",
      ],
    },
    {
      icon: Database,
      title: "Full-Stack Components",
      description:
        "Every generated app includes complete backend infrastructure—databases, APIs, authentication, and more.",
      details: [
        "Prisma schema generation",
        "RESTful API routes",
        "Authentication flows",
        "Real-time subscriptions",
      ],
    },
    {
      icon: Rocket,
      title: "One-Click Deploy",
      description:
        "Deploy to the edge instantly. Your apps are automatically optimized, cached, and scaled globally.",
      details: [
        "Edge deployment",
        "Automatic HTTPS",
        "CDN distribution",
        "Zero-config scaling",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Built-in security features protect your users and data with industry-standard practices.",
      details: [
        "SOC 2 compliant",
        "Role-based access control",
        "End-to-end encryption",
        "Security headers",
      ],
    },
    {
      icon: Palette,
      title: "Beautiful Design System",
      description:
        "Every generated app looks professionally designed with cohesive typography, colors, and components.",
      details: [
        "Responsive layouts",
        "Dark mode support",
        "Accessible components",
        "Consistent spacing",
      ],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Build together with real-time collaboration, version control, and shared component libraries.",
      details: [
        "Real-time editing",
        "Git integration",
        "Role management",
        "Activity logs",
      ],
    },
  ];

  const integrations = [
    { name: "Stripe", icon: CreditCard, description: "Payment processing" },
    { name: "SendGrid", icon: Mail, description: "Email automation" },
    { name: "Auth0", icon: Lock, description: "Enterprise auth" },
    { name: "Vercel", icon: Cloud, description: "Hosting & CDN" },
    { name: "GitHub", icon: GitBranch, description: "Code hosting" },
    { name: "PostgreSQL", icon: Database, description: "Database" },
    { name: "Redis", icon: Activity, description: "Caching" },
    { name: "Algolia", icon: Search, description: "Search engine" },
  ];

  const capabilities = [
    { icon: Layers, title: "Component Library", desc: "200+ pre-built components" },
    { icon: Monitor, title: "Responsive Design", desc: "Mobile to desktop" },
    { icon: Smartphone, title: "PWA Support", desc: "Progressive web apps" },
    { icon: Accessibility, title: "Accessibility", desc: "WCAG 2.1 AA compliant" },
    { icon: TestTube, title: "Testing", desc: "Built-in test generation" },
    { icon: GitMerge, title: "Version Control", desc: "Git integration" },
    { icon: Container, title: "API Builder", desc: "Custom endpoints" },
    { icon: BarChart3, title: "Analytics", desc: "Built-in dashboards" },
    { icon: MessageSquare, title: "Chat", desc: "Real-time messaging" },
    { icon: Bell, title: "Notifications", desc: "Email & push alerts" },
    { icon: Settings, title: "Admin Panel", desc: "User management" },
    { icon: UserCheck, title: "Permissions", desc: "Role-based access" },
    { icon: ShoppingCart, title: "E-commerce", desc: "Carts & checkout" },
    { icon: FileUp, title: "File Storage", desc: "S3 integration" },
    { icon: Cpu, title: "AI Features", desc: "ML integrations" },
    { icon: FileCode, title: "Export Code", desc: "Download source" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Builders
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale production-ready applications
            without writing code.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built-in Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect to the tools you already use with seamless integrations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <integration.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold">{integration.name}</h4>
                  <p className="text-sm text-gray-500">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything Included
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive platform with all the features you need to build any app.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-white border hover:shadow-md transition-shadow"
              >
                <cap.icon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">{cap.title}</h4>
                  <p className="text-xs text-gray-500">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start with our free plan and upgrade as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="text-emerald-600">
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
