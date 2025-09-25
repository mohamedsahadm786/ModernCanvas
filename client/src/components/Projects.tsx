import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import PR1 from '@assets/generated_images/Projects/1.png';
import PR2 from '@assets/generated_images/Projects/2.jpg';
import PR3 from '@assets/generated_images/Projects/3.jpg';
import PR4 from '@assets/generated_images/Projects/4.jpg';
import PR5 from '@assets/generated_images/Projects/5.png';
import PR6 from '@assets/generated_images/Projects/6.jpg';
import PR7 from '@assets/generated_images/Projects/7.webp';
import PR8 from '@assets/generated_images/Projects/8.webp';
import PR9 from '@assets/generated_images/Projects/9.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Amazon Data Analytics",
    description: "Analyzed over 29,000 Amazon purchasing records using complex SQL queries to derive key business insights. Implemented PL/pgSQL stored procedures to automate inventory updates, eliminating manual processes. Optimized queries using indexing and CTEs, improving performance by 30% and enhancing data retrieval efficiency.",
    image: PR1,
    githubUrl: "https://github.com/mohamedsahadm786/advanced-postgresql-business-insights",
    technologies: ["PostgreSQL", "SQL", "Data Analysis", "Business Intelligence"]
  },
  {
    id: 2,
    title: "AI Sentiment Analysis Chatbot",
    description: "Developed an AI-powered chatbot leveraging deep learning and NLP to classify user sentiments with 86.3% accuracy. Built using LSTM neural networks in Python, the chatbot processes text inputs and provides real-time sentiment-based responses, improving user interaction and engagement.",
    image: PR2,
    githubUrl: "https://github.com/mohamedsahadm786/Sentiment-Analysis-Chatbot",
    technologies: ["Python", "LSTM", "NLP", "Deep Learning", "TensorFlow"]
  },
  {
    id: 3,
    title: "Real Estate Price Prediction",
    description: "Designed a predictive modeling tool for Bangalore's real estate market using machine learning techniques such as Random Forest and Gradient Boosting. Integrated a Flask-based UI to provide stakeholders with data-driven insights, enabling more informed property investment decisions.",
    image: PR3,
    githubUrl: "https://github.com/mohamedsahadm786/Real-Estate-Price-Prediction-AI-Powered-Tool-for-Bangalore-Housing-Market-",
    technologies: ["Python", "Machine Learning", "Flask", "Random Forest", "Gradient Boosting"]
  },
  {
    id: 4,
    title: "Cricket T20 Analytics",
    description: "Conducted performance analytics on T20 World Cup 2022 data, scraping and processing over 10,000 data points. Used Python and Power BI to visualize player performance metrics, helping identify top-performing players and optimize Best XI team selection based on statistical insights.",
    image: PR4,
    githubUrl: "https://github.com/mohamedsahadm786/Cricket-T20-World-Cup-2022-Data-Analysis",
    technologies: ["Python", "Power BI", "Data Scraping", "Sports Analytics", "Visualization"]
  },
  {
    id: 5,
    title: "AI Sustainability Report Analyzer",
    description: "Developed an AI-powered pipeline to analyze 1000+ page multilingual sustainability reports, identifying digitalization needs using GPT-4o-mini with 95%+ accuracy. Automated PDF parsing, OCR, and section-wise text processing with PyMuPDF, Tesseract, and spaCy. Mapped insights to external service portfolios via dynamic web scraping, reducing manual effort by ~80% and enabling scalable ESG analysis.",
    image: PR5,
    githubUrl: "https://github.com/mohamedsahadm786/AI-powered-LLM-Sustainability-Report-Analyzer",
    technologies: ["GPT-4", "NLP", "OCR", "Web Scraping", "ESG Analysis"]
  },
  {
    id: 6,
    title: "Food Delivery Time Prediction",
    description: "Built a predictive model to estimate food delivery times using the Zomato Delivery dataset. Applied Random Forest and XGBoost with R² > 0.90. Performed feature engineering and hyperparameter tuning to improve accuracy, helping optimize delivery logistics and customer satisfaction.",
    image: PR6,
    githubUrl: "https://github.com/mohamedsahadm786/food-delivery-time-prediction",
    technologies: ["Python", "XGBoost", "Random Forest", "Feature Engineering", "Logistics"]
  },
  {
    id: 7,
    title: "AI Resume Generator",
    description: "Developed an AI-powered tool to generate job-specific, ATS-friendly resumes and cover letters within seconds. Utilized GPT-4o, NLP, and LaTeX automation to tailor content based on job descriptions. Built with Streamlit for a clean, one-click web interface to simplify job application processes.",
    image: PR7,
    githubUrl: "https://github.com/mohamedsahadm786/AI-Powered-ATS-Optimized-Resume-and-Cover-Letter-Generator",
    technologies: ["GPT-4", "Streamlit", "LaTeX", "NLP", "ATS Optimization"]
  },
  {
    id: 8,
    title: "AI Interview Simulator",
    description: "An AI-powered Interview Coach that simulates realistic, voice-based mock interviews and provides instant feedback on both answer quality and communication style. Designed to help candidates practice confidently, it tailors questions to job roles and resumes while offering personalized tips to improve real-world interview performance.",
    image: PR8,
    githubUrl: "https://github.com/mohamedsahadm786/AI-Powered-Multilingual-Voice-Interview-Simulator",
    technologies: ["AI", "Voice Processing", "Machine Learning", "Interview Coaching", "Multilingual"]
  },
  {
    id: 9,
    title: "N8N Automation Suite",
    description: "Built four custom automations using the n8n no-code platform: a Prompt-to-Photo Editor for quick image edits, an Image-to-Video Creator that transforms photos into short videos, a Multimodal Telegram Assistant supporting text, audio, video, and document inputs, and a RAG-powered Cover Letter Builder that generates tailored applications from job details and user background.",
    image: PR9,
    githubUrl: "https://github.com/mohamedsahadm786/N8N_Automation",
    technologies: ["n8n", "Automation", "Image Processing", "Video Creation", "RAG", "Telegram Bot"]
  }
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="projects" 
      className="py-20 lg:py-32 bg-gradient-to-br from-card via-card/50 to-muted/30"
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="projects-title"
          >
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group hover-elevate transition-all duration-300 hover:scale-105 overflow-hidden bg-card/50 backdrop-blur-sm border border-black"
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground line-clamp-2">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className={`text-sm text-muted-foreground leading-relaxed mb-2 ${expanded === project.id ? '' : 'line-clamp-4'}`}>
                  {project.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpanded(project.id)}
                  className="p-0 h-auto mb-4 text-blue-600 hover:text-blue-800"
                >
                  {expanded === project.id ? (
                    <>Show Less <ChevronUp className="w-4 h-4 ml-1" /></>
                  ) : (
                    <>Show More <ChevronDown className="w-4 h-4 ml-1" /></>
                  )}
                </Button>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <Button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="w-full group/btn"
                  data-testid={`project-source-${project.id}`}
                >
                  <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  SOURCE CODE
                  <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to Experience */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToExperience}
            className="px-8 py-3 text-lg font-semibold hover-elevate"
            data-testid="projects-cta"
          >
            Oh, now I've got your attention! Time to dive into my work experience! 😎
          </Button>
        </div>
      </div>
    </section>
  );
}
