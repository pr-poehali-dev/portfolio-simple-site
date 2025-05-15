
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-24 pb-16 md:pt-16"
      style={{
        backgroundImage: "radial-gradient(circle at top right, rgba(155, 135, 245, 0.1), transparent 40%)"
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 animate-slideUp">
          <p className="text-purple font-medium mb-4">Привет, меня зовут</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Иван Петров<span className="text-purple">.</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-semibold mb-6">
            Я создаю уникальные цифровые проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Я веб-разработчик с опытом создания современных и удобных 
            интерфейсов. Моя цель — разрабатывать доступные и интуитивно 
            понятные цифровые решения, сочетающие красивый дизайн и 
            функциональность.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="button-hover-effect bg-purple hover:bg-purple-dark text-white px-8 py-6 text-lg"
              size="lg"
            >
              Смотреть проекты
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
            <Button 
              variant="outline"
              className="button-hover-effect px-8 py-6 text-lg border-2"
              size="lg"
            >
              Скачать резюме
              <Icon name="Download" className="ml-2" />
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple to-purple-dark/50 absolute blur-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Фото разработчика" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-4 z-20">
              <p className="text-xl font-semibold">5+ лет</p>
              <p className="text-muted-foreground">Опыта работы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
