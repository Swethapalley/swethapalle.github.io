import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/alexjohnson',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/palley-swetha-b758561b5',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      href: 'mailto:alex.johnson@email.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Alex Johnson</h3>
              <p className="text-muted-foreground">
                Frontend Web Developer crafting beautiful digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  About
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Projects
                </a>
                <a href="#resume" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Resume
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-foreground/5 hover:bg-primary/10 text-foreground hover:text-primary rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;