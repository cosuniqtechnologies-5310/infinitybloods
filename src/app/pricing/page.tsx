'use client';

import Link from 'next/link';
import { Check, Sparkles, Zap, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Explorer',
      description: 'For people who want to explore technology.',
      price: 'Free',
      period: 'Forever',
      features: ['Community access', 'Introductory sessions', 'Events', 'Learning resources'],
      cta: 'Start Exploring',
      popular: false
    },
    {
      name: 'Builder',
      description: 'For people who want structured practical learning.',
      price: '₹15,000',
      period: 'One-time',
      features: ['Structured training', 'Mentor sessions', 'Practical assignments', 'Project experience', 'Community access'],
      cta: 'Become a Builder',
      popular: true
    },
    {
      name: 'Pro Builder',
      description: 'For serious learners who want deeper project experience.',
      price: '₹25,000',
      period: 'One-time',
      features: ['Advanced training', '1-on-1 Mentorship', 'Real-world projects', 'Team collaboration', 'Portfolio support', 'Product-building experience'],
      cta: 'Go Pro',
      popular: false
    }
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
          style={{ background: '#1f0000', color: '#db0000', border: '1px solid #3a0000' }}>
          <Zap className="w-3 h-3" /> Pricing
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight" style={{ color: '#fff1f1' }}>
          Invest in your ability to build.
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#a08080' }}>
          Transparent pricing for structured learning and project building. No fake discounts or hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, i) => (
          <div key={i} className={`p-8 rounded-3xl relative transition-all duration-300 hover:-translate-y-1`}
            style={{ 
              background: plan.popular ? '#140000' : '#0f0000', 
              border: plan.popular ? '1px solid #db0000' : '1px solid #2e0000',
              boxShadow: plan.popular ? '0 0 30px rgba(219,0,0,0.15)' : 'none'
            }}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5"
                style={{ background: '#db0000', color: '#ffffff', boxShadow: '0 0 20px rgba(219,0,0,0.4)' }}>
                <Star className="w-3 h-3 fill-current" /> Most Popular
              </div>
            )}
            <h3 className="text-2xl font-display font-bold mb-2" style={{ color: '#fff1f1' }}>{plan.name}</h3>
            <p className="text-sm mb-6 h-10 leading-relaxed" style={{ color: '#a08080' }}>{plan.description}</p>
            <div className="flex items-baseline gap-2 mb-8 border-b pb-8" style={{ borderColor: '#2e0000' }}>
              <span className="text-4xl font-display font-black" style={{ color: '#fff1f1' }}>{plan.price}</span>
              <span className="text-sm font-medium" style={{ color: '#6b3030' }}>/{plan.period}</span>
            </div>
            
            <ul className="space-y-4 mb-8 h-[240px]">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#1f0000', color: '#db0000' }}>
                    <Check className="w-3 h-3" />
                  </div>
                  <span style={{ color: '#fcd5d5' }}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-3.5 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-95`}
              style={plan.popular ? { background: '#db0000', color: '#fff1f1', boxShadow: '0 0 20px rgba(219,0,0,0.25)' } : { background: '#1f0000', color: '#db0000', border: '1px solid #3a0000' }}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto p-10 rounded-3xl text-center relative overflow-hidden shadow-2xl"
        style={{ background: '#db0000' }}>
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#750000]/50 to-transparent"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff1f1' }}>
            <Sparkles className="w-3 h-3" /> Volunteer Program
          </div>
          <h3 className="text-3xl font-display font-black mb-4 text-white">Join as a Contributor</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            For selected contributors who want to contribute their skills to real projects. Gain practical experience by helping teams build meaningful products.
          </p>
          <Link href="/join" className="inline-flex h-12 items-center justify-center rounded-full px-8 font-bold text-sm hover:-translate-y-1 transition-all"
            style={{ background: '#fff1f1', color: '#db0000', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            Apply as Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
}
