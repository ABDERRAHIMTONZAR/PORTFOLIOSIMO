import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
 const links = [
        { name: "Acceuil", link: "home" },
        { name: "A propos", link: "about" },
        { name: "Experience", link: "experience" },
                { name: "Formation", link: "formation" },
        { name: "Compétences", link: "skills" },
        { name: "Contact", link: "contact" },
    ];

  return (
    <footer className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 text-gray-300">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/LOGO1.png"
              alt="Logo personnel"
              className="w-32 mb-4"
            />
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Développeur Full Stack passionné 🚀  
              Création d’applications modernes, performantes et scalables.
            </p>
          </div>

          <nav className="flex justify-center flex-wrap gap-6 text-base font-medium">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer relative group"
              >
                <span className="transition-colors group-hover:text-blue-400">
                  {item.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-20 h-10 rounded-full
                bg-white/10 backdrop-blur
                flex items-center justify-center
                text-lg
                hover:bg-blue-500 hover:text-white
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Mohammed Tonzar · Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
