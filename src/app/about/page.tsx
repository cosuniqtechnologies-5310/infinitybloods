export default function About() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">We believe technology should be built, not just taught.</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We don't want to create more people who know how to follow tutorials.<br/>
          We want to create people who know how to build.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-display font-bold mb-6">The Problem With Traditional Learning</h2>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground">
            <p>
              Millions of people watch coding tutorials every day. They get certificates. They pass quizzes. 
              But when they are asked to build a real product, they freeze. Why? Because you can't learn how to ride a bike by watching a video about it. 
              You have to get on the bike, fall down, and try again.
            </p>
            <p className="mt-4">
              Traditional education isolates learning from building. We believe that's fundamentally broken.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Our Philosophy</h2>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground">
            <p>
              We've created an environment where people can learn technology by actually using it. 
              Every concept is tied to a real-world application. Every project is designed to solve a meaningful problem.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-6">How We Work</h2>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground">
            <p>
              Our platform connects learners, volunteers, mentors, designers, developers, and project owners. 
              Together, we form agile teams that operate exactly like modern tech startups. We take ideas from concept to deployment, 
              learning every step of the way.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
