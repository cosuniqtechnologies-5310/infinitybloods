import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Explorer',
      description: 'For people who want to explore technology.',
      price: 'Free',
      features: ['Community access', 'Introductory sessions', 'Events', 'Learning resources'],
      cta: 'Start Exploring',
      popular: false
    },
    {
      name: 'Builder',
      description: 'For people who want structured practical learning.',
      price: '$49/mo',
      features: ['Structured training', 'Mentor sessions', 'Practical assignments', 'Project experience', 'Community access'],
      cta: 'Become a Builder',
      popular: true
    },
    {
      name: 'Pro Builder',
      description: 'For serious learners who want deeper project experience.',
      price: '$99/mo',
      features: ['Advanced training', 'Mentorship', 'Real-world projects', 'Team collaboration', 'Portfolio support', 'Product-building experience'],
      cta: 'Go Pro',
      popular: false
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Invest in your ability to build.</h1>
        <p className="text-xl text-muted-foreground">Transparent pricing for structured learning and project building. No fake discounts or hidden fees.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, i) => (
          <div key={i} className={`p-8 rounded-3xl border ${plan.popular ? 'border-accent bg-accent/5' : 'border-border bg-card'} relative`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
            <p className="text-muted-foreground text-sm mb-6 h-10">{plan.description}</p>
            <div className="text-4xl font-display font-bold mb-8">{plan.price}</div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-accent text-white hover:bg-accent-hover' : 'bg-muted text-foreground hover:bg-muted/80'}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent blur-2xl"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-display font-bold mb-4">Volunteer Program</h3>
          <p className="text-background/80 mb-6">
            For selected contributors who want to contribute their skills to real projects. Gain practical experience by helping teams build meaningful products.
          </p>
          <Link href="/join" className="inline-flex h-12 items-center justify-center rounded-full bg-accent text-white px-8 font-medium hover:bg-accent-hover transition-colors">
            Apply as Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
}
