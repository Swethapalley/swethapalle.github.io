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
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 60 },
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and scalable code following best practices.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Analytical thinking and creative solutions to complex technical challenges.'
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
            B.Tech student passionate about frontend development 
            and creating modern web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-6 ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate B.Tech student in Electronics and Communication Engineering with a 
                strong interest in frontend web development. My journey started with curiosity about 
                how websites work and has evolved into a dedication to creating beautiful, functional web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently learning and building projects with React, JavaScript, and modern CSS frameworks. 
                I enjoy combining my technical background with creative problem-solving to bring ideas to life 
                through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a fresher graduating in 2026, I'm eager to contribute to meaningful projects and continue 
                growing as a developer while staying current with industry best practices.
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