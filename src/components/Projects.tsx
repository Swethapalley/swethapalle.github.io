import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and TypeScript. Features include product browsing, cart management, user authentication, and payment integration.',
      image: project1Image,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Context API'],
      liveDemo: 'https://demo-ecommerce.netlify.app',
      githubRepo: 'https://github.com/alexjohnson/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, track progress, and communicate with team members.',
      image: project2Image,
      technologies: ['React', 'JavaScript', 'Firebase', 'Material-UI', 'React Router'],
      liveDemo: 'https://taskmaster-app.netlify.app',
      githubRepo: 'https://github.com/alexjohnson/task-manager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current conditions, 5-day forecasts, and interactive maps. Features location detection and favorite cities.',
      image: project3Image,
      technologies: ['React', 'JavaScript', 'OpenWeather API', 'CSS3', 'Chart.js'],
      liveDemo: 'https://weather-dashboard-react.netlify.app',
      githubRepo: 'https://github.com/alexjohnson/weather-dashboard'
    }
  ];

  return (
    <section id="projects" className="section-padding" ref={sectionRef}>
      <div className="container-max">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in 
            frontend development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com/alexjohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;