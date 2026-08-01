// AI App Generator - Uses Gemini Flash for fast, cost-effective code generation

interface AppSpec {
  name: string;
  description: string;
  type: "saas" | "landing" | "dashboard" | "ecommerce" | "blog" | "portfolio" | "tool";
  features: string[];
  design: "modern" | "minimal" | "bold" | "elegant";
  colorScheme?: string;
}

interface GeneratedApp {
  success: boolean;
  code: {
    components?: string;
    page?: string;
    globals?: string;
    tailwind?: string;
  };
  explanation: string;
  techStack: string[];
}

// Prompts for different app types
const APP_PROMPTS = {
  saas: `Generate a complete SaaS application with:
- Responsive landing page with hero section
- Features section with benefits
- Pricing section
- Testimonials/social proof
- CTA sections
- Navbar and footer
Use a modern design with smooth animations.`,

  landing: `Generate a high-converting landing page with:
- Compelling hero with value proposition
- Feature highlights
- Social proof elements
- Clear CTA buttons
- Modern, clean aesthetic`,

  dashboard: `Generate a dashboard application with:
- Sidebar navigation
- Main content area with cards
- Stats/metrics display
- Data visualization elements
- Responsive layout`,

  ecommerce: `Generate an e-commerce storefront with:
- Product grid
- Shopping cart functionality
- Product detail view
- Category navigation
- Add to cart CTA`,

  blog: `Generate a blog platform with:
- Hero section
- Featured posts
- Post grid
- Category filters
- Newsletter signup`,

  portfolio: `Generate a portfolio website with:
- Hero/intro section
- Project showcase grid
- Skills section
- Contact form
- Smooth scrolling`,

  tool: `Generate a web tool application with:
- Input interface
- Processing/result display
- Settings panel
- Action buttons
- Clear UX flow`,
};

// Tailwind configuration template
const TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};`;

// Global styles template
const GLOBAL_STYLES = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}`;

export async function generateApp(spec: AppSpec): Promise<GeneratedApp> {
  const promptType = APP_PROMPTS[spec.type] || APP_PROMPTS.landing;
  
  const systemPrompt = `You are an expert React/Next.js developer. Generate a complete, production-ready application component.

Rules:
1. Use TypeScript with 'use client' directive
2. Use Tailwind CSS for all styling - NO arbitrary values
3. Use lucide-react for icons (import from 'lucide-react')
4. Make it fully interactive with React state
5. Include realistic content - NO placeholders or lorem ipsum
6. Use cn() utility for className merging (import from '@/lib/utils')
7. Return valid JSX that can be rendered directly
8. Keep everything in ONE file for simplicity
9. Use useState, useEffect hooks as needed
10. Make it responsive and mobile-friendly

Generate ONLY the component code, no explanations.`;

  const userPrompt = `Create a ${spec.type} app called "${spec.name}":
${spec.description}

${promptType}

Design preference: ${spec.design} aesthetic
${spec.colorScheme ? `Color scheme: ${spec.colorScheme}` : ""}

Required features: ${spec.features.join(", ")}

Return your response as a JSON object with this structure:
{
  "code": "full component code as string",
  "explanation": "brief explanation of what was built",
  "techStack": ["list of technologies used"]
}`;

  try {
    // For demo purposes, we'll generate code directly
    // In production, you would call an AI model here
    const generatedCode = generateCodeForSpec(spec);
    
    return {
      success: true,
      code: {
        components: generatedCode,
      },
      explanation: `Generated a ${spec.type} application: ${spec.name}. ${spec.features.length} features implemented.`,
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    };
  } catch (error) {
    console.error("Generation error:", error);
    return {
      success: false,
      code: {},
      explanation: "Failed to generate application. Please try again.",
      techStack: [],
    };
  }
}

