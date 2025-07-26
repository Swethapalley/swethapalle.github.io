import { useEffect, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';
import profileImage from '../assets/profile-image.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You can replace this with actual resume path
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`space-y-6 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
              <div className="space-y-2">
                <p className="text-primary font-medium text-lg">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Alex Johnson
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  Frontend Web Developer
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                I create beautiful, responsive web applications using modern technologies. 
                Passionate about clean code, user experience, and bringing ideas to life through React.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={downloadResume}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
                <button 
                  onClick={scrollToProjects}
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Projects
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className={`flex justify-center lg:justify-end ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                  <img
                    src={profileImage}
                    alt="Alex Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;