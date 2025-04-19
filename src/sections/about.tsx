
import { useRef } from "react";
import SectionHeading from "@/components/section-heading";
import SkillProgress from "@/components/skill-progress";
import RevealText from "@/components/reveal-text";
import { cn } from "@/lib/utils";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "HTML", percentage: 95, color: "bg-orange-500" },
    { name: "CSS", percentage: 90, color: "bg-blue-500" },
    { name: "JavaScript", percentage: 88, color: "bg-yellow-500" },
    { name: "React", percentage: 85, color: "bg-cyan-500" },
    { name: "Shopify", percentage: 92, color: "bg-green-500" },
    { name: "Tailwind", percentage: 90, color: "bg-teal-500" },
    { name: "SASS", percentage: 80, color: "bg-pink-500" },
    { name: "Liquid", percentage: 85, color: "bg-indigo-500" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="My journey, skills, and expertise in web development"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <RevealText direction="left" delay={100}>
              <p className="mb-4 text-muted-foreground">
                Hi there! I'm a passionate Frontend and Shopify Developer with several years of experience crafting beautiful, responsive, and user-friendly websites.
              </p>
            </RevealText>
            
            <RevealText direction="left" delay={200}>
              <p className="mb-4 text-muted-foreground">
                I specialize in building modern web applications using React, Next.js, and Shopify's Liquid templating language. My aim is to create fast, accessible, and visually appealing interfaces that provide exceptional user experiences.
              </p>
            </RevealText>
            
            <RevealText direction="left" delay={300}>
              <p className="mb-6 text-muted-foreground">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge through articles and tutorials.
              </p>
            </RevealText>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={400 + index * 100}
                />
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <RevealText direction="right" delay={400}>
              <div className="relative">
                <div className="glass-panel p-2 rounded-xl relative z-10">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt="Rahul - Frontend & Shopify Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 w-32 h-32 bg-primary/20 rounded-full blur-xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-xl -z-10" />
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
