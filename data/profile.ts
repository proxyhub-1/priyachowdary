export const profile = {
  name: "Priya Jonnalagadda",
  linkedIn: "https://www.linkedin.com/in/priya-jonnalagadda/",
  email: "priyajonna1@gmail.com",
  phone: "6146822239",
  phoneDisplay: "(614) 682-2239",
  phoneHref: "+16146822239",
  location: "",
  role: "Senior AI Engineer",
  specialties: ["Generative AI", "LLMs", "RAG", "Agentic AI", "LangChain", "AWS Bedrock", "Azure OpenAI"],
  experienceSummary:
    "Senior Generative AI Engineer with 10+ years of experience across Generative AI, Machine Learning, NLP, Data Science, and AI Engineering.",
  professionalSummary:
    "I specialize in building production-ready LLM applications, RAG systems, AI agents, AI assistants, and enterprise AI solutions. My work spans end-to-end AI application design and deployment with OpenAI, Azure OpenAI, Amazon Bedrock, LangChain, LangGraph, Pinecone, FAISS, Python, AWS, and Azure.",
  expertise: [
    "Generative AI & LLM applications",
    "Agentic AI & multi-agent systems",
    "RAG & vector databases",
    "LangChain & LangGraph",
    "OpenAI, Azure OpenAI & Amazon Bedrock",
    "Python, FastAPI & cloud AI engineering",
    "Machine learning & NLP",
    "MLOps & LLMOps",
    "Prompt engineering & LLM evaluation",
    "AI security & production AI systems",
  ],
  industries: ["Healthcare", "Financial services", "Insurance", "Enterprise knowledge management"],
  introduction:
    "I believe in turning knowledge, creativity, and ideas into meaningful outcomes. Through my professional journey, I continue to develop my expertise, explore new technologies, and take on opportunities that challenge me to grow.",
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  context?: string;
  links?: { label: string; href: string }[];
};

