import React from "react";
import {
  Code,
  Database,
  Globe,
  Palette,
  Server,
  Braces,
  FileCode2,
  Layout,
  Cpu,
  Figma as FigmaIcon,
  GitBranch,
} from "lucide-react";

function ProgressBar({ progress }) {
  return (
    <div className="relative w-full bg-gray-800 rounded-full h-2 overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

function SkillCard({ name, proficiency, icon: Icon, description }) {
  return (
    <div className="group relative bg-black/30 backdrop-blur-xl rounded-xl p-6 shadow-md border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="p-2 bg-gray-800 rounded-lg mr-3 group-hover:bg-cyan-500/10 transition-colors duration-300">
              <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {name}
            </h3>
          </div>
          <span className="text-sm font-medium text-cyan-400">{proficiency}%</span>
        </div>
        <ProgressBar progress={proficiency} />
        <p className="mt-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = [
    { name: "JavaScript", proficiency: 85, icon: Braces, description: "Advanced JavaScript including ES6+ features." },
    { name: "React", proficiency: 80, icon: Code, description: "Building modern web applications with React." },
    { name: "Node.js", proficiency: 75, icon: Server, description: "Server-side development with Node.js." },
    { name: "Express.js", proficiency: 78, icon: Server, description: "Backend development with Express.js." },
    { name: "API Development", proficiency: 80, icon: Globe, description: "Designing and building RESTful APIs." },
    { name: "MongoDB", proficiency: 80, icon: Database, description: "Database management using MongoDB." },
    { name: "Git & GitHub", proficiency: 88, icon: GitBranch, description: "Version control and collaboration." },
    { name: "Postman", proficiency: 85, icon: FileCode2, description: "API testing and debugging with Postman." },
    { name: "Tailwind CSS", proficiency: 90, icon: Palette, description: "Modern and responsive UI development." },
    { name: "HTML5", proficiency: 95, icon: Layout, description: "Semantic markup and modern web standards." },
    { name: "CSS3", proficiency: 85, icon: Globe, description: "Advanced styling and responsive design." },
    { name: "Figma", proficiency: 80, icon: FigmaIcon, description: "UI/UX design and prototyping." },
    { name: "C++", proficiency: 70, icon: Cpu, description: "Object-oriented programming and algorithms." },
    { name: "C", proficiency: 65, icon: Cpu, description: "Low-level programming and system development." },
  ];

  return (
    <section className="relative bg-gray-950 py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Technical Expertise
        </h2>
        <p className="text-gray-400 text-lg mt-4">
          Showcasing my technical proficiency and expertise in web development.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} proficiency={skill.proficiency} icon={skill.icon} description={skill.description} />
        ))}
      </div>
    </section>
  );
}
