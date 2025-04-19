
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import RevealText from "@/components/reveal-text";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Parallax elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={textContainerRef}
        className="container-custom relative z-10 px-4 md:px-6 py-10 md:py-16"
      >
        <div className="flex flex-col items-center text-center">
          <RevealText>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              Hi, I'm <span className="text-primary font-semibold">Rahul</span>
            </p>
          </RevealText>

          <RevealText delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Frontend & <span className="text-gradient">Shopify</span> Developer
            </h1>
          </RevealText>

          <RevealText delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Building modern, fast, and responsive web experiences with cutting-edge technologies
            </p>
          </RevealText>

          <RevealText delay={300}>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </RevealText>

          <RevealText delay={400}>
            <div className="flex gap-4 mb-16">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="mailto:email@example.com" aria-label="Email Me">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </RevealText>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground animate-pulse-light cursor-pointer"
        aria-label="Scroll down"
      >
        <span>Scroll Down</span>
        <ChevronDown className="h-5 w-5" />
      </button>
    </section>
  );
};

export default Hero;
