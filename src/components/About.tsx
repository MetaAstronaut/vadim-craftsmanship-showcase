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
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Experience You Can Trust</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Vadim Group combines traditional craftsmanship with modern techniques to deliver
            exceptional results across all repair disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <value.icon className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-medium mb-4">{value.title}</h3>
              <p className="text-base text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
