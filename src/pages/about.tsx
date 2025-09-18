import React from 'react';
import Layout from '../components/Layout';
import ChatbotWidget from '../components/ChatbotWidget';
import { UserIcon, CodeBracketIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and improved user experience for various client projects.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Worked on mobile app development using React Native and contributed to backend API development.'
    }
  ];

  const skills = [
    { category: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL'] },
    { category: 'Tools', technologies: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma'] },
    { category: 'Mobile', technologies: ['React Native', 'Flutter', 'iOS', 'Android'] }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Me
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that make a difference. I love turning complex problems into 
                  simple, beautiful, and intuitive designs.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or enjoying outdoor activities like hiking and photography.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600">
                    <UserIcon className="h-5 w-5 mr-2" />
                    <span>Based in San Francisco, CA</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <AcademicCapIcon className="h-5 w-5 mr-2" />
                    <span>Computer Science Graduate</span>
                  </div>
                </div>
              </div>
              <div className="lg:text-center">
                <img 
                  src="/api/placeholder/400/500" 
                  alt="Profile" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My journey in software development and the companies I've worked with
              </p>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CodeBracketIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="text-gray-600">{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
      <ChatbotWidget />
    </Layout>
  );
};

export default About;
