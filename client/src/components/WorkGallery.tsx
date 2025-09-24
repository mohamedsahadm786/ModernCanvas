import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import placeholderImage from '@assets/generated_images/AI_data_visualization_background_02ffc0d4.png';

// Mock data for work items - replace with actual project images
const workItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description: `Data analysis and visualization project showcasing advanced analytics techniques`,
  image: placeholderImage,
  alt: `Work project ${i + 1} - Data science and analytics`
}));

export default function WorkGallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="work-gallery" 
      className="py-20 lg:py-32 bg-muted/20"
      aria-label="Work gallery section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="work-gallery-title"
          >
            SOME THINGS I'VE WORKED ON
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card 
                  className="group cursor-pointer hover-elevate transition-all duration-300 hover:scale-105 overflow-hidden"
                  data-testid={`work-item-${item.id}`}
                >
                  <CardContent className="p-0 relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 rounded-b-lg">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA to Projects */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="px-8 py-3 text-lg font-semibold hover-elevate"
            data-testid="work-gallery-cta"
          >
            Oh, you thought that was cool? Buckle up, because the real deal is about to drop! 😎
          </Button>
        </div>
      </div>
    </section>
  );
}