
import { cn } from "@/lib/utils";
import RevealText from "./reveal-text";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-12", alignClass[align], className)}>
      <RevealText direction="up" delay={100}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
          {title}
        </h2>
      </RevealText>
      
      {subtitle && (
        <RevealText direction="up" delay={300}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </RevealText>
      )}
      
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-1 w-10 bg-primary rounded-full" />
        <div className="h-1 w-20 bg-primary/60 rounded-full" />
      </div>
    </div>
  );
};

export default SectionHeading;
