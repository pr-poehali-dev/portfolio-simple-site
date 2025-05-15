
import React from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Есть проект или вопрос? Буду рад обсудить детали!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-md text-purple">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-muted-foreground hover:text-purple transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-md text-purple">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Телефон</h4>
                    <a 
                      href="tel:+71234567890" 
                      className="text-muted-foreground hover:text-purple transition-colors"
                    >
                      +7 (123) 456-7890
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-md text-purple">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Локация</h4>
                    <p className="text-muted-foreground">
                      Москва, Россия
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-background p-3 rounded-full border hover:bg-purple hover:text-white transition-colors"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-background p-3 rounded-full border hover:bg-purple hover:text-white transition-colors"
                >
                  <Icon name="Github" size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-background p-3 rounded-full border hover:bg-purple hover:text-white transition-colors"
                >
                  <Icon name="Twitter" size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-background p-3 rounded-full border hover:bg-purple hover:text-white transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Отправить сообщение</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Имя
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя" 
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Введите ваш email" 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Тема
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Тема сообщения" 
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Напишите ваше сообщение..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full button-hover-effect bg-purple hover:bg-purple-dark py-6 text-lg"
                    size="lg"
                  >
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
