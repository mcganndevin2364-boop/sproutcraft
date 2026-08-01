import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Share2, Copy, Check, ArrowRight, Download } from "lucide-react";
import { GithubIcon } from "@/components/social-icons";

export default async function ResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">SproutCraft</span>
          </Link>
          <Link href="/builder">
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
              Build Your Own <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <Check className="w-4 h-4" /> Generated with AI
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your App Has Been Generated!
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Share this result with the world. The permanent link will always be accessible.
            </p>
          </div>

          {/* Preview Card */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-50 rounded-xl aspect-video flex items-center justify-center mb-6">
                <span className="text-6xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">Project Preview</h2>
              <p className="text-center text-gray-600 mb-6">
                This is a preview of the generated application
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" /> Download Code
                </Button>
                <Button variant="outline">
                  <GithubIcon className="w-4 h-4 mr-2" /> Export to GitHub
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Share Section */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-emerald-500" />
                Share Your Creation
              </h3>
              <p className="text-gray-600 mb-6">
                Let others see what you built and inspire them to create their own apps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={`https://sproutcraft.app/r/${id}`}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-600"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded">
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-3">Share on:</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Twitter/X
                  </Button>
                  <Button variant="outline" size="sm">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Reddit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Build Your Own App
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Create something amazing with SproutCraft's AI-powered builder
              </p>
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="text-emerald-600">
                  Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
