
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillProgressProps {
  name: string;
  percentage: number;
  color?: string;
  className?: string;
  delay?: number;
}

const SkillProgress = ({
  name,
  percentage,
  color = "bg-primary",
  className,
  delay = 0,
}: SkillProgressProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setProgress(percentage);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [percentage, delay]);

  return (
    <div
      ref={ref}
      className={cn("mb-6", className)}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            color
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
