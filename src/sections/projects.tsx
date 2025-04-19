
import { useState } from "react";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import RevealText from "@/components/reveal-text";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store built with Shopify, custom theme development, and advanced product filtering.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      tags: ["Shopify", "Liquid", "JavaScript", "SCSS"],
      github: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "A modern, animated portfolio website with GSAP animations, 3D elements, and responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "GSAP", "Tailwind CSS", "Three.js"],
      github: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "SaaS Dashboard",
      description: "A comprehensive dashboard for a SaaS application with data visualization, user management, and real-time updates.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "Next.js", "Tailwind CSS", "API Integration"],
      github: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile application built with React Native for both iOS and Android platforms.",
      image: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      tags: ["React Native", "Expo", "Firebase", "Redux"],
      github: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform with rich text editing, categories, comments, and user profiles.",
      image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1739&q=80",
      tags: ["Next.js", "Headless CMS", "Tailwind CSS", "API"],
      github: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Weather App",
      description: "A weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["JavaScript", "API Integration", "CSS", "HTML"],
      github: "https://github.com",
      liveLink: "https://example.com",
    },
  ];

  const handleLoadMore = () => {
    setVisibleProjects(prevCount => Math.min(prevCount + 3, projects.length));
  };

  const handleShowLess = () => {
    setVisibleProjects(3);
    // Scroll back to projects section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="My Projects"
          subtitle="A selection of my recent work and personal projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              liveLink={project.liveLink}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <RevealText delay={600}>
            {visibleProjects < projects.length ? (
              <Button onClick={handleLoadMore} variant="outline" size="lg">
                Load More Projects
              </Button>
            ) : (
              <Button onClick={handleShowLess} variant="outline" size="lg">
                Show Less
              </Button>
            )}
          </RevealText>
        </div>
      </div>
    </section>
  );
};

export default Projects;
