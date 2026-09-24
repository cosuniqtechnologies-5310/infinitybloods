export default function FAQ() {
  const faqs = [
    "Who can join?",
    "Do I need previous coding experience?",
    "Is the training online or offline?",
    "How long is each program?",
    "Are projects real?",
    "How does volunteering work?",
    "Is there a certificate?",
    "Do I get mentorship?",
    "Can beginners join?",
    "What technologies are taught?",
    "Is there a placement guarantee?",
    "How are volunteers selected?",
    "Can I join as a designer?",
    "Can I contribute to existing projects?"
  ];

  return (
    <div className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Frequently Asked Questions</h1>
      </div>
      <div className="space-y-4">
        {faqs.map((q, i) => (
          <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg">{q}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
