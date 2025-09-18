# Portfolio Next.js

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, projects, blog posts, and provides an interactive contact form.

🌐 **Live Demo**: [https://github.com/mctrinity/portfolio-nextjs](https://github.com/mctrinity/portfolio-nextjs)

## ✨ Features

- **🏠 Homepage**: Hero section with skills showcase and featured projects
- **👨‍💻 About Page**: Professional experience timeline and personal information  
- **💼 Projects Section**: Interactive project showcase with filtering and detailed descriptions
- **📝 Blog Section**: Featured and recent blog posts with clean typography
- **📞 Contact Page**: Form validation using React Hook Form with real-time feedback
- **🤖 Chatbot Widget**: Interactive chat widget available across all pages
- **📱 Responsive Design**: Mobile-first approach with smooth animations
- **⚡ Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **🎨 Modern UI**: Clean design with Heroicons and Tailwind CSS utilities

## 🚀 Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mctrinity/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the portfolio.

## 🛠️ Technologies Used

- **Framework**: Next.js 15.5.3 with TypeScript
- **Styling**: Tailwind CSS 3.4.0 with PostCSS
- **Icons**: Heroicons React
- **Forms**: React Hook Form with validation
- **Development**: ESLint for code quality
- **Version Control**: Git with GitHub

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── components/
│   │   ├── Layout.tsx          # Main layout with navigation
│   │   └── ChatbotWidget.tsx   # Interactive chatbot
│   ├── pages/
│   │   ├── index.tsx           # Homepage
│   │   ├── about.tsx           # About page
│   │   ├── projects.tsx        # Projects showcase
│   │   ├── blog.tsx            # Blog posts
│   │   ├── contact.tsx         # Contact form
│   │   └── _app.tsx            # App configuration
│   └── styles/
│       └── globals.css         # Global styles with Tailwind
├── public/
│   └── favicon.ico
└── Configuration files (Next.js, Tailwind, TypeScript, etc.)
```

## 🎨 Key Components

- **Responsive Navigation**: Mobile-friendly menu with smooth transitions
- **Hero Section**: Gradient backgrounds with call-to-action buttons
- **Skills Grid**: Interactive skill badges with hover effects
- **Project Cards**: Detailed project information with external links
- **Form Validation**: Real-time validation with error handling
- **Typography**: Consistent heading hierarchy and readable text

## 📱 Mobile Responsive

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+) 
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🚀 Deployment

This project can be easily deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

For Vercel deployment:
```bash
npm install -g vercel
vercel --prod
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.