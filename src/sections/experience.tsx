
import SectionHeading from "@/components/section-heading";
import TimelineItem from "@/components/timeline-item";

const Experience = () => {
  const experiences = [
    {
      year: "2023",
      title: "Senior Frontend Developer",
      subtitle: "Tech Innovation Inc.",
      description: "Led a team of developers in building complex web applications with React and Next.js. Implemented performance optimizations resulting in 40% faster load times.",
    },
    {
      year: "2022",
      title: "Shopify Developer",
      subtitle: "E-Commerce Solutions",
      description: "Developed custom Shopify themes and applications for high-traffic e-commerce stores. Worked with Liquid templating and Shopify API integration.",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      subtitle: "Digital Agency",
      description: "Created responsive websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and various frontend frameworks.",
    },
    {
      year: "2019",
      title: "Web Design Intern",
      subtitle: "Creative Studio",
      description: "Assisted in designing and developing websites for small businesses. Learned fundamentals of UI/UX design and frontend development.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and career highlights"
        />
        
        <div className="max-w-3xl mx-auto mt-16">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              year={exp.year}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
              isLast={index === experiences.length - 1}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
