import { useState, useEffect } from "react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Menú", href: "#menu" },
  { name: "Galería", href: "#galeria" },
  { name: "Reservas", href: "#reservas" },
  { name: "Ubicación", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = "auto";
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-4 md:px-12 ${
          scrolled
            ? "bg-brand-black/95 backdrop-blur-md shadow-xl py-3 border-b border-brand-gold/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo de la Marca */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-brand-gold/60 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
              <i className="fa-solid fa-utensils text-sm"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl md:text-2xl tracking-[0.2em] text-brand-cream uppercase leading-none">
                Sabor <span className="text-brand-gold font-light">Urbano</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 mt-1">
                Cocina Fusión & Autor
              </span>
            </div>
          </a>

          {/* Menú de Navegación (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wider text-brand-cream/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón CTA en Header */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+51987654321"
              className="text-xs text-brand-gold/90 hover:text-brand-gold flex items-center space-x-1.5 transition-colors"
            >
              <i className="fa-solid fa-phone text-xs"></i>
              <span>+51 (1) 234-5678</span>
            </a>
            <a
              href="#reservas"
              onClick={(e) => handleNavClick(e, "#reservas")}
              className="px-5 py-2.5 rounded-full bg-brand-gold text-brand-black text-xs font-semibold uppercase tracking-widest hover:bg-brand-goldHover hover:shadow-[0_0_18px_rgba(212,175,55,0.45)] transition-all duration-300"
            >
              Reservar Mesa
            </a>
          </div>

          {/* Botón Menú Móvil (Hamburguesa) */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar Menú" : "Abrir Menú"}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5 text-brand-cream focus:outline-none z-50"
          >
            <span
              className={`w-6 h-0.5 bg-brand-gold transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-4 h-0.5 bg-brand-gold self-end transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-brand-gold transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Menú Drawer Móvil */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-30 transition-transform duration-500 flex flex-col justify-between p-8 pt-28 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="font-serif text-2xl text-brand-cream hover:text-brand-gold transition-colors"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            onClick={(e) => handleNavClick(e, "#nosotros")}
            className="font-serif text-2xl text-brand-cream hover:text-brand-gold transition-colors"
          >
            Sobre Nosotros
          </a>
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, "#menu")}
            className="font-serif text-2xl text-brand-cream hover:text-brand-gold transition-colors"
          >
            Nuestra Carta
          </a>
          <a
            href="#galeria"
            onClick={(e) => handleNavClick(e, "#galeria")}
            className="font-serif text-2xl text-brand-cream hover:text-brand-gold transition-colors"
          >
            Galería
          </a>
          <a
            href="#reservas"
            onClick={(e) => handleNavClick(e, "#reservas")}
            className="font-serif text-2xl text-brand-cream hover:text-brand-gold transition-colors"
          >
            Reservaciones
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="font-serif text-2xl text-brand-cream hover:text-brand-gold transition-colors"
          >
            Contacto & Horarios
          </a>
        </div>

        <div className="flex flex-col space-y-4 text-center">
          <a
            href="#reservas"
            onClick={(e) => handleNavClick(e, "#reservas")}
            className="w-full py-3.5 rounded-full bg-brand-gold text-brand-black font-semibold tracking-wider uppercase text-sm shadow-lg"
          >
            Reserva Inmediata
          </a>
          <a
            href="tel:+51987654321"
            className="text-neutral-300 text-sm flex items-center justify-center space-x-2 py-2"
          >
            <i className="fa-solid fa-phone text-brand-gold"></i>
            <span>Llamar al restaurante</span>
          </a>
          <div className="flex justify-center space-x-6 text-brand-gold text-lg pt-4 border-t border-neutral-800">
            <a href="#" className="hover:text-brand-cream">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-brand-cream">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-brand-cream">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
