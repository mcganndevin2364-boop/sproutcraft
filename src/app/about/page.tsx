import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former Google engineer with 10+ years building developer tools. Passionate about making technology accessible to everyone.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-founder",
      bio: "AI/ML researcher from Stanford. Built ML systems at scale for Fortune 500 companies.",
      avatar: "MJ",
    },
    {
      name: "Emma Davis",
      role: "Head of Product",
      bio: "Product leader with experience at Figma and Notion. Obsessed with user experience.",
      avatar: "ED",
    },
    {
      name: "Alex Kim",
      role: "Lead Engineer",
      bio: "Full-stack wizard who's shipped products used by millions. Open source contributor.",
      avatar: "AK",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI-assisted development.",
    },
    {
      icon: Users,
      title: "User Obsessed",
      description: "Every decision we make starts with understanding our users' needs.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We measure success by the apps our users build, not vanity metrics.",
    },
    {
      icon: Heart,
      title: "Community Led",
      description: "We grow through feedback, contributions, and support from our community.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Building the Future of App Development
            </h1>
            <p className="text-xl text-gray-600">
              SproutCraft is on a mission to make software development accessible to everyone. 
              We believe anyone with an idea should be able to build it—no coding required.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SproutCraft started with a simple frustration: why is building software still so hard?
                </p>
                <p>
                  In 2024, our founders—former engineers from Google, Stanford, and top YC companies—watched 
                  friends and family struggle to turn their ideas into real products. They had the vision, 
                  the business acumen, even the designs. But they couldn't build.
                </p>
                <p>
                  Existing no-code tools felt limiting. They created apps that were stuck on proprietary 
                  platforms, couldn't scale, and couldn't be exported. Meanwhile, hiring developers was 
                  expensive and time-consuming.
                </p>
                <p>
                  We knew there had to be a better way. So we built SproutCraft—a tool that combines the 
                  simplicity of no-code with the power of AI to generate real, production-ready code.
                </p>
                <p>
                  Today, SproutCraft powers over 50,000 applications and has helped entrepreneurs, small 
                  businesses, and enterprises ship products faster than ever before.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-8xl">🌱</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Believe</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {member.avatar}
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-emerald-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're building your first app or your hundredth, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="text-emerald-600">
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
