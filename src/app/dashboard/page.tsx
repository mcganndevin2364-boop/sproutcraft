"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Plus, Clock, Code, Rocket, Settings, CreditCard, LogOut } from "lucide-react";

export default function DashboardPage() {
  const recentProjects = [
    { id: 1, name: "SaaS Dashboard", type: "Dashboard", updated: "2 hours ago" },
    { id: 2, name: "E-commerce Store", type: "E-commerce", updated: "Yesterday" },
    { id: 3, name: "Landing Page", type: "Landing", updated: "3 days ago" },
  ];

  const stats = [
    { label: "Apps Built", value: "12", icon: Code },
    { label: "Generations Today", value: "2/3", icon: Sparkles },
    { label: "Days Active", value: "14", icon: Clock },
  ];

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
          <div className="flex items-center gap-4">
            <Link href="/builder">
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                <Plus className="w-4 h-4 mr-2" /> New App
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-600">Here's what you've been working on</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Projects</CardTitle>
                <Link href="/projects">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                          <Code className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium">{project.name}</p>
                          <p className="text-sm text-gray-500">{project.type} • {project.updated}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/builder" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Rocket className="w-4 h-4 mr-2" /> Build New App
                  </Button>
                </Link>
                <Link href="/pricing" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="w-4 h-4 mr-2" /> Upgrade Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-lg">
                <h3 className="font-bold mb-2">Upgrade to Pro</h3>
                <p className="text-sm opacity-90 mb-4">Unlimited generations and priority support</p>
                <Link href="/pricing">
                  <Button size="sm" variant="secondary" className="text-emerald-600">
                    View Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
