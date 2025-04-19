
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealText from "./reveal-text";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveLink?: string;
  className?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  github,
  liveLink,
  className,
  delay = 0,
}: ProjectCardProps) => {
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <RevealText delay={delay} direction="up" className={cn("", className)} once>
      <div
        ref={cardRef}
        className="group glass-panel overflow-hidden"
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {github && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {liveLink && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </RevealText>
  );
};

export default ProjectCard;
