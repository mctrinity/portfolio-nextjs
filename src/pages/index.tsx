import React from 'react';
import Layout from '../components/Layout';
import ChatbotWidget from '../components/ChatbotWidget';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="text-xl">Full Stack Developer & Designer</p>
          </div>
        </section>
      </div>
      <ChatbotWidget />
    </Layout>
  );
};

export default Home;
