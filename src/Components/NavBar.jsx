import React,{useState} from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from "react-icons/fi"; 
export default function NavBar() {
    const links = [
        { name: "Acceuil", link: "home" },
        { name: "A propos", link: "about" },
        { name: "Experience", link: "experience" },
                { name: "Formation", link: "formation" },
        { name: "Compétences", link: "skills" },
        { name: "Contact", link: "contact" },
    ];
   const [nav, setNav] = useState(false);
    return (
   <div className="fixed top-0 left-0 z-10 w-full bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-600/60 backdrop-blur-lg shadow-lg">
  <div className="px-10 md:px-20 mx-auto flex flex-row h-20 justify-between items-center text-white">
     <img src="/LOGO1.png" alt="LOGO" className='w-[130px]'/>
    <div className="hidden md:flex flex-row space-x-10 text-lg font-medium">
      {links.map((item) => (
        <Link
          key={item.name}
          to={item.link}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass='active text-blue-400'
          className=" text-xl relative cursor-pointer hover:text-blue-900 transition-colors 
                     after:content-[''] after:absolute after:-bottom-1 after:left-0 
                     after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </div>

    {/* Bouton Menu Mobile */}
    <div className="md:hidden text-3xl cursor-pointer" onClick={() => setNav(!nav)}>
      {nav ? <FiX /> : <FiMenu />}
    </div>
  </div>

  {nav && (
    <div className="top-20 py-10 inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-600/60 flex flex-col items-center justify-center space-y-10 text-white text-2xl">
      {links.map((item) => (
        <Link
          key={item.name}
          to={item.link}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setNav(false)}
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</div>
    );
}
