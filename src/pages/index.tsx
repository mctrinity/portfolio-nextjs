import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ChatbotWidget from '../components/ChatbotWidget';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon,
  CpuChipIcon,
  CircleStackIcon,
  PaintBrushIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: CodeBracketIcon, description: 'React, Next.js, TypeScript' },
    { name: 'Mobile Development', icon: DevicePhoneMobileIcon, description: 'React Native, Flutter' },
    { name: 'Cloud Services', icon: CloudIcon, description: 'AWS, Azure, Google Cloud' },
    { name: 'Backend Development', icon: CpuChipIcon, description: 'Node.js, Python, Java' },
    { name: 'Database Management', icon: CircleStackIcon, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'UI/UX Design', icon: PaintBrushIcon, description: 'Figma, Adobe Creative Suite' },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      image: '/api/placeholder/400/250',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero 
        name="John Doe"
        title="Full Stack Developer"
        description="I create modern, responsive web applications using cutting-edge technologies. Passionate about clean code, user experience, and bringing ideas to life."
        imageUrl="/api/placeholder/400/500"
        imageAlt="John Doe - Full Stack Developer"
      />

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I specialize in modern web technologies and have experience across the full development stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 hover:text-gray-800 font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              View All Projects
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get In Touch
            </Link>
            <Link
              href="/about"
              className="btn-secondary"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      <ChatbotWidget />
    </Layout>
  );
};

export default Home;
