import React from "react";
import { FaBriefcase, FaUniversity, FaGraduationCap } from "react-icons/fa";

export default function Parcours() {
  
const experience = [
  {
    icon: <FaBriefcase className="text-indigo-500 w-10 h-10" />,
    title: "Responsable informatique – Développeur Full Stack",
    subtitle: "Saphir Innovation",
    date: "2024 – En cours",
    location: "Paris · France",
    missions: [
      "Pilotage technique du projet : définition de l’architecture applicative, coordination des développements et supervision de la qualité du code",
      "Conception et développement d’applications web complètes avec ReactJS, PHP et Java, déployées sur serveur",
      "Conception, développement et documentation d’API REST",
      "Administration et optimisation de bases de données MySQL avec sécurisation des données",
      "Mise en place de tests unitaires et fonctionnels, intégration continue avec Maven et maintenance évolutive"
    ],
    skills: [
      "PHP",
      "Symfony",
      "API Platform",
      "ReactJS",
      "Zustand",
      "Java",
      "Maven",
      "Tomcat",
      "MySQL",
      "REST API"
    ]
  },

  {
    icon: <FaBriefcase className="text-blue-500 w-10 h-10" />,
    title: "Développeur Full Stack",
    subtitle: "CGI",
    date: "2022 – 2024",
    location: "Paris · Hybride",
    missions: [
      "Analyse des besoins métiers et rédaction de spécifications techniques",
      "Développement d’applications web avec Java Spring Boot (backend) et Angular (frontend)",
      "Conception, consommation et documentation d’API REST",
      "Modélisation, structuration et optimisation de bases de données relationnelles et NoSQL",
      "Réalisation de tests unitaires et fonctionnels, intégration continue et déploiement sur Tomcat"
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Angular",
      "REST API",
      "MongoDB Cloud",
      "Maven",
      "Tomcat"
    ]
  },

  {
    icon: <FaBriefcase className="text-teal-500 w-10 h-10" />,
    title: "Ingénieur Développeur Full Stack",
    subtitle: "ALTEN",
    date: "2021 – 2022",
    location: "Paris · Hybride",
    missions: [
      "Conception et développement d’API REST et microservices",
      "Documentation technique et API avec Swagger",
      "Traitement et validation de données JSON-LD",
      "Élaboration de tests unitaires et d’intégration",
      "Collaboration Agile, gestion du code source et revues via GitLab"
    ],
    skills: [
      "NestJS",
      "TypeScript",
      "REST API",
      "MongoDB Cloud",
      "Swagger",
      "GitLab"
    ]
  },

  {
    icon: <FaBriefcase className="text-blue-400 w-10 h-10" />,
    title: "Développeur Web",
    subtitle: "Virbac",
    date: "2019 – 2021",
    location: "France · Alternance",
    missions: [
      "Développement et déploiement de portails d’entreprise avec CMS Jahia",
      "Conception de modules personnalisés et templates responsive",
      "Maintenance évolutive et corrective des applications en production",
      "Amélioration de la qualité du code et conformité via SonarQube"
    ],
    skills: [
      "Java",
      "CMS Jahia",
      "HTML",
      "CSS",
      "JavaScript",
      "SonarQube"
    ]
  }
];
const formation = [
  {
    icon: <FaGraduationCap className="text-indigo-500 w-10 h-10" />,
    title: "AJC School",
    subtitle: "Certification Expert en Systèmes d’Information",
    date: "2023 – 2024",
    location: "Paris · France",
    missions: [
      "Architecture des systèmes d’information et urbanisation applicative",
      "Conception d’architectures logicielles et applicatives",
      "Gestion de projets IT et bonnes pratiques DevOps",
      "Sécurité des systèmes d’information et qualité logicielle"
    ],
    skills: [
      "Architecture SI",
      "API REST",
      "DevOps",
      "Sécurité",
      "Gestion de projet IT"
    ]
  },

  {
    icon: <FaGraduationCap className="text-indigo-500 w-10 h-10" />,
    title: "Université Côte d’Azur",
    subtitle: "Master MIAGE",
    date: "2019 – 2021",
    location: "France",
    missions: [
      "Méthodes informatiques appliquées à la gestion des entreprises (MIAGE)",
      "Mention : Bien"
    ],
    skills: ["SQL", "Jenkins", "Algorithmes", "React.js", "Angular", "Java"]
  },

  {
    icon: <FaUniversity className="text-green-500 w-10 h-10" />,
    title: "Faculté des sciences",
    subtitle: "Licence MIAGE",
    date: "2017 – 2018",
    location: "Maroc",
    missions: [
      "Licence MIAGE – Méthodes Informatiques Appliquées à la Gestion des Entreprises",
      "Mention : Bien"
    ],
    skills: ["SQL", "Bases de données", "Angular"]
  },

  {
    icon: <FaUniversity className="text-blue-500 w-10 h-10" />,
    title: "Institut Supérieur de Technologie Appliquée",
    subtitle: "Développeur Informatique",
    date: "2015 – 2017",
    location: "Maroc",
    missions: [
      "Programmation et développement d’applications spécifiques",
      "Programmation orientée objet (POO)",
      "Mention : Bien"
    ],
    skills: ["Programmation", "Base de données", "POO"]
  }
];
  return (
    <div className="py-20 bg-gradient-to-r from-gray-50 to-white" id="experience">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        Mon <span className="text-blue-500">Parcours</span>
      </h2>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center relative">
        Mes Expériences Professionnelles
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-col items-center ">
              {exp.icon}
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-3"></span>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
              <p className="text-blue-600 font-semibold">{exp.subtitle}</p>
              <p className="text-gray-500 text-sm">{exp.date} · {exp.location}</p>

              <ul className="mt-3 list-disc list-inside text-gray-600 text-sm space-y-1">
                {exp.missions.map((mission, i) => (
                  <li key={i}>{mission}</li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
            </div>
         <div id="formation" className="py-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-8 text-center relative">
        Mes Formations
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8">
        {formation.map((form, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-col items-center">
              {form.icon}
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-3"></span>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">{form.title}</h3>
              <p className="text-blue-600 font-semibold">{form.subtitle}</p>
              <p className="text-gray-500 text-sm">{form.date} · {form.location}</p>
      </div>
      
      </div>
      ))}
               </div>
</div>
    </div>        
  );
}
