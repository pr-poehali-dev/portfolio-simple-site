
import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-montserrat font-bold text-gradient mb-4">
              Портфолио
            </div>
            <p className="text-muted-foreground mb-4">
              Создаю современные веб-сайты и приложения, сочетающие стильный дизайн и надежную функциональность.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-purple transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-purple transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-purple transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-purple transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  Обо мне
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  Проекты
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  Навыки
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  Веб-разработка
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  UI/UX дизайн
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  Разработка приложений
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="Mail" className="text-purple mt-1" size={16} />
                <a 
                  href="mailto:contact@example.com" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  contact@example.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Phone" className="text-purple mt-1" size={16} />
                <a 
                  href="tel:+71234567890" 
                  className="text-muted-foreground hover:text-purple transition-colors"
                >
                  +7 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="text-purple mt-1" size={16} />
                <span className="text-muted-foreground">
                  Москва, Россия
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Портфолио. Все права защищены.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
