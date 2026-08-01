"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sparkles,
  Code,
  Globe,
  ShoppingCart,
  LayoutDashboard,
  FileText,
  User,
  Wand2,
  Loader2,
  Download,
  Share2,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";

const APP_TYPES = [
  { id: "saas", label: "SaaS App", icon: Globe, description: "Full-stack SaaS with auth, payments, dashboard" },
  { id: "landing", label: "Landing Page", icon: FileText, description: "High-converting marketing pages" },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, description: "Admin panels, analytics, data tools" },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart, description: "Online stores, product catalogs" },
  { id: "blog", label: "Blog", icon: FileText, description: "Content sites, portfolios" },
  { id: "portfolio", label: "Portfolio", icon: User, description: "Personal sites, showcases" },
];

const FEATURES = [
  "User authentication (sign up, login, OAuth)",
  "Dashboard with analytics",
  "CRUD operations with database",
  "Stripe payment integration",
  "Email notifications",
  "File uploads",
  "Real-time updates",
  "SEO optimization",
  "Dark mode support",
  "API endpoints",
];

export default function BuilderPage() {
  const [prompt, setPrompt] = useState("");
  const [appType, setAppType] = useState("saas");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [projectName, setProjectName] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setGeneratedCode(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: projectName || "My App",
          description: prompt,
          type: appType,
          features: selectedFeatures,
          design: "modern",
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setGeneratedCode(data.code?.components || data.project?.code);
      } else {
        console.error("Generation failed:", data.error);
      }
    } catch (error) {
      console.error("Generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share && generatedCode) {
      try {
        await navigator.share({
          title: `${projectName || "My App"} - Built with SproutCraft`,
          text: "Check out the app I just built with SproutCraft!",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share canceled");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">SproutCraft Builder</span>
            </div>
            <Button variant="outline" size="sm">
              <Code className="w-4 h-4 mr-2" /> My Projects
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Builder Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-emerald-500" />
                  Describe Your App
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name
                  </label>
                  <Input
                    placeholder="My Awesome App"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you want to build?
                  </label>
                  <textarea
                    className="w-full h-32 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    placeholder="Describe your app in plain English. For example: A project management tool for freelancers with time tracking, invoicing, and client portals."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    App Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {APP_TYPES.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setAppType(type.id)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          appType === type.id
                            ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <type.icon className={`w-5 h-5 mb-2 ${
                          appType === type.id ? "text-emerald-600" : "text-gray-400"
                        }`} />
                        <div className="font-medium text-sm">{type.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Optional Features (select any)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {FEATURES.map((feature) => (
                      <button
                        key={feature}
                        onClick={() => toggleFeature(feature)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedFeatures.includes(feature)
                            ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                            : "bg-gray-100 text-gray-600 border border-transparent hover:bg-gray-200"
                        }`}
                      >
                        {selectedFeatures.includes(feature) && (
                          <Check className="w-3 h-3 inline mr-1" />
                        )}
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-emerald-500 hover:bg-emerald-600"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate App
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Preview / Code Output */}
          <div>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-500" />
                  Generated Code
                </CardTitle>
                {generatedCode && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyToClipboard}>
                      {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center h-96 text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-emerald-500 mb-4" />
                    <p className="text-gray-600">Generating your app with AI...</p>
                    <p className="text-sm text-gray-400 mt-2">This usually takes 10-30 seconds</p>
                  </div>
                ) : generatedCode ? (
                  <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[600px]">
                    <pre className="text-sm text-gray-100 overflow-x-auto">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-96 text-center border-2 border-dashed border-gray-200 rounded-lg">
                    <Sparkles className="w-16 h-16 text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-2">Your generated app will appear here</p>
                    <p className="text-sm text-gray-400">Describe your app and click Generate</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why SproutCraft Beats the Competition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">vs Emergent.sh</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">3x more daily generations on free tier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">No credit card required to start</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Built-in code editor with live preview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Faster generation with optimized AI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">vs Lovable</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">50% lower pricing on paid plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">True full-stack code ownership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Export to GitHub in one click</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">No vendor lock-in, portable code</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">vs Bolt.new</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Persistent project history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Better mobile-responsive output</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Real-time collaboration features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Advanced template library</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
