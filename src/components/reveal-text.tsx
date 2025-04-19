
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  once?: boolean;
}

const RevealText = ({
  children,
  className,
  delay = 0,
  direction = "up",
  speed = 500,
  once = true,
}: RevealTextProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsRevealed(false);
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
  }, [delay, once]);

  const getTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-30px)";
      case "right":
        return "translateX(30px)";
      case "down":
        return "translateY(-30px)";
      case "up":
      default:
        return "translateY(30px)";
    }
  };

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      aria-hidden={!isRevealed}
    >
      <div
        style={{
          transform: isRevealed ? "translate(0)" : getTransform(),
          opacity: isRevealed ? 1 : 0,
          transition: `transform ${speed}ms cubic-bezier(0.215, 0.61, 0.355, 1), opacity ${speed}ms cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealText;
