
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import RevealText from "@/components/reveal-text";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "New York, USA",
      link: "https://maps.google.com/?q=New+York",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Contact Me"
          subtitle="Get in touch for collaborations or just to say hello"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <RevealText direction="left" delay={100}>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
            </RevealText>
            
            <RevealText direction="left" delay={200}>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or through any of my contact information.
              </p>
            </RevealText>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <RevealText key={item.label} direction="left" delay={300 + index * 100}>
                  <a 
                    href={item.link} 
                    className="flex items-center gap-4 group"
                    target={item.label === "Location" ? "_blank" : undefined}
                    rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-muted-foreground">{item.label}</h4>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </RevealText>
              ))}
            </div>
            
            <RevealText direction="left" delay={600}>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </RevealText>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
