"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Mail, Lock, ArrowRight, Check } from "lucide-react";

export default function SignupPage() {
  const benefits = [
    "3 free app generations every day",
    "Basic templates included",
    "No credit card required",
    "Cancel anytime",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <Link href="/" className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">SproutCraft</span>
            </Link>
            <CardTitle className="text-2xl">Create your account</CardTitle>
            <CardDescription>Start building apps with AI today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" onClick={() => window.location.href = "/api/auth/signin/google"}>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or sign up with email</span>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input type="text" placeholder="John Doe" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input type="email" placeholder="you@example.com" className="pl-10" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input type="password" placeholder="••••••••" className="pl-10" />
                </div>
              </div>

              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
                Create Account <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>

            <p className="text-center text-xs text-gray-500">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="text-emerald-600 hover:text-emerald-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">
                Privacy Policy
              </Link>
            </p>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-white rounded-lg border">
          <p className="font-medium text-sm text-gray-900 mb-3">Start with Free forever:</p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-emerald-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
