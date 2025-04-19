
import { cn } from "@/lib/utils";
import RevealText from "./reveal-text";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  isLast?: boolean;
  className?: string;
  delay?: number;
}

const TimelineItem = ({
  year,
  title,
  subtitle,
  description,
  isLast = false,
  className,
  delay = 0,
}: TimelineItemProps) => {
  return (
    <div className={cn("relative pl-10 pb-10", isLast ? "" : "border-l border-muted", className)}>
      <RevealText delay={delay} direction="left">
        <div
          className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground transform -translate-x-1/2"
        >
          <span className="text-xs font-bold">{year}</span>
        </div>
      </RevealText>
      
      <RevealText delay={delay + 100} direction="right">
        <div className="ml-4">
          <h3 className="text-xl font-bold">{title}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
          )}
          <p className="text-muted-foreground">{description}</p>
        </div>
      </RevealText>
    </div>
  );
};

export default TimelineItem;
