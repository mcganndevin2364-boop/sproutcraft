"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sprout } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">SproutCraft</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/vs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Compare
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                Get Started Free
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">
          <Link href="/features" className="block text-sm font-medium text-gray-600">
            Features
          </Link>
          <Link href="/pricing" className="block text-sm font-medium text-gray-600">
            Pricing
          </Link>
          <Link href="/blog" className="block text-sm font-medium text-gray-600">
            Blog
          </Link>
          <Link href="/vs" className="block text-sm font-medium text-gray-600">
            Compare
          </Link>
          <div className="pt-4 border-t space-y-2">
            <Link href="/login">
              <Button variant="outline" className="w-full">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
