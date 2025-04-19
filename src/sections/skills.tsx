
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import RevealText from "@/components/reveal-text";
import { 
  Code2, 
  PaintBucket, 
  ShoppingBag, 
  Layers, 
  Lightbulb, 
  LayoutGrid
} from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const SkillCard = ({ title, description, icon, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    setPosition({ x, y });
  };

  return (
    <RevealText delay={100 * index} direction="up">
      <div
        ref={cardRef}
        className="glass-panel p-6 rounded-xl relative overflow-hidden group transition-all duration-300 h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight effect */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none opacity-70"
            style={{
              background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 60%)`,
              zIndex: -1,
            }}
          />
        )}
        
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </RevealText>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks like React.",
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user experiences with a focus on usability.",
      icon: <PaintBucket className="h-6 w-6" />,
    },
    {
      title: "Shopify Development",
      description: "Building custom Shopify themes and apps to enhance e-commerce experiences.",
      icon: <ShoppingBag className="h-6 w-6" />,
    },
    {
      title: "Full Stack Skills",
      description: "Working with both frontend and backend technologies to create complete solutions.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Performance Optimization",
      description: "Enhancing website speed and efficiency for better user experience and SEO.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Responsive Design",
      description: "Creating websites that work flawlessly across all devices and screen sizes.",
      icon: <LayoutGrid className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and expertise I bring to the table"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
