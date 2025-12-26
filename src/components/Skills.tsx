import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "ai";
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: "Python", level: 90, category: "ai" },
    { name: "React.js", level: 85, category: "frontend" },
    { name: "Flask", level: 50, category: "backend" },
    { name: "Machine Learning", level: 35, category: "ai" },
    { name: "SQL", level: 85, category: "backend" },
    { name: "HTML & CSS", level: 90, category: "frontend" },
    { name: "Git", level: 80, category: "backend" },
    { name: "JavaScript", level: 75, category: "frontend" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-background-secondary" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-heading font-semibold text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      skill.category === "ai"
                        ? "bg-gradient-accent"
                        : skill.category === "frontend"
                        ? "bg-gradient-primary"
                        : "bg-success"
                    } ${isVisible ? "shadow-glow-primary" : ""}`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                    }} 
                    >
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
