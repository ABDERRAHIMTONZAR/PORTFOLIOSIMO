import React from "react";
import Label from "./COMPOSNANTREUTILISABLE/LABEL";
import { FaDownload, FaUser, FaBriefcase, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import Parcours from "./Parcours";
export default function Section2() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-10 py-10 gap-16 " id="about"> 
      
      {/* Photo */}
      <div className="w-full md:w-[40%] flex justify-center ">
        <div className="relative">
          <img 
            src="/section1.png" 
            alt="Photo de profil" 
            className="w-[300px] md:w-[300px] h-[300px] md:h-[400px] object-cover rounded-full shadow-xl border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Texte + Infos */}
      <div className="w-full md:w-[60%] space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Bonjour, je suis <span className="text-blue-600">MOHAMED Tonzar</span>
        </h1>
        
        <p className="sm:text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
          Diplômé d'un <strong>Master en Méthodes Informatiques appliquées à la Gestion des Entreprises </strong> 
          de l’Université Côte d’Azur, je travaille actuellement chez <strong>CGI</strong> en tant que 
          <span className="text-blue-600 font-semibold"> Développeur Full Stack</span>.  
          Mon rôle inclut la rédaction technique, la structuration de bases de données et la conception d’APIs, 
          assurant une connectivité optimale pour des solutions web innovantes.
        </p>

        <p className="sm:text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
          Je maîtrise les <strong>technologies Java</strong> et le modèle <strong>MVC</strong>, et je collabore 
          avec les parties prenantes pour livrer des projets respectant les délais et les spécifications.  
          Mon objectif est de continuer à évoluer dans un environnement dynamique et de contribuer à des projets web impactants.
        </p>

        <hr className="my-8 border-gray-300" />

        {/* Infos perso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Label nom={<><FaUser className="inline text-blue-500 mr-2"/> Nom</>} valeur="Tonzar Mohammed" />
          <Label nom={<><FaBriefcase className="inline text-blue-500 mr-2"/> Métier</>} valeur="Développeur Full Stack" />
          <Label nom={<><FaBirthdayCake className="inline text-blue-500 mr-2"/> Âge</>} valeur="26 ans" />
          <Label nom={<><FaMapMarkerAlt className="inline text-blue-500 mr-2"/> Ville</>} valeur="Nice, France" />
        </div>
        <div>
        </div>
        <div className="flex justify-start mt-8">
          <a 
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                       active:scale-95 transform transition duration-200 
                       text-white font-bold py-4 px-8 rounded-full 
                       flex items-center gap-3 justify-center cursor-pointer shadow-lg"
            href="/CV.pdf"
            download="CV_Mohammed_Tonzar.pdf"
          >
            <FaDownload />
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  );
}
