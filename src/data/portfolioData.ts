export interface Project {
  id: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  contribution: string;
  outcome: string;
  imageUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  descriptionPoints: string[];
  techStack: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa: string;
  highlights?: string[];
  certifications?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Nivash R N",
  title: "Associate AI Engineer",
  headline: "Building production-ready AI applications using LLMs, AI Agents, MCP and scalable backend systems.",
  email: "hello.nivashinsights@gmail.com",
  githubUrl: "https://github.com/RNNivash",
  linkedinUrl: "https://linkedin.com/in/nivash-r-n",
  resumeUrl: "/resume/Nivash_RN_Resume.pdf",
};

export const experienceData: Experience[] = [
  {
    company: "AstroVed Pvt. Ltd.",
    role: "Associate AI Engineer",
    period: "Feb 2026 – Present",
    location: "Chennai, India",
    descriptionPoints: [
      "Developed AI-powered applications and backend services using Python, FastAPI and REST APIs across multiple astrology and business products.",
      "Built LLM-powered content generation solutions for SEO blogs and personalized reports using OpenAI and modern LLM technologies.",
      "Designed LLM-agnostic integrations using LiteLLM, enabling support for OpenAI, DeepSeek, Gemini, Claude, and local LLMs (Ollama, Hugging Face, Groq).",
      "Optimized prompts and token usage to improve AI response quality, latency, and operational efficiency.",
      "Developed AI-driven report generation workflows by integrating internal astrology APIs with Large Language Models.",
      "Contributed to AI-assisted product development, including checkout redesign, homepage redesign, AI review analysis, and astrology service enhancements.",
      "Supported QA automation initiatives by maintaining and enhancing Playwright-based AI testing solutions used by the testing team.",
      "Worked with product managers, astrologers, QA engineers, and frontend developers to deliver production-ready AI features."
    ],
    techStack: ["Python", "FastAPI", "LiteLLM", "OpenAI", "DeepSeek", "Gemini", "Claude", "Ollama", "REST APIs", "MySQL", "PostgreSQL", "Playwright"]
  }
];

export const projectsData: Project[] = [
  {
    id: "numerology-platform",
    title: "AI-Powered Numerology Prediction Platform",
    overview: "A high-performance digital numerology platform that automates complex calculations and constructs deeply personalized advisory reports in real-time.",
    problem: "Traditional numerology calculations and report distributions are highly manual, prone to human error, and fail to scale or deliver deeply personalized, immediate guidance for massive user bases.",
    solution: "Developed an AI-powered Numerology Prediction platform using Python and FastAPI, enabling personalized report generation based on user birth details and numerology calculations. Designed an LLM-agnostic architecture using LiteLLM to support multiple providers (OpenAI, DeepSeek, Gemini).",
    techStack: ["Python", "FastAPI", "LiteLLM", "OpenAI", "DeepSeek", "MySQL", "REST APIs", "Prompt Engineering"],
    contribution: "Engineered dynamic prompt workflows, optimized prompt structure and token usage, integrated internal astrology/location APIs, migrated database from PostgreSQL to MySQL, and managed deployment on AstroVed server.",
    outcome: "Reduced report generation time from hours to under 2 seconds. Increased user engagement and enabled scalable delivery to thousands of active daily users."
  },
  {
    id: "astrology-services",
    title: "AI-Powered Astrology Services",
    overview: "An interactive astrological charts portal migrating static content generators into dynamic AI Agent workflows.",
    problem: "Astrological chart interpretation and transit tracking offer rigid, static content that lacks personalization and fails to provide dynamic, custom astrological insights.",
    solution: "Developed Phase 1 of AstroVed's AI-powered Astrology Services by transforming existing free astrology tools into personalized AI experiences using AI Agent-based workflows and user birth details.",
    techStack: ["Python", "FastAPI", "AI Agents", "MCP", "OpenAI", "REST APIs", "Prompt Engineering"],
    contribution: "Integrated internal astrology APIs with LLM-generated responses to provide personalized reports instead of static content, implemented an MCP-based workflow to deliver downloadable reports via email, and collaborated with product/astrology teams to define feature requirements.",
    outcome: "Successfully deployed email delivery agents handling automated transit charts, turning static calculators into personalized AI experiences."
  },
  {
    id: "seo-content-gen",
    title: "AI-Powered SEO Content Generation",
    overview: "An automated content production workflow matching AstroVed brand standards for blogs and landing pages.",
    problem: "Manual blog and article creation for content marketing is labor-intensive and struggles to maintain consistent writing style, structure, tone, and SEO compliance at high velocities.",
    solution: "Developed an AI-powered SEO content generation system that automates blog and article creation aligned with AstroVed's publishing standards using Large Language Models.",
    techStack: ["Python", "FastAPI", "Streamlit", "Open Source LLMs", "RAG", "Prompt Engineering"],
    contribution: "Analyzed previously published blogs to understand writing style, structure, tone, and SEO patterns. Collaborated with the Digital Marketing team and engineered prompt templates to generate complete, SEO-friendly articles.",
    outcome: "Accelerated publishing velocity by 75% while maintaining compliance with brand tone guidelines and SEO keywords."
  },
  {
    id: "qa-automation-ai",
    title: "QA Automation AI",
    overview: "An automated end-to-end framework resolving manual testing bottlenecks for checkout and astro service deployments.",
    problem: "The QA team faced manual testing bottlenecks and flaky automation suites, requiring a more robust and scalable end-to-end framework to ensure production stability and error-free deployments.",
    solution: "Took ownership and finalized the development of a Playwright-based QA Automation platform, deploying it for stable test executions and team-wide usage.",
    techStack: ["Python", "Flask", "Playwright", "HTML", "CSS", "JS"],
    contribution: "Completed pending enhancements, resolved production defects, fixed server-side/deployment automation issues, and provided ongoing production maintenance.",
    outcome: "Reduced deployment regression cycles from days to minutes, ensuring 99.9% uptime stability."
  }
];

