import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectIsland from "@/assets/project-island.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectRealEstate from "@/assets/project-realestate.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Island Detection using Transformer Neural Networks",
      description: "Advanced AI model using transformer architecture for accurate island detection in satellite imagery",
      image: projectIsland,
      tech: ["Python", "TensorFlow", "Transformers"],
      link: "#",
    },
    {
      title: "AI Style – Fashion Outfit Recommender",
      description: "Intelligent fashion recommendation system powered by machine learning algorithms",
      image: projectFashion,
      tech: ["React", "Python", "ML", "Flask"],
      link: "#",
    },
    {
      title: "Real Estate Website with SQL Backend",
      description: "Full-stack real estate platform with robust SQL database and modern frontend",
      image: projectRealEstate,
      tech: ["React", "SQL", "Node.js", "Express"],
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-background-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-card-border rounded-2xl overflow-hidden hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-gradient-primary group-hover:text-foreground">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
