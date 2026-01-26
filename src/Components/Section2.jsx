import React from "react";
import Label from "./COMPOSNANTREUTILISABLE/LABEL";
import { FaDownload, FaUser, FaBriefcase, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";

export default function Section2() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-10 py-10 gap-16" id="about">

      <div className="w-full md:w-[40%] flex justify-center">
        <img
          src="/image.png"
          alt="Portrait professionnel"
          className="w-[300px] md:w-[300px] h-[300px] md:h-[400px] object-cover rounded-full shadow-xl border-4  hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="w-full md:w-[60%] space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Bonjour, je suis <span className="text-blue-600">MOHAMED Tonzar</span>
        </h1>

        <p className="text-lg text-gray-600 text-justify">
          Diplômé d’un <strong>Master MIAGE</strong>, je suis
          <span className="text-blue-600 font-semibold"> Responsable Informatique & Développeur Full Stack </span>
           chez <strong>Saphir Innovation</strong>, en charge du développement,
          de l’architecture et du déploiement des solutions web du projet
          <strong> Menus Services</strong>.
        </p>


        <hr className="my-8 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Label nom={<><FaUser className="inline mr-2 text-blue-500" /> Nom</>} valeur="Tonzar Mohammed" />
          <Label nom={<><FaBriefcase className="inline mr-2 text-blue-500" /> Métier</>} valeur="Développeur Full Stack" />
          <Label nom={<><FaBirthdayCake className="inline mr-2 text-blue-500" /> Âge</>} valeur="26 ans" />
          <Label nom={<><FaMapMarkerAlt className="inline mr-2 text-blue-500" /> Ville</>} valeur="France" />
        </div>

        <a
          href="/CV_MOHAMEDTONZAR.pdf"
          download="CV_MOHAMEDTONZAR.pdf"
          className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg"
        >
          <FaDownload /> Télécharger CV
        </a>
      </div>
    </div>
  );
}
