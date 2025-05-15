
import React from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Обо мне
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Немного информации о том, кто я и чем занимаюсь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-full bg-purple/10 rounded-lg absolute -rotate-3"></div>
              <div className="w-full h-full bg-purple/20 rounded-lg absolute rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Working on computer" 
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Веб-разработчик и UI/UX дизайнер
            </h3>
            <p className="text-muted-foreground mb-6">
              Я специализируюсь на создании современных веб-приложений с использованием новейших технологий. Мой подход сочетает внимание к деталям, фокус на пользовательском опыте и стремление к технической совершенности.
            </p>
            <p className="text-muted-foreground mb-10">
              С 2018 года я работал над различными проектами — от корпоративных веб-сайтов до сложных веб-приложений. Каждый проект для меня — это возможность создать что-то уникальное и полезное.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-md text-purple">
                    <Icon name="Briefcase" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Опыт</h4>
                    <p className="text-muted-foreground">5+ лет</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-md text-purple">
                    <Icon name="GraduationCap" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Образование</h4>
                    <p className="text-muted-foreground">Магистр CS</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-md text-purple">
                    <Icon name="Users" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Клиенты</h4>
                    <p className="text-muted-foreground">20+ довольных</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-md text-purple">
                    <Icon name="Code" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Проекты</h4>
                    <p className="text-muted-foreground">30+ завершено</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
