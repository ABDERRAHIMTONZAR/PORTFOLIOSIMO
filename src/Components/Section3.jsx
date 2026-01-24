import React from 'react'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, 
  FaDatabase, FaCode, FaProjectDiagram, FaDocker 
} from "react-icons/fa";
import { 
  SiMysql, SiMongodb, SiPostgresql, SiJenkins, SiSpringboot, 
  SiHibernate, SiAngular, SiDotnet, SiGithub, SiTypescript, 
  SiNextdotjs, SiExpress 
} from "react-icons/si";

export default function Section3() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 w-14 h-14" />, name: "HTML5", type: "FRONTEND" },
    { icon: <FaCss3Alt className="text-blue-500 w-14 h-14" />, name: "CSS3", type: "FRONTEND" },
    { icon: <FaJs className="text-yellow-400 w-14 h-14" />, name: "JavaScript", type: "FRONTEND" },
    { icon: <SiTypescript className="text-blue-700 w-14 h-14" />, name: "TypeScript", type: "FRONTEND" },
    { icon: <FaReact className="text-cyan-400 w-14 h-14" />, name: "React / React Native", type: "FRONTEND" },
    { icon: <SiAngular className="text-red-500 w-14 h-14" />, name: "Angular", type: "FRONTEND" },
    { icon: <SiNextdotjs className="text-black w-14 h-14" />, name: "Next.js", type: "FRONTEND" },

    { icon: <FaNodeJs className="text-green-500 w-14 h-14" />, name: "Node.js / Express", type: "BACKEND" },
    { icon: <SiExpress className="text-gray-600 w-14 h-14" />, name: "Express.js", type: "BACKEND" },
    { icon: <FaPhp className="text-indigo-500 w-14 h-14" />, name: "PHP", type: "BACKEND" },
    { icon: <FaJava className="text-red-600 w-14 h-14" />, name: "Java", type: "BACKEND" },
    { icon: <SiSpringboot className="text-green-700 w-14 h-14" />, name: "Spring Boot", type: "BACKEND" },
    { icon: <SiHibernate className="text-orange-600 w-14 h-14" />, name: "Hibernate", type: "BACKEND" },
    { icon: <FaCode className="text-purple-600 w-14 h-14" />, name: "VB.NET", type: "BACKEND" },
    { icon: <SiDotnet className="text-blue-500 w-14 h-14" />, name: ".NET / C#", type: "BACKEND" },

    { icon: <SiMysql className="text-blue-600 w-14 h-14" />, name: "MySQL", type: "DATABASE" },
    { icon: <SiMongodb className="text-green-700 w-14 h-14" />, name: "MongoDB", type: "DATABASE" },
    { icon: <SiPostgresql className="text-sky-700 w-14 h-14" />, name: "PostgreSQL", type: "DATABASE" },
    { icon: <FaDatabase className="text-gray-600 w-14 h-14" />, name: "SQL Server", type: "DATABASE" },

    { icon: <FaDocker className="text-blue-400 w-14 h-14" />, name: "Docker", type: "DEVOPS" },
    { icon: <SiJenkins className="text-red-600 w-14 h-14" />, name: "Jenkins", type: "DEVOPS" },
    { icon: <SiGithub className="text-black w-14 h-14" />, name: "GitHub / GitLab", type: "DEVOPS" },

    { icon: <FaProjectDiagram className="text-pink-500 w-14 h-14" />, name: "Méthode Merise", type: "METHODOLOGY" },
    { icon: <FaProjectDiagram className="text-orange-500 w-14 h-14" />, name: "Méthode UML", type: "METHODOLOGY" },
  ];

  const typeColors = {
    FRONTEND: "from-blue-500 to-cyan-500",
    BACKEND: "from-green-500 to-emerald-600",
    DATABASE: "from-yellow-500 to-orange-500",
    DEVOPS: "from-purple-500 to-pink-600",
    METHODOLOGY: "from-pink-500 to-red-500",
  };

  return (
    <div className="py-10 bg-gradient-to-r from-gray-50 to-white" id="skills">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        Mes <span className="text-blue-500">Compétences</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center mx-10">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center gap-4 p-6 w-[90%] bg-white hover:bg-gradient-to-r ${typeColors[skill.type]}
                       rounded-xl shadow-md hover:scale-110 transition-all duration-500 
                       hover:shadow-2xl hover:shadow-blue-500/40 cursor-pointer `}
          >
            {skill.icon}
            <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
            <span 
              className={`text-sm px-4 py-1 rounded-full text-white 
                          bg-gradient-to-r ${typeColors[skill.type]}`}
            >
              {skill.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
