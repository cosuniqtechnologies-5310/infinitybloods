export default function Contact() {
  return (
    <div className="py-24 max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground">Have a question? We'd love to hear from you.</p>
      </div>
      
      <div className="p-8 rounded-3xl bg-card border border-border">
        <form className="space-y-6 flex flex-col">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="w-full h-12 px-4 rounded-lg bg-background border border-border outline-none focus:border-accent transition-colors" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="w-full h-12 px-4 rounded-lg bg-background border border-border outline-none focus:border-accent transition-colors" placeholder="you@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone</label>
            <input type="tel" className="w-full h-12 px-4 rounded-lg bg-background border border-border outline-none focus:border-accent transition-colors" placeholder="Your phone number" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Interest</label>
            <select className="w-full h-12 px-4 rounded-lg bg-background border border-border outline-none focus:border-accent transition-colors appearance-none">
              <option>Training</option>
              <option>Volunteer</option>
              <option>Mentor</option>
              <option>Project Partnership</option>
              <option>General Inquiry</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea rows={5} className="w-full p-4 rounded-lg bg-background border border-border outline-none focus:border-accent transition-colors resize-none" placeholder="How can we help?"></textarea>
          </div>
          
          <button type="button" className="h-14 px-8 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all w-full mt-4">
            Let's Build Something Meaningful
          </button>
        </form>
      </div>
    </div>
  );
}
