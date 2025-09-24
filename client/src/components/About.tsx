import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, FileText } from 'lucide-react';
import profileImage from '@assets/generated_images/Professional_headshot_portrait_75ab4013.png';

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about" 
      className="py-20 lg:py-32"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            data-testid="about-title"
          >
            <span className="text-primary font-bold">SAHAD</span> in a Snapshot
          </h2>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Left Card - Education */}
          <Card className="w-full max-w-sm hover-elevate transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <img 
                src={profileImage} 
                alt="Education related visual" 
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <p className="font-semibold mb-4 text-sm text-muted-foreground">
                My EDUCATION 🎓 Oh, it's flex time!
              </p>
              <Button 
                onClick={() => scrollToSection('education')}
                className="w-full"
                data-testid="about-education-button"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Let's go!
              </Button>
            </CardContent>
          </Card>

          {/* Center - Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="SAHAD - Data Scientist profile"
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-card-border shadow-lg"
              data-testid="about-profile-image"
              loading="lazy"
            />
          </div>

          {/* Right Card - CV */}
          <Card className="w-full max-w-sm hover-elevate transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <img 
                src={profileImage} 
                alt="CV and resume visual" 
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <p className="font-semibold mb-4 text-sm text-muted-foreground">
                Let my CV do the talking!
              </p>
              <Button 
                onClick={() => window.open('https://drive.google.com/file/d/1t1SdzVxrDfx0uWxgvOW0mOI9Z8fl-3qi/view?usp=sharing', '_blank')}
                className="w-full"
                data-testid="about-cv-button"
              >
                <FileText className="w-4 h-4 mr-2" />
                Let's go!
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="text-lg font-semibold text-primary border-l-4 border-primary pl-6 italic">
            "Data is the new oil, but refining it into insights is where the real power lies."
          </blockquote>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am a Statistician, Data Scientist, Analyst, and AI/ML Engineer with a deep passion for transforming raw data into meaningful stories. With a Master's in Statistics from Pondicherry University and a Bachelor's from Hindu College, University of Delhi, I have built a strong foundation in statistical modeling, machine learning, and artificial intelligence. My expertise lies in leveraging Python and SQL to extract insights, optimize decision-making, and build scalable data-driven solutions.
          </p>

          <blockquote className="text-lg font-semibold text-primary border-l-4 border-primary pl-6 italic">
            "The goal is to turn data into information, and information into insight."
          </blockquote>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Throughout my journey, I have developed and deployed AI-driven applications, worked on deep learning models for sentiment analysis, and optimized large-scale databases to enhance business efficiency. My proficiency in data visualization and storytelling allows me to communicate complex insights effectively, ensuring that data not only speaks but also drives impact.
          </p>

          <blockquote className="text-lg font-semibold text-primary border-l-4 border-primary pl-6 italic">
            "Without data, you're just another person with an opinion."
          </blockquote>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Whether it's predictive modeling, NLP, or statistical data analysis, I believe in harnessing the power of data to solve real-world problems. With an analytical mindset and a creative approach, I strive to bridge the gap between numbers and narratives, making data-driven decisions more accessible and actionable.
          </p>
        </div>
      </div>
    </section>
  );
}