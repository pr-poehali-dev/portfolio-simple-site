
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-montserrat font-bold text-gradient">
          Портфолио
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#home" className="hover:text-purple transition-colors">
            Главная
          </a>
          <a href="#about" className="hover:text-purple transition-colors">
            Обо мне
          </a>
          <a href="#projects" className="hover:text-purple transition-colors">
            Проекты
          </a>
          <a href="#skills" className="hover:text-purple transition-colors">
            Навыки
          </a>
          <a href="#contact" className="hover:text-purple transition-colors">
            Контакты
          </a>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button 
            className="button-hover-effect bg-purple hover:bg-purple-dark"
          >
            Связаться со мной
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#about" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Обо мне
            </a>
            <a 
              href="#projects" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Проекты
            </a>
            <a 
              href="#skills" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Навыки
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button 
              className="button-hover-effect bg-purple hover:bg-purple-dark w-full mt-2"
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
