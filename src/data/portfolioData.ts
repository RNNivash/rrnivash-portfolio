export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  contribution: string;
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
    problem: "Traditional numerology calculations and report distributions are highly manual, prone to human error, and fail to scale or deliver deeply personalized, immediate guidance for massive user bases.",
    solution: "Developed an AI-powered Numerology Prediction platform using Python and FastAPI, enabling personalized report generation based on user birth details and numerology calculations. Designed an LLM-agnostic architecture using LiteLLM to support multiple providers (OpenAI, DeepSeek, Gemini).",
    techStack: ["Python", "FastAPI", "LiteLLM", "OpenAI", "DeepSeek", "MySQL", "REST APIs", "Prompt Engineering"],
    contribution: "Engineered dynamic prompt workflows, optimized prompt structure and token usage, integrated internal astrology/location APIs, migrated database from PostgreSQL to MySQL, and managed deployment on AstroVed server."
  },
  {
    id: "astrology-services",
    title: "AI-Powered Astrology Services",
    problem: "Astrological chart interpretation and transit tracking offer rigid, static content that lacks personalization and fails to provide dynamic, custom astrological insights.",
    solution: "Developed Phase 1 of AstroVed's AI-powered Astrology Services by transforming existing free astrology tools into personalized AI experiences using AI Agent-based workflows and user birth details.",
    techStack: ["Python", "FastAPI", "AI Agents", "MCP", "OpenAI", "REST APIs", "Prompt Engineering"],
    contribution: "Integrated internal astrology APIs with LLM-generated responses to provide personalized reports instead of static content, implemented an MCP-based workflow to deliver downloadable reports via email, and collaborated with product/astrology teams to define feature requirements."
  },
  {
    id: "seo-content-gen",
    title: "AI-Powered SEO Content Generation",
    problem: "Manual blog and article creation for content marketing is labor-intensive and struggles to maintain consistent writing style, structure, tone, and SEO compliance at high velocities.",
    solution: "Developed an AI-powered SEO content generation system that automates blog and article creation aligned with AstroVed's publishing standards using Large Language Models.",
    techStack: ["Python", "FastAPI", "Streamlit", "Open Source LLMs", "RAG", "Prompt Engineering"],
    contribution: "Analyzed previously published blogs to understand writing style, structure, tone, and SEO patterns. Collaborated with the Digital Marketing team and engineered prompt templates to generate complete, SEO-friendly articles."
  },
  {
    id: "qa-automation-ai",
    title: "QA Automation AI",
    problem: "The QA team faced manual testing bottlenecks and flaky automation suites, requiring a more robust and scalable end-to-end framework to ensure production stability and error-free deployments.",
    solution: "Took ownership and finalized the development of a Playwright-based QA Automation platform, deploying it for stable test executions and team-wide usage.",
    techStack: ["Python", "Flask", "Playwright", "HTML", "CSS", "JS"],
    contribution: "Completed pending enhancements, resolved production defects, fixed server-side/deployment automation issues, and provided ongoing production maintenance."
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
    "I am Nivash R N, an Associate AI Engineer at AstroVed Pvt. Ltd., dedicated to building production-ready AI applications, Generative AI systems, and scalable backend services. With a Bachelor of Engineering in Computer Science and Technology and a CGPA of 8.9, I specialize in designing and deploying intelligent, high-impact solutions that bridge advanced LLM capabilities with robust backend engineering.",
    "At AstroVed, I develop AI-powered applications and backend services using Python and FastAPI. I design LLM-agnostic integrations with LiteLLM to seamlessly orchestrate OpenAI, DeepSeek, Gemini, Claude, and local Ollama models. My work spans building personalized numerology prediction engines, AI agent workflows for astrology services, and automated SEO blog generation, while optimizing prompts and token consumption to deliver low-latency, cost-effective predictions.",
    "Driven by a passion for clean architecture and developer efficiency, I also support QA automation initiatives by maintaining Playwright-based testing solutions. I believe in engineering AI systems that are reliable, maintainable, and aligned with core business requirements, collaborating across cross-functional teams to bring advanced AI concepts into production."
  ]
};
