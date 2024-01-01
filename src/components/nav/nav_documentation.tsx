import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./nav.scss";
// import { CgDarkMode } from "react-icons/cg";
// import { FaGlobe } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { RiHomeHeartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Nav2: React.FC = () => {
  const navigate = useNavigate();

  // Arreglo de objetos que contiene los nombres y áreas de navegación
  const navLinks = [
    { name: "ABOUT", area: "#about" },
    { name: "TECHNOLOGIES", area: "#technologies" },
    { name: "PROJECTS", area: "#projects" },
    { name: "CERTIFICATIONS", area: "#certificates" },
    { name: "CONTACT", area: "#contact" },
  ];

  // Maneja el scroll o redireccionamiento a la sección indicada
  const handleScrollOrRedirection = (area: string) => {
    const currentPath = window.location.pathname;

    if (area === "/" && currentPath === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (area === "/" && currentPath !== "/") {
      navigate("/");
    } else if (area.startsWith("/") && currentPath === "/") {
      const element = document.getElementById(area.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(area.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Espera 500ms para asegurarse de que la redirección se complete antes del desplazamiento
    }
  };

  // Maneja el click en los enlaces de navegación
  const handleNavLinkClick = (area: string, existingOnClick?: () => void) => {
    if (existingOnClick) {
      existingOnClick(); // Llama a la función onClick existente si hay alguna
    }
    handleScrollOrRedirection(area); // Llama a la función para redirección o desplazamiento
  };

  // Obtiene el scrollY y detecta cuando hay cambios
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false); // Controla el ocultamiento del nav al hacer scroll

  // Modifica el estado de 'hidden' en base al scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Controla si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Maneja el cierre del menú
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // Evita el desbordamiento cuando se abre el menú en dispositivos móviles
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Limpia el efecto cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <svg
        id="wave"
        viewBox="0 0 1440 110"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
      >
        <path
          fill="#080808"
          d="M0,55L80,47.7C160,40,320,26,480,33C640,40,800,70,960,69.7C1120,70,1280,40,1440,29.3C1600,18,1760,26,1920,40.3C2080,55,2240,77,2400,77C2560,77,2720,55,2880,42.2C3040,29,3200,26,3360,25.7C3520,26,3680,29,3840,25.7C4000,22,4160,11,4320,7.3C4480,4,4640,7,4800,22C4960,37,5120,62,5280,77C5440,92,5600,95,5760,84.3C5920,73,6080,48,6240,45.8C6400,44,6560,66,6720,67.8C6880,70,7040,51,7200,51.3C7360,51,7520,70,7680,71.5C7840,73,8000,59,8160,55C8320,51,8480,59,8640,66C8800,73,8960,81,9120,73.3C9280,66,9440,44,9600,44C9760,44,9920,66,10080,62.3C10240,59,10400,29,10560,25.7C10720,22,10880,44,11040,49.5C11200,55,11360,44,11440,38.5L11520,33L11520,110L11440,110C11360,110,11200,110,11040,110C10880,110,10720,110,10560,110C10400,110,10240,110,10080,110C9920,110,9760,110,9600,110C9440,110,9280,110,9120,110C8960,110,8800,110,8640,110C8480,110,8320,110,8160,110C8000,110,7840,110,7680,110C7520,110,7360,110,7200,110C7040,110,6880,110,6720,110C6560,110,6400,110,6240,110C6080,110,5920,110,5760,110C5600,110,5440,110,5280,110C5120,110,4960,110,4800,110C4640,110,4480,110,4320,110C4160,110,4000,110,3840,110C3680,110,3520,110,3360,110C3200,110,3040,110,2880,110C2720,110,2560,110,2400,110C2240,110,2080,110,1920,110C1760,110,1600,110,1440,110C1280,110,1120,110,960,110C800,110,640,110,480,110C320,110,160,110,80,110L0,110Z"
        ></path>
      </svg>

      <input
        type="checkbox"
        id="check"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen(!isMenuOpen)}
      />
      <label htmlFor="check" className="icons">
        <HiBars3 className="bars" id="menu-icon" />
        <IoClose className="close" id="close-icon" />
      </label>

      <div className="left-nav">
        <a
          href="/"
          className="home"
          onClick={(event) => {
            event.preventDefault();
            handleCloseMenu();
            handleNavLinkClick("/");
          }}
        >
          <RiHomeHeartLine className="home-icon" />
        </a>

        <nav>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.area}
              style={{ "--i": index } as React.CSSProperties}
              onClick={(event) => {
                event.preventDefault();
                handleCloseMenu();
                handleNavLinkClick(link.area);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* <div className="modes">
            <button className="modes-language">
              <FaGlobe className="modes-icon" />
              ES
            </button>
            <button className="modes-light">
              <CgDarkMode className="modes-icon" />
              DARK
            </button>
          </div> */}
    </motion.header>
  );
};

export default Nav2;
