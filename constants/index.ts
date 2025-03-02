export const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  ]

  export const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
      image: '/public/ecomm.svg',
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard",
        "Order management"
      ]
    },
    {
      title: "AI-Powered Task Manager",
      description: "Smart task management application that uses AI to prioritize and categorize tasks, with team collaboration features.",
      image: '/public/task.svg',
      technologies: ["React", "Node.js", "OpenAI", "MongoDB", "WebSocket"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/johndoe/taskmanager",
      features: [
        "AI task prioritization",
        "Real-time collaboration",
        "Custom workflows",
        "Analytics dashboard"
      ]
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform providing insights and engagement metrics across multiple platforms.",
      image: '/public/analyt.svg',
      technologies: ["Vue.js", "Python", "D3.js", "AWS", "Redis"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/johndoe/analytics",
      features: [
        "Cross-platform analytics",
        "Custom report generation",
        "Engagement tracking",
        "Trend analysis"
      ]
    }
  ];