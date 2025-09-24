import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Database, 
  BarChart3, 
  Brain, 
  Code2, 
  MessageSquare, 
  Users, 
  Target,
  TrendingUp,
  Lightbulb,
  GitBranch,
  Languages,
  FileSpreadsheet,
  Bot,
  Network,
  Calculator,
  BookOpen,
  Crown,
  HandHeart
} from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Languages I speak fluently for global communication',
    color: 'bg-emerald-50 border-emerald-200',
    skills: [
      {
        name: 'English',
        proficiency: 95,
        icon: Languages,
        description: 'Native-level proficiency in academic and professional settings'
      },
      {
        name: 'Malayalam',
        proficiency: 100,
        icon: Languages,
        description: 'Native language with complete fluency'
      },
      {
        name: 'Hindi',
        proficiency: 90,
        icon: Languages,
        description: 'Fluent in conversation and business communication'
      }
    ]
  },
  {
    title: 'Tools and Technologies',
    description: 'Technical tools and platforms I use for data science and development',
    color: 'bg-blue-50 border-blue-200',
    skills: [
      {
        name: 'Python',
        proficiency: 90,
        icon: Code2,
        description: 'Advanced Python programming for data science, ML, and automation'
      },
      {
        name: 'SQL & Databases',
        proficiency: 85,
        icon: Database,
        description: 'PostgreSQL, MySQL, database optimization, and complex query writing'
      },
      {
        name: 'Advanced MS Excel',
        proficiency: 88,
        icon: FileSpreadsheet,
        description: 'Advanced formulas, pivot tables, macros, and data analysis tools'
      },
      {
        name: 'Power BI',
        proficiency: 85,
        icon: BarChart3,
        description: 'Business intelligence dashboards and interactive data visualizations'
      },
      {
        name: 'Artificial Intelligence',
        proficiency: 87,
        icon: Bot,
        description: 'AI model development, NLP, computer vision, and machine learning'
      },
      {
        name: 'Deep Learning',
        proficiency: 85,
        icon: Network,
        description: 'Neural networks, TensorFlow, PyTorch for complex pattern recognition'
      },
      {
        name: 'SPSS',
        proficiency: 80,
        icon: Calculator,
        description: 'Statistical analysis software for advanced data analytics'
      },
      {
        name: 'Git & Version Control',
        proficiency: 82,
        icon: GitBranch,
        description: 'Git workflows, GitHub collaboration, and code version management'
      }
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Programming languages and frameworks in my toolkit',
    color: 'bg-green-50 border-green-200',
    skills: [
      {
        name: 'Python',
        proficiency: 90,
        icon: Code2,
        description: 'Primary language for data science, AI/ML, and backend development'
      },
      {
        name: 'R',
        proficiency: 75,
        icon: TrendingUp,
        description: 'Statistical computing, advanced analytics, and research projects'
      },
      {
        name: 'SQL',
        proficiency: 85,
        icon: Database,
        description: 'Database querying, optimization, and data manipulation'
      },
      {
        name: 'JavaScript',
        proficiency: 70,
        icon: Code2,
        description: 'Frontend development and data visualization libraries'
      }
    ]
  },
  {
    title: 'Interpersonal Skills',
    description: 'Soft skills that enable effective collaboration and leadership',
    color: 'bg-purple-50 border-purple-200',
    skills: [
      {
        name: 'Communication',
        proficiency: 92,
        icon: MessageSquare,
        description: 'Clear presentation of complex data insights to stakeholders'
      },
      {
        name: 'Data Storytelling',
        proficiency: 90,
        icon: BookOpen,
        description: 'Transforming complex data into compelling narratives and insights'
      },
      {
        name: 'Leadership',
        proficiency: 85,
        icon: Crown,
        description: 'Leading data science projects and mentoring team members'
      },
      {
        name: 'Teamwork',
        proficiency: 95,
        icon: HandHeart,
        description: 'Collaborative approach to cross-functional team projects and initiatives'
      }
    ]
  }
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-card/30"
      aria-label="Skills section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground"
            data-testid="skills-title"
          >
            SKILLS
          </h2>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="text-left">
                <h3 
                  className="text-2xl md:text-3xl font-bold text-foreground mb-3"
                  data-testid={`skills-category-${categoryIndex}`}
                >
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-lg max-w-3xl">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <Card 
                      key={skillIndex}
                      className={`group hover-elevate transition-all duration-300 hover:scale-105 ${category.color} border-2`}
                      data-testid={`skill-card-${categoryIndex}-${skillIndex}`}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="mb-4 flex justify-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                        </div>

                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {skill.name}
                        </h4>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {skill.description}
                        </p>

                        {/* Proficiency Level */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">
                              Proficiency
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {skill.proficiency}/100
                            </Badge>
                          </div>
                          <Progress 
                            value={skill.proficiency} 
                            className="h-2"
                            data-testid={`skill-progress-${categoryIndex}-${skillIndex}`}
                          />
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-4 text-primary hover:text-primary/80 h-auto p-2"
                          onClick={() => console.log(`Learning more about ${skill.name}`)}
                          data-testid={`skill-learn-${categoryIndex}-${skillIndex}`}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}