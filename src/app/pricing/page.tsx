import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, X, Sparkles, Zap } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for trying out SproutCraft",
      features: [
        { text: "3 app generations per day", included: true },
        { text: "Basic templates", included: true },
        { text: "Community support", included: true },
        { text: "7-day project history", included: true },
        { text: "Standard processing speed", included: true },
        { text: "Export code", included: false },
        { text: "Custom domains", included: false },
        { text: "Priority support", included: false },
        { text: "API access", included: false },
      ],
      cta: "Get Started Free",
      href: "/signup",
    },
    {
      name: "Starter",
      price: 19,
      description: "For indie developers and small projects",
      popular: true,
      features: [
        { text: "25 app generations per day", included: true },
        { text: "All templates", included: true },
        { text: "Priority support", included: true },
        { text: "90-day project history", included: true },
        { text: "2x faster processing", included: true },
        { text: "Export to GitHub", included: true },
        { text: "Custom domains", included: true },
        { text: "API access", included: false },
        { text: "Team collaboration", included: false },
      ],
      cta: "Start Free Trial",
      href: "/signup?plan=starter",
    },
    {
      name: "Pro",
      price: 49,
      description: "For growing startups and teams",
      features: [
        { text: "Unlimited app generations", included: true },
        { text: "Premium templates", included: true },
        { text: "Priority support", included: true },
        { text: "1-year project history", included: true },
        { text: "4x faster processing", included: true },
        { text: "Export to GitHub", included: true },
        { text: "Custom domains", included: true },
        { text: "API access", included: true },
        { text: "Team collaboration", included: true },
      ],
      cta: "Start Free Trial",
      href: "/signup?plan=pro",
    },
    {
      name: "Business",
      price: 149,
      description: "For enterprises with advanced needs",
      features: [
        { text: "Unlimited everything", included: true },
        { text: "Premium templates", included: true },
        { text: "Dedicated support", included: true },
        { text: "Unlimited project history", included: true },
        { text: "8x faster processing", included: true },
        { text: "Export to GitHub", included: true },
        { text: "Custom domains", included: true },
        { text: "API access", included: true },
        { text: "SSO/SAML & Audit logs", included: true },
      ],
      cta: "Contact Sales",
      href: "/contact",
    },
  ];

  const faqs = [
    {
      question: "What's included in the free tier?",
      answer: "The free tier gives you 3 app generations per day, access to basic templates, community support, and 7-day project history. It's perfect for trying out SproutCraft and building small projects.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period. Your data is preserved for 30 days after cancellation.",
    },
    {
      question: "What happens to my code if I cancel?",
      answer: "You retain full ownership of all code you generate with SproutCraft. You can export all your projects before canceling, and we provide downloadable ZIP files of your code.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact us within 14 days of your purchase for a full refund.",
    },
    {
      question: "What's the difference between generations and AI calls?",
      answer: "A generation creates a complete application from your description. AI calls are individual API operations within generated apps, like database queries or payment processing.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing period.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! Annual billing saves you 20% compared to monthly. You can switch to annual billing anytime from your account settings.",
    },
    {
      question: "Is there a limit on project size?",
      answer: "No, there's no limit on project complexity or size. You can build anything from simple landing pages to complex SaaS applications with unlimited features.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
          
          <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border shadow-sm">
            <span className="text-sm text-gray-600">Monthly</span>
            <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
            </div>
            <span className="text-sm text-gray-600">Annual (Save 20%)</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? "border-emerald-500 ring-2 ring-emerald-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-medium">
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.price > 0 && (
                      <span className="text-gray-500">/month</span>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-gray-600" : "text-gray-400"}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={plan.href} className="w-full">
                    <Button
                      className={`w-full ${plan.popular ? "bg-emerald-500 hover:bg-emerald-600" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Compare All Features
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 font-semibold bg-emerald-50">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">Business</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Daily generations", "3", "25", "Unlimited", "Unlimited"],
                  ["Project history", "7 days", "90 days", "1 year", "Unlimited"],
                  ["Processing speed", "1x", "2x", "4x", "8x"],
                  ["Templates", "Basic", "All", "Premium", "Premium"],
                  ["GitHub export", "—", "✓", "✓", "✓"],
                  ["Custom domains", "—", "✓", "✓", "✓"],
                  ["API access", "—", "—", "✓", "✓"],
                  ["Team members", "—", "—", "Soon", "✓"],
                  ["SSO/SAML", "—", "—", "—", "✓"],
                  ["Dedicated support", "—", "—", "—", "✓"],
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-4 text-sm text-gray-600">{row[0]}</td>
                    <td className="py-4 px-4 text-center text-sm">{row[1]}</td>
                    <td className="py-4 px-4 text-center text-sm bg-emerald-50">{row[2]}</td>
                    <td className="py-4 px-4 text-center text-sm">{row[3]}</td>
                    <td className="py-4 px-4 text-center text-sm">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-6">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-12 h-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Building Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            No credit card required. 14-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="text-emerald-600">
                Get Started Free
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
