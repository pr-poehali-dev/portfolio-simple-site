
import React from "react";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "Интернет-магазин электроники",
    description: "Современная платформа электронной коммерции с адаптивным дизайном и интеграцией платежных систем.",
    image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Дашборд аналитики",
    description: "Интерактивная панель управления для анализа бизнес-данных с различными графиками и визуализациями.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Приложение для управления задачами",
    description: "Продуктивное приложение для управления проектами и задачами с возможностью совместной работы в команде.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["TypeScript", "React", "Redux", "Express"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мои проекты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Подборка моих недавних работ и проектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                    Просмотр
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    <Icon name="Github" className="w-4 h-4 mr-2" />
                    Код
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="button-hover-effect border-2">
            Смотреть больше проектов
            <Icon name="ArrowRight" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
