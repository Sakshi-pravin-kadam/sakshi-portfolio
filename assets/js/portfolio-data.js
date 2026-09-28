/**
 * Sakshi Kadam - Developer Portfolio Data
 * Centralized data configuration for easy editing and maintenance.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Sakshi Kadam",
    title: "Python Full Stack Developer",
    positioning: "Python Full Stack Developer | Exploring Data Science & AI",
    bio: "I am an MCA student and Python Full Stack Developer who enjoys building practical web applications and am currently expanding my skills in Data Science and AI.",
    location: "Pune, Maharashtra, India",
    email: "sakshikadam233114@gmail.com",
    phone: "+91 84219 41464",
    whatsappNumber: "918421941464",
    whatsappUrl: "https://wa.me/918421941464",
    githubUsername: "Sakshi-pravin-kadam",
    githubUrl: "https://github.com/Sakshi-pravin-kadam",
    linkedinUsername: "sakshi-kadam04",
    linkedinUrl: "https://www.linkedin.com/in/sakshi-kadam04",
    resumePath: "assets/Sakshi_Kadam_Resume.pdf",
    availability: "Open to Internships, Roles & Collaborations"
  },

  skills: {
    programming: [
      { name: "Python", isPrimary: true, note: "Primary Language • Backend & Data" },
      { name: "Java", isPrimary: false, note: "OOP & Spring Boot Architecture" }
    ],
    frontend: [
      { name: "HTML", note: "Semantic Structure & Accessibility" },
      { name: "CSS", note: "Responsive Layouts, Flexbox & Grid" },
      { name: "JavaScript", note: "ES6+ DOM & Client Interactions" }
    ],
    frameworksBackend: [
      { name: "Django", note: "Full-Featured Web Apps & ORM" },
      { name: "FastAPI", note: "High-Performance REST APIs" },
      { name: "REST APIs", note: "API Architecture, Endpoints & JSON" }
    ],
    database: [
      { name: "MySQL", note: "Relational Modeling & Structured Queries" }
    ],
    toolsDeployment: [
      { name: "Git", note: "Version Control" },
      { name: "GitHub", note: "Code Collaboration & Hosting" },
      { name: "Railway", note: "Cloud Production Deployment" },
      { name: "PythonAnywhere", note: "Python WSGI Deployment" }
    ]
  },

  currentlyExploring: [
    {
      title: "Data Science & Analysis",
      description: "Learning workflows for data wrangling, numerical computing, relational querying, and visualizing real-world datasets.",
      items: ["Data Science", "Data Analysis", "Python for Data Science", "NumPy", "Pandas", "SQL", "Data Visualization"],
      badge: "Active Learning Area"
    },
    {
      title: "AI & Generative AI",
      description: "Exploring foundational machine intelligence principles, conversational agents, and integrating Large Language Models (LLMs) into applications.",
      items: ["AI / Generative AI", "LLM Integration (Ollama)", "Dialogflow Chatbots", "Prompt Engineering"],
      badge: "Active Exploration"
    }
  ],

  projects: [
    {
      id: "mudra-event",
      title: "Mudra Event — Event Management Web Application",
      badge: "LIVE REAL-WORLD PROJECT",
      badgeType: "live",
      tagline: "Turning Moments into Memories • Specializing in surprise decor & event experiences",
      previewImage: "assets/images/mudra-event-hero.png",
      secondaryImage: "assets/images/mudra-event-services.png",
      previewLabel: "Hero Section (mudraevent.co.in)",
      secondaryLabel: "Live Services & Packages",
      description: "A Django-based event management web application developed for managing event services and bookings.",
      deploymentHistory: "The application was initially deployed on PythonAnywhere and later migrated to Railway for production use.",
      liveUrl: "https://mudraevent.co.in/",
      githubUrl: null, // Production client application (codebase is proprietary)
      stack: {
        frontend: "HTML, CSS, JavaScript, Bootstrap",
        backend: "Django",
        database: "MySQL",
        tools: "Git, GitHub, Railway (Initially PythonAnywhere)"
      },
      tags: ["Django", "MySQL", "Bootstrap", "Railway", "JavaScript"],
      features: [
        "Dynamic service pages showcasing various event packages and decorations",
        "Comprehensive event service management and booking workflow",
        "Customer rating and review functionality for transparent social proof",
        "Responsive, mobile-friendly user interface built with Bootstrap",
        "Production deployment on Railway with environment-based configuration",
        "Architecture successfully migrated from PythonAnywhere to Railway"
      ]
    },
    {
      id: "food-ordering",
      title: "AI-Powered Food Ordering & Chatbot System",
      badge: "Academic / Project-Based Application",
      badgeType: "academic",
      previewImage: "assets/images/food-ordering-hero.png",
      secondaryImage: "assets/images/food-ordering-chatbot.png",
      previewLabel: "Hotel Tejas Web Portal",
      secondaryLabel: "Dialogflow AI Chatbot Window",
      description: "A FastAPI-based food ordering system with chatbot integration designed to support food ordering, recommendations, and order tracking.",
      projectPositioning: "Demonstrates backend development, API development, database management, chatbot integration, and practical application design.",
      liveUrl: null,
      githubUrl: "https://github.com/Sakshi-pravin-kadam",
      stack: {
        frontend: "HTML, CSS, JavaScript, Bootstrap",
        backend: "FastAPI",
        chatbot: "Dialogflow",
        database: "MySQL"
      },
      tags: ["FastAPI", "Dialogflow", "MySQL", "REST APIs", "Bootstrap"],
      features: [
        "Chatbot-based natural interaction powered by Dialogflow intents",
        "Context-aware food item recommendations during ordering",
        "Dynamic food browsing with categorization and culinary filters",
        "Client-side shopping cart functionality with state handling",
        "Streamlined order placement with instant order ID generation",
        "Real-time order tracking status updates",
        "Admin and order management interface for order fulfillment",
        "Dynamic FastAPI webhook responses integrated with MySQL database"
      ]
    },
    {
      id: "mock-interview",
      title: "Smart Mock Interview System",
      badge: "Java & AI Integration Project",
      badgeType: "system",
      previewImage: "assets/images/mock-interview-config.png",
      secondaryImage: "assets/images/mock-interview-dashboard.png",
      previewLabel: "Interview Configuration",
      secondaryLabel: "AI Performance Analytics",
      description: "A Java-based mock interview preparation system designed to generate and evaluate interview questions based on interview requirements.",
      projectPositioning: "Clearly demonstrates experience with Java and Spring Boot in addition to the primary Python full stack.",
      liveUrl: null,
      githubUrl: "https://github.com/Sakshi-pravin-kadam",
      stack: {
        backend: "Java, Spring Boot",
        ai: "Ollama / LLM integration",
        database: "MySQL"
      },
      tags: ["Java", "Spring Boot", "MySQL", "Ollama LLM", "REST APIs"],
      features: [
        "Domain-based, topic-based, and difficulty-based interview configuration",
        "Dynamic interview question flow tailored to user responses",
        "Automated answer generation, feedback, and objective score calculation",
        "Candidate strength and weakness identification matrix",
        "Interview session lifecycle management and historical performance tracking",
        "Relational performance data storage with MySQL schemas",
        "Local LLM integration via Ollama for privacy-focused automated evaluation"
      ]
    }
  ],

  experience: [
    {
      title: "Real-World Live Project Development",
      highlight: "Mudra Event — Event Management Web Application",
      period: "Production Deployment",
      points: [
        "Architected and deployed a complete production event management platform using Django, MySQL, and Bootstrap.",
        "Built dynamic booking workflows, service catalog management, and customer rating/review modules.",
        "Managed deployment lifecycle: initial launch on PythonAnywhere and subsequent production migration to Railway."
      ]
    },
    {
      title: "Academic & Architectural Software Projects",
      highlight: "Backend, API & System Design",
      period: "2024 – Present",
      points: [
        "Engineered asynchronous backend REST APIs using FastAPI with Dialogflow chatbot webhook integration.",
        "Developed the Smart Mock Interview System using Java and Spring Boot, integrating Ollama for automated evaluation.",
        "Modeled normalized relational schemas in MySQL ensuring reliable transactional workflows across applications."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. D. Y. Patil Centre for Management and Research, Pune",
      period: "2025–2027",
      status: "Pursuing",
      badge: "Current Degree"
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institution: "University of Mumbai",
      period: "2022–2025",
      status: "Completed",
      badge: "Graduated"
    }
  ],

  certifications: [
    { name: "Python Bootcamp", year: "2024" },
    { name: "AI Fundamentals", year: "2025" },
    { name: "Data Science", year: "2026" },
    { name: "Generative AI Mastermind", organization: "Outskill", year: "Recent" }
  ],

  jobSimulations: [
    {
      role: "Data Analytics Job Simulation",
      organization: "Deloitte",
      label: "Virtual Experience Program",
      description: "Completed practical simulated exercises addressing business data analysis, data interpretation, and stakeholder communication."
    }
  ],

  achievements: [
    {
      title: "1st Place — Frames of Patriotism Animated Film-Making Competition",
      year: "2024",
      project: "Unity in Diversity",
      awardType: "1st Place Award",
      description: "Recognized for creative conceptualization, direction, and technical execution in animated film production."
    }
  ],

  workshops: [
    { name: "IBM AI Fundamentals", provider: "IBM" },
    { name: "IBM IoT Fundamentals", provider: "IBM" },
    { name: "Rigel Unity Workshop", provider: "Rigel", year: "2023" }
  ]
};

if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_DATA);
}
