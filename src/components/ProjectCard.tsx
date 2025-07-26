import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  githubRepo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div 
      className="project-card group"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-3 inline-flex items-center gap-1"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors duration-300 inline-flex items-center gap-1"
            >
              <Github size={16} />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links for Desktop */}
        <div className="flex gap-3 pt-2 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors duration-300 inline-flex items-center gap-1 text-sm font-medium"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 text-sm font-medium"
          >
            <Github size={16} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;