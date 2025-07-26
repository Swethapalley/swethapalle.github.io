import { useEffect, useRef, useState } from 'react';
import { Download, FileText, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
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

  const downloadResume = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alex_Johnson_Resume.pdf';
    link.click();
  };

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead frontend development for enterprise web applications using React, TypeScript, and modern tools.',
    },
    {
      title: 'Frontend Developer',
      company: 'WebStart Agency',
      period: '2021 - 2022',
      description: 'Developed responsive websites and web applications for diverse clients using React and Vue.js.',
    },
    {
      title: 'Junior Developer',
      company: 'Digital Innovations',
      period: '2020 - 2021',
      description: 'Collaborated on various web projects, focusing on HTML, CSS, JavaScript, and basic React development.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      period: '2016 - 2020',
      description: 'Specialized in web development and software engineering with honors.',
    },
    {
      degree: 'Frontend Development Bootcamp',
      institution: 'Code Academy',
      period: '2020',
      description: 'Intensive program covering modern frontend technologies and best practices.',
    },
  ];

  return (
    <section id="resume" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-max">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey and educational background in frontend development.
          </p>
          <button 
            onClick={downloadResume}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download Full Resume
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className={`${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 text-accent rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-accent font-medium">{edu.institution}</span>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="bg-card border border-border rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Key Skills</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Frontend Technologies</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• React.js & TypeScript</li>
                  <li>• HTML5 & CSS3</li>
                  <li>• JavaScript (ES6+)</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Tools & Libraries</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Tailwind CSS & SCSS</li>
                  <li>• Git & GitHub</li>
                  <li>• Webpack & Vite</li>
                  <li>• React Router</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Other Skills</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• API Integration</li>
                  <li>• Testing (Jest, RTL)</li>
                  <li>• Performance Optimization</li>
                  <li>• Cross-browser Compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;