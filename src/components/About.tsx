import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and scalable code following best practices.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful interfaces with focus on user experience and accessibility.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Building applications that work perfectly on all devices and screen sizes.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for fast loading times and smooth interactions.'
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-max">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate frontend developer with 3+ years of experience creating 
            modern web applications using cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-6 ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated Frontend Web Developer who loves crafting exceptional digital experiences. 
                My journey in web development started with curiosity about how websites work, and it has 
                evolved into a passion for creating intuitive, performant applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React ecosystem and modern JavaScript, with a keen eye for design 
                and user experience. I believe in writing clean, maintainable code and staying 
                up-to-date with the latest industry trends and best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={`${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;