export const skillsData: SkillGroup[] = [
  {
    category: "AI Engineering",
    items: [
      "LiteLLM (LLM-Agnostic)",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "DeepSeek",
      "Gemini",
      "Claude",
      "Ollama (Local LLMs)",
      "RAG",
      "AI Agents (Agentic AI)",
      "MCP",
      "Prompt Engineering & Optimization",
      "LLM Optimization",
      "AI Architecture",
      "Fine-tuning Concepts",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn"
    ]
  },
  {
    category: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "JSON",
      "Pydantic",
      "SQL",
      "JavaScript",
      "API Integration"
    ]
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "Pinecone",
      "ChromaDB",
      "FAISS",
      "Vector Embeddings"
    ]
  },
  {
    category: "Frontend",
    items: [
      "React (Basic)",
      "HTML5",
      "CSS3",
      "Bootstrap"
    ]
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Jupyter Notebook",
      "Google Colab",
      "Docker (Basic)"
    ]
  }
];

export const aboutData = {
  journey: [
    "My technical journey began with core Python programming, establishing a strong foundation in data structures, scripting, and system algorithms. This quickly evolved into writing robust Server backend systems, where I specialized in database integration, concurrency, and clean API architectures.",
    "Driven by a need for high-performance and lightweight servers, I adopted FastAPI to engineer scalable backend environments. This server mastery laid the perfect groundwork for my pivot into Generative AI workflows, where I integrated complex AI pipelines, local and remote LLM models (Ollama, OpenAI, DeepSeek), and Model Context Protocol (MCP) handlers.",
    "Today, as an Associate AI Engineer at AstroVed Pvt. Ltd., I combine these programming, FastAPI, and agentic layers to build and deploy production-ready AI applications. I coordinate cross-functional teams to deliver low-latency prediction tools, automated report pipelines, and Playwright-driven testing frameworks."
  ]
};

export const educationData: Education[] = [
  {
    institution: "SNS College of Engineering",
    degree: "B.E Computer Science and Technology",
    period: "2020 – 2024",
    location: "Coimbatore, India",
    cgpa: "8.9",
    highlights: [
      "Specialized in Software Engineering, Core Computing, and Database Architectures",
      "Acquired strong foundations in programming paradigms, algorithms, and backend systems"
    ],
  },
  {
    institution: "Little Scholars Matric Hr Sec School",
    degree: "Higher Secondary (HSC)",
    period: "2019 – 2020",
    location: "Tanjore, India",
    cgpa: "62%"
  },
  {
    institution: "Little Scholars Matric Hr Sec School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "2017 – 2018",
    location: "Tanjore, India",
    cgpa: "79%"
  }
];
