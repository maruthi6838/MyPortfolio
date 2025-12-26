import { useEffect, useState, useRef } from "react";
import { FolderGit2, Cpu, Calendar } from "lucide-react";

interface StatItem {
  icon: typeof FolderGit2;
  value: number;
  suffix: string;
  label: string;
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, models: 0, experience: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { icon: FolderGit2, value: 3, suffix: "+", label: "Freelancing Projects On Going" },
    { icon: Cpu, value: 1, suffix: "+", label: "AI Models Developing On Going" },
    { icon: Calendar, value: 2, suffix: "+", label: "Years of Experience In Corporate Real-Estate " },
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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = {
      projects: stats[0].value / steps,
      models: stats[1].value / steps,
      experience: stats[2].value / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        projects: Math.min(Math.floor(increment.projects * currentStep), stats[0].value),
        models: Math.min(Math.floor(increment.models * currentStep), stats[1].value),
        experience: Math.min(Math.floor(increment.experience * currentStep), stats[2].value),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="py-20 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-2xl p-8 text-center hover:shadow-glow-primary transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6 shadow-glow-primary">
                <stat.icon className="w-10 h-10 text-foreground" />
              </div>
              <div className="text-5xl font-heading font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {index === 0 ? counts.projects : index === 1 ? counts.models : counts.experience}
                {stat.suffix}
              </div>
              <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;