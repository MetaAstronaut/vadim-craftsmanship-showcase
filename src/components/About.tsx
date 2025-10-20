import { Award, Users, ThumbsUp, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Years of hands-on experience across multiple trades",
    },
    {
      icon: ThumbsUp,
      title: "Quality Guaranteed",
      description: "We stand behind every job with our satisfaction guarantee",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time, on-budget, and always professional",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your vision and satisfaction are our top priorities",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience You Can Trust</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The Vadim Group combines traditional craftsmanship with modern techniques to deliver
            exceptional results across all repair disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-[var(--shadow-sm)] group-hover:shadow-[var(--shadow-glow)]">
                <value.icon className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