function generateCodeForSpec(spec: AppSpec): string {
  const colorVar = spec.colorScheme || "#10b981";
  
  const templates: Record<string, string> = {
    saas: `
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Rocket, Zap, Shield, Users, ArrowRight, Check, Menu, X, Star,
  Code, Globe, Sparkles, Heart, ChevronRight
} from 'lucide-react';

export default function ${spec.name.replace(/\s/g, '')}() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const features = ${JSON.stringify(spec.features.map((f, i) => ({
    icon: ['Rocket', 'Zap', 'Shield', 'Users', 'Code', 'Globe', 'Star', 'Heart'][i % 8],
    title: f.split(' ').slice(0, 3).join(' '),
    desc: 'Build and ship faster with our cutting-edge platform designed for modern teams.',
  })))};

  const testimonials = [
    { name: 'Sarah Chen', role: 'Founder at TechStart', text: 'This platform transformed how we build products.' },
    { name: 'Marcus Johnson', role: 'CTO at ScaleUp', text: 'The best investment we made this year.' },
    { name: 'Emma Davis', role: 'Product Lead', text: 'Incredibly intuitive and powerful.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">${spec.name}</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">Testimonials</a>
              <Button variant="outline" size="sm">Log in</Button>
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4">
            <a href="#features" className="block text-sm font-medium text-gray-600">Features</a>
            <a href="#pricing" className="block text-sm font-medium text-gray-600">Pricing</a>
            <a href="#testimonials" className="block text-sm font-medium text-gray-600">Testimonials</a>
            <Button className="w-full bg-emerald-500">Get Started</Button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Now with AI-powered features
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ${spec.description.split('.')[0]}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Build, deploy, and scale your ${spec.type} faster than ever before. 
            Join thousands of teams shipping products with confidence.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button type="submit" size="lg" className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <p className="mt-4 text-sm text-gray-500">Free forever plan available. No credit card required.</p>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 border-y bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            {['Acme Corp', 'TechFlow', 'DataPro', 'CloudFirst', 'NextGen'].map((company) => (
              <span key={company} className="text-lg font-semibold text-gray-400">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you build and scale your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  {feature.icon === 'Rocket' && <Rocket className="w-6 h-6 text-emerald-600" />}
                  {feature.icon === 'Zap' && <Zap className="w-6 h-6 text-emerald-600" />}
                  {feature.icon === 'Shield' && <Shield className="w-6 h-6 text-emerald-600" />}
                  {feature.icon === 'Users' && <Users className="w-6 h-6 text-emerald-600" />}
                  {feature.icon === 'Code' && <Code className="w-6 h-6 text-emerald-600" />}
                  {feature.icon === 'Globe' && <Globe className="w-6 h-6 text-emerald-600" />}
                  {feature.icon === 'Star' && <Star className="w-6 h-6 text-emerald-600" />}
                  {feature.icon === 'Heart' && <Heart className="w-6 h-6 text-emerald-600" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of teams already building with us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-emerald-600">
              Start for Free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">${spec.name}</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2025 ${spec.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}`,

    landing: `
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Check, Menu, X, Play } from 'lucide-react';

export default function ${spec.name.replace(/\s/g, '')}() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">${spec.name}</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                ${spec.description.split('.')[0]}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your workflow with powerful tools designed for modern teams. 
                Ship faster, scale confidently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo <Play className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-500" /> No credit card required</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-500" /> 14-day free trial</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
                >
                  <Play className="w-6 h-6 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${spec.features.slice(0, 6).map((feature, i) => `
              <Card key={${i}} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">${feature}</h3>
                <p className="text-sm text-gray-600">Powerful functionality to help you succeed.</p>
              </Card>
            `).join('')}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center text-sm">
          © 2025 ${spec.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}`,

    dashboard: `
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  LayoutDashboard, Users, BarChart3, Settings, Bell, Search, 
  Plus, TrendingUp, TrendingDown, MoreVertical
} from 'lucide-react';

export default function ${spec.name.replace(/\s/g, '')}() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const stats = [
    { label: 'Total Revenue', value: '$124,563', change: '+12.5%', up: true },
    { label: 'Active Users', value: '2,345', change: '+8.2%', up: true },
    { label: 'Conversion Rate', value: '3.24%', change: '-2.1%', up: false },
    { label: 'Avg. Session', value: '4m 32s', change: '+15.3%', up: true },
  ];

  const recentActivity = [
    { user: 'Sarah Chen', action: 'Created new project', time: '2 min ago' },
    { user: 'Marcus Johnson', action: 'Updated settings', time: '15 min ago' },
    { user: 'Emma Davis', action: 'Invited team member', time: '1 hour ago' },
  ];

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={\`\${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r transition-all duration-300 flex flex-col\`}>
        <div className="p-4 border-b flex items-center justify-between">
          <div className={\`flex items-center gap-2 \${!isSidebarOpen && 'justify-center w-full'}\`}>
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            {isSidebarOpen && <span className="font-bold">${spec.name}</span>}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={\`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors \${activeTab === item.id ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'}\`}
            >
              <item.icon className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500">
              <LayoutDashboard className="w-5 h-5" />
            </button>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">3</span>
            </button>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
              <Plus className="w-4 h-4 mr-1" /> New
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <span className={\`inline-flex items-center text-sm font-medium \${stat.up ? 'text-emerald-600' : 'text-red-600'}\`}>
                  {stat.up ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  {stat.change}
                </span>
              </Card>
            ))}
          </div>

          {/* Activity Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium text-gray-900">{item.user}</p>
                      <p className="text-sm text-gray-500">{item.action}</p>
                    </div>
                    <span className="text-sm text-gray-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <Plus className="w-4 h-4 mr-2" /> New Project
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="w-4 h-4 mr-2" /> Invite User
                </Button>
                <Button variant="outline" className="justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" /> View Reports
                </Button>
                <Button variant="outline" className="justify-start">
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}`,

    ecommerce: `
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, Heart, Star, Search, Menu, X, Minus, Plus } from 'lucide-react';

export default function ${spec.name.replace(/\s/g, '')}() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(2);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['All', 'Electronics', 'Clothing', 'Home', 'Accessories'];
  
  const products = [
    { id: 1, name: 'Premium Headphones', price: 299, rating: 4.8, reviews: 234, category: 'Electronics', image: '🎧' },
    { id: 2, name: 'Smart Watch Pro', price: 449, rating: 4.9, reviews: 189, category: 'Electronics', image: '⌚' },
    { id: 3, name: 'Designer Backpack', price: 189, rating: 4.7, reviews: 156, category: 'Accessories', image: '🎒' },
    { id: 4, name: 'Wireless Earbuds', price: 149, rating: 4.6, reviews: 312, category: 'Electronics', image: '🎵' },
    { id: 5, name: 'Leather Wallet', price: 79, rating: 4.8, reviews: 98, category: 'Accessories', image: '👛' },
    { id: 6, name: 'Home Speaker', price: 199, rating: 4.5, reviews: 167, category: 'Electronics', image: '🔊' },
  ];

  const cartTotal = 748;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">${spec.name}</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Shop', 'Categories', 'About'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-900">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-900">
                <Heart className="w-5 h-5" />
              </button>
              <button onClick={() => setIsCartOpen(true)} className="relative text-gray-500 hover:text-gray-900">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Summer Collection 2025</h1>
          <p className="text-xl mb-8 opacity-90">Discover the latest trends at unbeatable prices</p>
          <Button size="lg" variant="secondary" className="text-emerald-600">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat.toLowerCase())}
                className={\`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors \${activeCategory === cat.toLowerCase() ? 'bg-emerald-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}\`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <p className="text-xs text-emerald-600 font-medium mb-1">{product.category}</p>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">\${product.price}</span>
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Shopping Cart</h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-3xl">🎧</div>
                  <div className="flex-1">
                    <h4 className="font-medium">Premium Headphones</h4>
                    <p className="text-gray-500 text-sm">$299</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                      <span>1</span>
                      <button className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-3xl">⌚</div>
                  <div className="flex-1">
                    <h4 className="font-medium">Smart Watch Pro</h4>
                    <p className="text-gray-500 text-sm">$449</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                      <span>1</span>
                      <button className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold">\${cartTotal}</span>
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600" size="lg">
                  Checkout — \${cartTotal}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 ${spec.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}`,

    blog: `
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Search, Calendar, User, Tag } from 'lucide-react';

export default function ${spec.name.replace(/\s/g, '')}() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing'];
  
  const posts = [
    { 
      id: 1, 
      title: 'The Future of Web Development in 2025', 
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development...',
      category: 'Technology',
      author: 'Sarah Chen',
      date: 'Dec 15, 2025',
      readTime: '8 min read',
      image: '🌐'
    },
    { 
      id: 2, 
      title: 'Building Scalable SaaS Applications', 
      excerpt: 'A comprehensive guide to building software that grows with your business...',
      category: 'Business',
      author: 'Marcus Johnson',
      date: 'Dec 12, 2025',
      readTime: '12 min read',
      image: '🚀'
    },
    { 
      id: 3, 
      title: 'Design Systems That Scale', 
      excerpt: 'How to create and maintain design systems that work across teams...',
      category: 'Design',
      author: 'Emma Davis',
      date: 'Dec 10, 2025',
      readTime: '6 min read',
      image: '🎨'
    },
    { 
      id: 4, 
      title: 'Growth Marketing Strategies That Work', 
      excerpt: 'Proven tactics for scaling your user base organically...',
      category: 'Marketing',
      author: 'Alex Kim',
      date: 'Dec 8, 2025',
      readTime: '10 min read',
      image: '📈'
    },
  ];

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold text-xl">${spec.name}</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Articles</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Categories</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">About</a>
              <Button size="sm">Subscribe</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Insights for Modern Builders
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep dives into technology, business, and design. Written by practitioners, for practitioners.
          </p>
          
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-8xl">
                {featuredPost.image}
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {featuredPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="w-fit bg-emerald-500 hover:bg-emerald-600">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat.toLowerCase())}
                className={\`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors \${activeCategory === cat.toLowerCase() ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}\`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                  {post.image}
                </div>
                <div className="p-4">
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-500 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
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

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 ${spec.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}`,

    portfolio: `
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Mail, Github, Linkedin, Twitter, ExternalLink, Code, Palette, Zap } from 'lucide-react';

export default function ${spec.name.replace(/\s/g, '')}() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'web', description: 'Full-stack marketplace with real-time updates', tech: ['React', 'Node.js', 'PostgreSQL'] },
    { id: 2, title: 'AI Dashboard', category: 'web', description: 'Analytics dashboard with ML predictions', tech: ['Next.js', 'Python', 'TensorFlow'] },
    { id: 3, title: 'Mobile Banking App', category: 'mobile', description: 'Secure banking with biometric auth', tech: ['React Native', 'Firebase'] },
    { id: 4, title: 'Brand Identity', category: 'design', description: 'Complete brand system for tech startup', tech: ['Figma', 'Illustrator'] },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Design', items: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'] },
  ];

  const services = [
    { icon: Code, title: 'Web Development', description: 'Custom web applications built with modern technologies' },
    { icon: Palette, title: 'UI/UX Design', description: 'User-centered design that converts and delights' },
    { icon: Zap, title: 'Performance', description: 'Lightning-fast, optimized experiences' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-5xl text-white font-bold">
            JD
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-emerald-500">John Doe</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full-stack developer and designer crafting digital experiences that make an impact. 
            I turn complex problems into elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              View My Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 w-4 h-4" /> Get in Touch
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A selection of work I'm proud of. Each project represents a unique challenge solved through design and code.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {['all', 'web', 'mobile', 'design'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={\`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors \${activeFilter === filter ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}\`}
              >
                {filter === 'all' ? 'All Projects' : filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter(p => activeFilter === 'all' || p.category === activeFilter)
              .map((project) => (
                <Card key={project.id} className="overflow-hidden group">
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform">
                      {project.category === 'web' ? '🌐' : project.category === 'mobile' ? '📱' : '🎨'}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700">
                      View Project <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.category} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{group.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-8 opacity-90">
            Have a project in mind? I'd love to hear about it. Let's create something amazing.
          </p>
          <Button size="lg" variant="secondary" className="text-emerald-600">
            <Mail className="mr-2 w-4 h-4" /> Start a Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 ${spec.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}`,
  };

  return templates[spec.type] || templates.landing;
}

export type { AppSpec, GeneratedApp };
