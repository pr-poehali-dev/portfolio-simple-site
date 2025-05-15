
import React from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const technicalSkills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "UI/UX Design", level: 85 },
];

const softSkills = [
  { 
    icon: "UserCheck", 
    title: "Коммуникация", 
    description: "Эффективное взаимодействие с командой и клиентами" 
  },
  { 
    icon: "Brain", 
    title: "Решение проблем", 
    description: "Аналитическое мышление и креативный подход к задачам" 
  },
  { 
    icon: "Hourglass", 
    title: "Управление временем", 
    description: "Организация работы и своевременное выполнение задач"
  },
  { 
    icon: "Target", 
    title: "Внимание к деталям", 
    description: "Тщательность и аккуратность в работе" 
  },
];

const tools = [
  { name: "Visual Studio Code", icon: "Code" },
  { name: "Git & GitHub", icon: "GitBranch" },
  { name: "Figma", icon: "Figma" },
  { name: "Adobe Photoshop", icon: "Image" },
  { name: "Webpack", icon: "Package" },
  { name: "Docker", icon: "Box" },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мои навыки
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мой набор технических и профессиональных навыков
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Технические навыки</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-10 mb-6">Инструменты и технологии</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-md bg-background shadow-sm border"
                >
                  <Icon name={tool.icon} className="text-purple" />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Личные качества</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="bg-purple/10 text-purple p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                      <Icon name={skill.icon} size={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-background rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Образование и сертификаты</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="GraduationCap" className="text-purple mt-1" />
                  <div>
                    <p className="font-semibold">Магистр компьютерных наук</p>
                    <p className="text-muted-foreground">Московский Государственный Университет, 2020</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Award" className="text-purple mt-1" />
                  <div>
                    <p className="font-semibold">Frontend Developer Professional</p>
                    <p className="text-muted-foreground">Сертификат Meta, 2022</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Certificate" className="text-purple mt-1" />
                  <div>
                    <p className="font-semibold">UX Design Fundamentals</p>
                    <p className="text-muted-foreground">Google UX Design, 2021</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
