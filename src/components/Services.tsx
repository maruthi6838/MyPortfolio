import { Code, Brain, Database, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building responsive, scalable web applications using modern frameworks like React, Flask, and Node.js",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Developing and deploying intelligent ML models for real-world applications using Python and TensorFlow",
      gradient: "bg-gradient-accent",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Creating efficient database architectures with SQL and NoSQL technologies for optimal performance",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Sparkles,
      title: "UI/UX Innovation",
      description: "Crafting beautiful, intuitive user interfaces with attention to detail and user experience",
      gradient: "bg-gradient-accent",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-card-border rounded-2xl p-8 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.gradient} mb-6 shadow-glow-primary group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
