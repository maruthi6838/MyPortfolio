import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Expertise",
      description: "Proficient in building end-to-end web solutions with modern frameworks"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Integrating Machine Learning models with modern frontend frameworks"
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Passionate about creating smart, scalable, and efficient solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-card-border rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-glow-primary transition-all duration-300 animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Highly motivated AI & Full Stack Developer with experience in building smart, scalable web solutions. 
              Passionate about integrating Machine Learning models with modern frontend frameworks to create 
              intelligent applications that solve real-world problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-muted hover:bg-card transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }} >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 shadow-glow-primary">
                    <item.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
