"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Users, Clock, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      detail: "support@sproutcraft.app",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team",
      detail: "Available 9am-5pm PST",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join our Discord",
      detail: "5,000+ members",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We reply within",
      detail: "24 hours",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-gray-600">
                        Thanks for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <Input placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input type="email" placeholder="you@example.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <Input placeholder="How can we help?" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          className="w-full h-40 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                          placeholder="Tell us more about what you're working on..."
                        />
                      </div>
                      <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactOptions.map((option, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{option.title}</h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                        <p className="text-sm text-emerald-600 font-medium mt-1">{option.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I get started with SproutCraft?",
                a: "Sign up for free at sproutcraft.app, describe the app you want to build, and our AI will generate it for you. No credit card required.",
              },
              {
                q: "Can I export the code I generate?",
                a: "Yes! You own 100% of the code you generate with SproutCraft. Export anytime with no restrictions or vendor lock-in.",
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 14-day money-back guarantee for all paid plans. Contact us within 14 days of your purchase for a full refund.",
              },
              {
                q: "How do I contact sales for enterprise plans?",
                a: "Fill out the form above with your requirements, or email sales@sproutcraft.app. We typically respond within a few hours.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b pb-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
