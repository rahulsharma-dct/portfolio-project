
import { useEffect } from "react";
import ParticlesBackground from "@/components/particles-background";
import CustomCursor from "@/components/ui/custom-cursor";
import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import Experience from "@/sections/experience";
import Contact from "@/sections/contact";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Rahul - Frontend & Shopify Developer";
  }, []);

  // Function to handle scroll animations
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.animate-in-view');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if element is in viewport
        if (rect.top <= windowHeight * 0.8) {
          element.classList.add('in-view');
        }
      });
    };

    // Initial check for elements in view
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* Particles background */}
      <ParticlesBackground count={80} />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
