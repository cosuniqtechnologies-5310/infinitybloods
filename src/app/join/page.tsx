import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Lightbulb, Briefcase } from 'lucide-react';

export default function JoinUs() {
  const paths = [
    {
      title: 'Become a Learner',
      description: 'Learn modern technology and build real projects in a structured environment.',
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      cta: 'Start Learning'
    },
    {
      title: 'Become a Volunteer',
      description: 'Contribute your skills and gain practical experience through real projects.',
      icon: <Users className="w-8 h-8 text-accent" />,
      cta: 'Apply as Volunteer'
    },
    {
      title: 'Become a Mentor',
      description: 'Help guide the next generation of builders and share your industry expertise.',
      icon: <Briefcase className="w-8 h-8 text-accent" />,
      cta: 'Become a Mentor'
    },
    {
      title: 'Bring a Problem',
      description: 'Have a real problem that technology could solve? Submit your problem and collaborate.',
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      cta: 'Submit a Problem'
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Join the Community</h1>
        <p className="text-xl text-muted-foreground">Whether you want to learn, mentor, or build, there's a place for you here.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {paths.map((path, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-card border border-border hover:border-accent transition-all duration-300 flex flex-col items-start text-left">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              {path.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">{path.title}</h3>
            <p className="text-muted-foreground mb-8 text-lg">{path.description}</p>
            <button className="mt-auto inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors">
              {path.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