export type Experience = {
  role: string;
  organization: string;
  location?: string;
  period: string;
  project: string;
  description: string;
  details: string[];
  environment: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  fileUrl?: string;
  verificationUrl?: string;
  documentUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "agentic-document-intelligence",
    title: "Agentic Document Intelligence",
    summary: "An enterprise GenAI platform for regulated documents and commercial workflows.",
    category: "Enterprise GenAI",
    description:
      "Built an agentic document-intelligence platform using LangGraph to orchestrate retrieval, extraction, validation, and summarization. The work includes multimodal processing for lengthy regulatory documents, citation-grounded medical content search, and workflow automation with human review for regulated outputs.",
    context: "Johnson & Johnson · April 2025–Present",
    technologies: ["GPT-4o", "LangGraph", "RAG", "AWS Lambda", "Pinecone", "LLM evaluation"],
  },
  {
    slug: "financial-services-agentic-ai",
    title: "Financial Services Agentic AI",
    summary: "RAG and agent workflows for post-trade operations, compliance, and knowledge search.",
    category: "Financial AI",
    description:
      "Designed enterprise AI workflows for financial-services knowledge work, including hybrid retrieval over operational and compliance content, source-linked answers, and agent-assisted exception resolution with human approval for consequential actions. The system emphasizes auditability, access controls, and task-aware model routing.",
    context: "Broadridge Financial · September 2022–March 2025",
    technologies: ["Hybrid search", "LangChain", "LangGraph", "RAGAS", "Azure", "Kubernetes"],
  },
  {
    slug: "insurance-pricing-and-retention-ml",
    title: "Insurance Pricing & Retention ML",
    summary: "Predictive models and data products for insurance pricing, claims, and retention.",
    category: "Machine Learning",
    description:
      "Developed predictive modeling and data workflows for insurance use cases, including self-serve retention scoring, pricing risk models, NLP over policy and claims documents, and automated ETL. Contributed to moving legacy services toward event-driven AWS components.",
    context: "Homesite Insurance · January 2021–August 2022",
    technologies: ["Python", "scikit-learn", "XGBoost", "Airflow", "AWS", "MLflow"],
  },
  {
    slug: "legal-tax-ml-platform",
    title: "Legal & Tax ML Platform",
    summary: "Machine learning pipelines and NLP for legal, tax, and compliance products.",
    category: "Machine Learning",
    description:
      "Built end-to-end machine learning and NLP pipelines for large-scale legal, tax, and compliance datasets, spanning feature engineering, predictive analytics, text processing, anomaly detection, evaluation, and production deployment.",
    context: "Thomson Reuters · September 2017–December 2020",
    technologies: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Spark", "MLflow"],
  },
];
export const experience: Experience[] = [
  {
    role: "Generative AI Engineer",
    organization: "Johnson & Johnson",
    location: "New Brunswick, NJ",
    period: "April 2025 – Present",
    project: "Enterprise GenAI platform — agentic document intelligence and commercial analytics on AWS",
    description: "Develops generative AI applications using LLMs, RAG, and AI agents to automate business workflows and document processing. Builds assistants and semantic search with OpenAI, Azure OpenAI, LangChain, LangGraph, and vector databases.",
    details: [
      "Built a LangGraph agentic document-intelligence platform orchestrating retrieval, extraction, validation, and summarization across multi-step workflows.",
      "Developed a GPT-4o multimodal pipeline to extract structured data from regulatory documents exceeding 400 pages, combining vision-language understanding with text extraction.",
      "Implemented RAG over medically validated, legally reviewed product content for oncology CRM sales-copilot use cases, returning grounded, citation-backed responses.",
      "Engineered fine-tuned vision-language models and low-latency inference pipelines for simulated operating-room surgical decision support.",
      "Built a post-operative documentation agent that turns intraoperative annotations into structured clinical documentation.",
      "Designed event-driven AWS Lambda pipelines for document ingestion and processing, automating work estimated to save 200+ manual hours annually.",
      "Trained XGBoost persistency models across three therapeutic areas and 82K patients; segmented approximately 10K healthcare professionals into six commercial personas.",
      "Evaluated accuracy, relevance, groundedness, hallucination rate, latency, and token use; implemented guardrails, prompt-injection protections, and human review for regulated content.",
      "Connected LLM applications to enterprise REST APIs, repositories, and knowledge bases so assistants can act within existing business workflows.",
    ],
    environment: ["Python", "GPT-4o", "Generative AI", "LLMs", "RAG", "LangChain", "LangGraph", "LlamaIndex", "AI agents", "Prompt engineering", "Embeddings", "Pinecone", "FAISS", "Azure AI Search", "AWS Lambda", "REST APIs", "NLP", "XGBoost", "LLM evaluation", "MLOps"],
  },
  {
    role: "AI/ML Engineer",
    organization: "Broadridge Financial",
    location: "Lake Success, NY",
    period: "September 2022 – March 2025",
    project: "Agentic AI and RAG for post-trade operations, compliance search, and knowledge workflows on Azure",
    description: "Designed scalable generative AI solutions for financial services using LLMs, RAG, hybrid search, and AI agents, with emphasis on document processing, response quality, security, and cost efficiency.",
    details: [
      "Architected enterprise GenAI solutions for financial-services knowledge workflows with reliability, security, auditability, and cost-aware inference.",
      "Built RAG pipelines with hybrid keyword and semantic search, metadata filtering, query rewriting, contextual retrieval, and reranking.",
      "Developed agentic workflows for trade-fail and post-trade exception resolution with human approval checkpoints for high-impact actions.",
      "Implemented multi-agent orchestration for research, retrieval, analysis, validation, and summarization across capital-markets decision-support tasks.",
      "Delivered knowledge assistants grounded in approved organizational content with source-linked answers.",
      "Built evaluation harnesses using RAGAS and LLM-as-judge methods, plus PII redaction and access controls for regulated deployment.",
      "Introduced task-aware model routing and fallbacks based on complexity, quality, latency, cost, model availability, and retrieval context.",
      "Containerized AI services with Docker and Kubernetes on Azure and established CI/CD, automated retraining triggers, and model monitoring.",
      "Improved responsiveness using asynchronous processing, caching, batching, prompt reduction, and efficient retrieval while preserving answer quality.",
    ],
    environment: ["Python", "Generative AI", "LLM architecture", "RAG", "Hybrid search", "Multi-agent orchestration", "LangChain", "LangGraph", "LlamaIndex", "RAGAS", "LLM evaluation", "PII redaction", "Human-in-the-loop", "Model routing", "Azure", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
  },
  {
    role: "Data Scientist",
    organization: "Homesite Insurance",
    location: "Boston, MA",
    period: "January 2021 – August 2022",
    project: "ML-driven pricing, retention, and data-platform modernization on AWS",
    description: "Developed and deployed AI/ML solutions for insurance operations using Python, machine learning, NLP, and predictive analytics for risk assessment, claims processing, and automation.",
    details: [
      "Developed a Streamlit application serving predictive retention models across policy lines for self-service churn-risk scoring.",
      "Integrated supervised learning models into pricing workflows for risk scoring and premium optimization.",
      "Built classification, regression, and forecasting models for underwriting risk, claims analysis, and operational analytics.",
      "Automated ETL with Apache Airflow to supply model training, feature stores, and downstream analytics.",
      "Designed Looker dashboards in LookML for pricing, claims, and leadership KPI visibility.",
      "Contributed to migrating legacy monoliths to event-driven AWS Lambda and API Gateway services; the supplied project summary reports a 515% improvement in quote-to-bind time.",
      "Applied NLP to insurance documents for classification, entity extraction, and semantic matching across policy and claims text.",
      "Implemented MLflow experiment tracking, model versioning, and CI/CD for repeatable model training and deployment.",
    ],
    environment: ["Python", "scikit-learn", "XGBoost", "Predictive modeling", "NLP", "Streamlit", "Apache Airflow", "Looker", "LookML", "AWS Lambda", "API Gateway", "MLflow", "CI/CD", "ETL", "Data pipelines"],
  },
  {
    role: "Machine Learning Engineer",
    organization: "Thomson Reuters",
    location: "Eagan, MN",
    period: "September 2017 – December 2020",
    project: "ML platform and NLP for legal, tax, and compliance products on Azure",
    description: "Developed machine learning and data science solutions to analyze large datasets and deliver predictive insights. Built end-to-end pipelines for predictive analytics, NLP, anomaly detection, and recommendations, with a focus on feature engineering, evaluation, and production deployment.",
    details: [
      "Developed predictive analytics and NLP-based text processing for legal, tax, and compliance datasets.",
      "Built machine-learning pipelines for anomaly detection, recommendations, feature engineering, model optimization, and performance evaluation.",
      "Supported production model serving, monitoring, and cloud ML deployment.",
    ],
    environment: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "SQL", "NLP", "Databricks", "Spark MLlib", "MLflow", "Flask", "FastAPI", "MLOps", "Model monitoring"],
  },
  {
    role: "Python Developer",
    organization: "Innova Solutions",
    location: "Hyderabad, India",
    period: "July 2016 – June 2017",
    project: "Python engineering across enterprise consulting engagements on GCP",
    description: "Developed data science and predictive analytics solutions with Python, Pandas, NumPy, and scikit-learn to analyze business data and customer behavior.",
    details: [
      "Built Python ETL pipelines for ingesting, cleaning, and transforming structured and semi-structured data.",
      "Developed Flask and Django REST APIs and microservices integrating client backend systems.",
      "Supported end-to-end analytics from source collection and exploratory analysis through feature engineering, modeling, and validation.",
      "Built supervised and unsupervised models for classification, regression, segmentation, forecasting, and anomaly detection.",
      "Implemented automated tests and CI pipelines to improve release reliability.",
      "Containerized applications with Docker and supported deployments on GCP.",
      "Applied statistical analysis and A/B testing to evaluate product and process changes.",
    ],
    environment: ["Python", "Pandas", "NumPy", "PySpark", "scikit-learn", "Flask", "Django", "REST APIs", "ETL", "GCP", "Docker", "CI/CD", "Statistical analysis", "A/B testing", "SHAP"],
  },
];
export const certifications: Certification[] = [
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "04/05/2022",
    fileUrl: "/certificates/aws-academy-cloud-foundations.png",
    verificationUrl: "https://www.credly.com/go/6wTRMwp6",
  },
  {
    name: "Certificate document",
    issuer: "Shared credential",
    documentUrl: "https://www.linkedin.com/in/priya-jonnalagadda/overlay/1783034556969/single-media-viewer/?profileId=ACoAAFXOsh0BblPQE6GSK76UkwmwJYqXap8__5U",
  },
  {
    name: "Certificate document",
    issuer: "Shared credential",
    documentUrl: "https://www.linkedin.com/in/priya-jonnalagadda/overlay/1783034518139/single-media-viewer/?profileId=ACoAAFXOsh0BblPQE6GSK76UkwmwJYqXap8__5U",
  },
];
